const Slider = require('./src/index');
const G2 = require('@antv/g2');
if (G2) {
  const Plugin = G2.Plugin || {};
  Plugin.Slider = Slider;
} else {
  console.err('Please load the G2 script first!');
}

module.exports = Slider;
