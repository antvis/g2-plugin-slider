"use strict";

var Slider = require('./src/slider');
var G2 = require('g2');
if (G2 && G2.Plugin) {
  var Plugin = G2.Plugin;
  Plugin.slider = Slider;
} else {
  console.err('Please load the G2 script first!');
}
module.exports = Slider;
