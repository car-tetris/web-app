/*
 * Configs for environments.
 * (only edit config.*.js)
 */

if(process.env.NODE_ENV == 'test') {
  module.exports = require('./config.test');
}else if(process.env.NODE_ENV == 'stage') {
  module.exports = require('./config.stage');
}else if(process.env.NODE_ENV == 'production') {
  module.exports = require('./config.production');
}else{
  module.exports = require('./config.development');
}
