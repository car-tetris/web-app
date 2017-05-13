require("babel-core/register");
require('babel-polyfill');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');
var config = require('./config');

var ENV = process.env.NODE_ENV || 'development';

new webpackDevServer(webpack(webpackConfig), {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true,
  hot: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: {
    colors: true
  }
}).listen(config.devServer.port, config.devServer.host, function (err) {
  if(err) {
    console.log(err);
  }else{
    console.log("Environment: " + ENV);
    console.info('Listening on http://%s:%s/', config.devServer.host, config.devServer.port);
  }
});
