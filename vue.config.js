const path = require('path');

const _conf = require('./local_configs')

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}
// vue.config.js
module.exports = {
  devServer: {
    disableHostCheck: false,
    host: '0.0.0.0',
    port: _conf.port
  },
  lintOnSave: false,
  configureWebpack: {
    // Set up all the aliases we use in our app.
    resolve: {
      alias: {
        src: resolveSrc('src'),
      }
    },
  },
};
