
module.exports =  {
  devServer: {
    host: 'localhost',
    port: 3003
  },
  global: {
    api: {
      url: "http://localhost:3000/api",
      tokenTtl: 36000
    }
  }
};
