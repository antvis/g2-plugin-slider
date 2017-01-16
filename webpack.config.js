var webpack = require('atool-build/lib/webpack');

module.exports = function(webpackConfig) {

  webpackConfig.plugins.some(function(plugin, i){
    if(plugin instanceof webpack.optimize.CommonsChunkPlugin) {
      webpackConfig.plugins.splice(i, 1);
      return true;
    }
  });

  webpackConfig.output.library = 'Slider';
  webpackConfig.output.libraryTarget = 'var';
  webpackConfig.externals = [
    {"g2": "window.G2"}
  ];
  // webpackConfig.entry = ['./tests/index-spec.js']; // 测试用例入口

  return webpackConfig;
};
