var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var config = require('./config');
var fs = require("node-fs-extra");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var spawnSync = require("child_process").spawnSync;

var indexHtml = "index.html";
var ENV = process.env.NODE_ENV || 'development';
var buildPath = "dist"

var webpackConfig = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, buildPath, "assets"),
    filename: 'bundle.[hash].js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.DefinePlugin({
      __CONFIG__: JSON.stringify(config.global),
      __DEV__: ENV === 'development',
      __TEST__: ENV === 'test',
      __STAGE__: ENV === 'stage',
      __PROD__: ENV === 'production'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
        ],
      }
    ],
    noParse: /node_modules\/quill\/dist/
  },
  // Process the CSS with PostCSS
  postcss: [
    require("postcss-import")({
      addDependencyTo: webpack
    }),
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'IE > 10']
    }),
    require('postcss-reporter')({
      clearMessages: true
    })
  ]
}

if(ENV === 'development') {

  webpackConfig.output.filename = 'bundle.js';
  webpackConfig.entry.unshift(
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://' + config.devServer.host + ':' + config.devServer.port,
    'webpack/hot/only-dev-server'
  );
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );

}else if(ENV === 'production' || ENV === 'test' || ENV === 'stage') {

  // Without eval we are able to log warnings with window.onerror
  //webpackConfig.devtool = 'eval';
  webpackConfig.module.loaders = [
    {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      // Extract css from bundle.js
      loader: ExtractTextPlugin.extract(
        'style-loader',
        'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
      )
    }
  ]

  webpackConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        screw_ie8: true
      }
    }),
    new ExtractTextPlugin("styles.[hash].css", {allChunks: true}),
    // copy assets to dist/assets
    new CopyWebpackPlugin([
      { from: 'assets', ignore: [".DS_Store", "styles.css"] }
    ]),
    function() {
        this.plugin("done", function(statsData) {
          var stats = statsData.toJson();

          if(!stats.errors.length) {
            // Read index.html
            var htmlOutput = fs.readFileSync(path.join(__dirname, indexHtml), "utf8");

            // Find bundle.js and replace ist with bundle.[hash].js
            htmlOutput = htmlOutput.replace(
                /<script\s+src=(["'])(.+?)bundle\.js\1/i,
                "<script src=$1$2" + stats.assetsByChunkName.main[0] + "$1");

            // Replace styles.css with styles.[hash].css
            htmlOutput = htmlOutput.replace(
                /<link\s+href=(["'])(.+?)styles\.css\1/i,
                "<link href=$1$2" + stats.assetsByChunkName.main[1] + "$1");

            // Find node_modules and copy them to the assets folders.
            do{
              var nodeModulePath = htmlOutput.match(/"\/node_modules\/[^"]+/i);
              if(nodeModulePath) {
                var fullPath = nodeModulePath[0].replace('"', '');
                var newFileName = fullPath.split("/").slice(-1) + "";
                htmlOutput = htmlOutput.replace(fullPath, "/assets" + fullPath);

                fs.copySync(
                  path.join(__dirname, fullPath.replace("/"+newFileName, "")),
                  path.join(__dirname, buildPath, "assets", fullPath.replace("/"+newFileName, ""))
                );
              }
            }while(nodeModulePath);

            // Place javascript before bundle.js
            var scriptCode = [];

            scriptCode.push("var DEPLOY_TIME = new Date('"+ new Date() +"');");

            // Get git hash
            var gitCommand = spawnSync( "git", [ "rev-parse", "HEAD" ], { stdio: "pipe" } );
            var gitHash = String(gitCommand.stdout);
            if(gitHash != "null") {
              gitHash = gitHash.replace(/[^a-z0-9]/gi, "");
              scriptCode.push("var DEPLOY_HASH = '" + gitHash + "';");
            }

            // Replace /*code_placeholder*/ with dynamic script.
            if(scriptCode.length > 0) {
              htmlOutput = htmlOutput.replace(/\/\*code_placeholder\*\//g,
                '\n\t\t' + scriptCode.reduce(function(out, row) {
                  return out + '\n\t\t\t' + row + '\n';
                }) + '\t\t'
              );
            }

            // Write a version.json to check git hash differences.
            // We're able to inform the user about an update.
            var versionFile = {
              hash: gitHash,
              time: new Date()
            }
            fs.writeFileSync(
              path.join(__dirname, buildPath, 'version.json'),
              JSON.stringify(versionFile, null, 2),
              'utf8'
            );

            // Write new index.html
            fs.writeFileSync(
              path.join(__dirname, buildPath, indexHtml),
              htmlOutput,
              'utf8'
            );

            // copy robots.txt
            fs.createReadStream(path.join(__dirname, "robots.txt"))
              .pipe(fs.createWriteStream(path.join(__dirname, buildPath, "robots.txt")));
          }
        });
    }
  )

}

module.exports = webpackConfig;
