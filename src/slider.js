/**
 * @fileOverview G2's plugin for datazoom.
 * @author sima.zhang1990@gmail.com
 */

'use strict';

var G2 = require('g2');
var Util = G2.Util;
var Base = G2.Base;
var DataFrame = G2.Frame;
var Canvas = G2.Canvas;
var Range = require('./range');
var OFFSET = 5;

var Slider = function(cfg) {
  Slider.superclass.constructor.call(this, cfg);
  this._init();
};

Slider.ATTRS = {
  charts: null,
  height: null,
  width: null,
  start: null,
  end: null,
  domId: null,
  xDim: null,
  yDim: null,
  /**
   * 中间滑块
   * @type {ATTRS}
   */
  middleAttr: {
    fill: '#D5DAE3',
    fillOpacity: 0.2
  },
  backgroundAttr: {
    stroke: '#E2E2E2',
    fill: '#F3F3F3',
    opacity: 0.2,
    lineWidth: 1
  },
  range: [0, 100],
  layout: 'horizontal',
  textAttr: {
    fill: '#333'
  },
  handleIcon: 'https://t.alipayobjects.com/images/rmsweb/T1YohhXd4bXXXXXXXX.png'
};

Util.extend(Slider, Base);

Util.augment(Slider, {
  _init: function() {
    this.set('container', document.getElementById(this.get('domId')));
    this.set('firstRender', 'true');
    var linkCharts = this.get('charts');
    var chart = Util.isArray(linkCharts) ? linkCharts[0] : linkCharts;
    var forceFit = chart.get('parent') ? chart.get('parent').get('forceFit') : chart.get('forceFit');
    if (forceFit) {
      window.addEventListener('resize', Util.wrapBehavior(this, '_initForceFitEvent'));
    }
  },
  _initForceFitEvent: function() {
    var timer = setTimeout(Util.wrapBehavior(this, 'forceFit'), 200);
    clearTimeout(this.get('resizeTimer'));
    this.set('resizeTimer', timer);
  },
  forceFit: function() {
    var linkCharts = this.get('charts');
    var chart = Util.isArray(linkCharts) ? linkCharts[0] : linkCharts;
    var width = chart.get('parent') ? chart.get('parent').get('width') : chart.get('width');
    var height = this.get('height');
    if (width !== this.get('width')) {
      var canvas = this.get('canvas');
      var filters = chart.get('options').filters;
      var xDim = this.get('xDim');
      this.set('start', filters[xDim][0]);
      this.set('end', filters[xDim][1]);
      this.set('width', width);
      canvas.changeSize(width, height);
      this.set('changeSize', true);
      this.repaint();
    }
  },
  _initCanvas: function() {
    var width = this.get('width');
    var height = this.get('height');
    var canvas = new Canvas({
      width: width,
      height: height,
      containerDOM: this.get('container'),
      capture: false
    });
    canvas.set('fontFamily', G2.Global.fontFamily);
    // style canvas
    var node = canvas.get('el');
    node.style.position = 'absolute';
    node.style.top = 0;
    node.style.left = 0;
    node.style.zIndex = 3;
    this.set('canvas', canvas);
  },
  _initBackground: function(linkChart) {
    var data = linkChart.get('data');
    if (!(data instanceof DataFrame)) {
      data = new DataFrame(data);
    }
    var options = linkChart.get('options');

    var xDim = this.get('xDim');
    var yDim = this.get('yDim');
    var xScale;
    if (this.get('changeSize')) {
      xScale = this.get('xScale');
    } else {
      var scaleAssist = linkChart.get('scaleAssist');
      scaleAssist.defs = Util.mix({}, true, scaleAssist.defs, options.scales);
      xScale = scaleAssist.createScale(xDim, data);
    }

    if (yDim) { // 如果声明了 yDim, 则创建滑块背景图
      var bgChart = new G2.Chart({
        id: this.get('domId'),
        width: this.get('plotWidth'),
        height: this.get('height'),
        plotCfg: {
          margin: 0
        }
      });
      bgChart.source(data);
      bgChart.col(xDim, {
        range: [0, 1],
        nice: false
      });
      bgChart.axis(false);
      bgChart.tooltip(false);
      bgChart.legend(false);
      bgChart.area().position(xDim + '*' + yDim).color('#CED1D4');
      bgChart.line().position(xDim + '*' + yDim).color('#CED1D4');
      bgChart.render();
      // 自动对齐
      var canvas = bgChart.get('canvas');
      var container = canvas.get('el').parentNode;
      container.style.marginLeft = this.get('marginLeft') + 'px';
      this.set('bgChart', bgChart);
    }
    this.set('xScale', xScale);
  },
  _initRange: function() {
    var start = this.get('start');
    var end = this.get('end');
    var xScale = this.get('xScale');
    var min = start ? xScale.scale(start) : 0.3;
    var max = end ? xScale.scale(end) : 0.7;
    var range = [min * 100, max * 100];
    this.set('range', range);
    return range;
  },
  _getHandleValue: function(type) {
    var value;
    var range = this.get('range');
    var min = range[0] / 100;
    var max = range[1] / 100;
    var xScale = this.get('xScale');
    if (type === 'min') {
      value = this.get('start') ? this.get('start') : xScale.invert(min);
    } else {
      value = this.get('end') ? this.get('end') : xScale.invert(max);
    }
    return value;
  },
  _initHorizontalHandle: function(type) {
    var canvas = this.get('canvas');
    var handle = canvas.addGroup();
    var height = this.get('height');
    var xScale = this.get('xScale');
    var handleValue = xScale.getText(this._getHandleValue(type));

    handle.addShape('Image', {
      attrs: {
        x: -height / 2,
        y: 0,
        width: height,
        height: height,
        img: this.get('handleIcon')
      }
    });
    var text = handle.addShape('Text', {
      attrs: Util.mix({
        x: (type === 'min') ? -(height / 2 + OFFSET) : height / 2 + OFFSET,
        y: height / 2,
        textAlign: (type === 'min') ? 'end' : 'start',
        textBaseline: 'middle',
        text: handleValue
      }, this.get('textAttr'))
    });

    this.set(type + 'TextElement', text);
    return handle;
  },
  _initSliderBackground: function() {
    var canvas = this.get('canvas');
    var backgroundElement = canvas.addGroup();
    backgroundElement.initTransform();
    backgroundElement.translate(0, 0);
    backgroundElement.addShape('Rect', {
      attrs: Util.mix({
        x: 0,
        y: 0,
        width: this.get('plotWidth'),
        height: this.get('height')
      }, this.get('backgroundAttr'))
    });
    return backgroundElement;
  },
  _initSlider: function() {
    var canvas = this.get('canvas');
    var range = this._initRange();
    var minHandleElement = this._initHorizontalHandle('min');
    var maxHandleElement = this._initHorizontalHandle('max');
    var backgroundElement = this._initSliderBackground();

    var rangeElement = canvas.addGroup(Range, {
      minHandleElement: minHandleElement,
      maxHandleElement: maxHandleElement,
      backgroundElement: backgroundElement,
      middleAttr: this.get('middleAttr'),
      range: range,
      layout: this.get('layout'),
      width: this.get('plotWidth'),
      height: this.get('height')
    });
    rangeElement.translate(this.get('marginLeft'), 0);
    this.set('rangeElement', rangeElement);
  },
  _bindEvent: function() {
    var self = this;
    var rangeElement = self.get('rangeElement');
    var xDim = self.get('xDim');
    var xScale = self.get('xScale');

    rangeElement.on('rangeChange', function(ev) {
      var range = ev.range;
      var minRatio = range[0] / 100;
      var maxRatio = range[1] / 100;
      var min = xScale.invert(minRatio);
      var max = xScale.invert(maxRatio);
      var minText = xScale.getText(min);
      var maxText = xScale.getText(max);
      self._updateElement(minText, maxText);
      self._updateLinkCharts(xDim, [min, max]);
    });
  },
  _updateElement: function(min, max) {
    var minTextElement = this.get('minTextElement');
    var maxTextElement = this.get('maxTextElement');
    minTextElement.attr(Util.mix({}, minTextElement.__attrs, {
      text: min
    }));
    maxTextElement.attr(Util.mix({}, maxTextElement.__attrs, {
      text: max
    }));

    if (this.get('bgChart')) { // 将背景图表转换为背景图
      var bgChart = this.get('bgChart');
      var canvas = bgChart.get('canvas').get('el');
      var img = canvas.toDataURL('image/png');
      var container = this.get('container');
      container.style.width = this.get('width') + 'px';
      container.style.height = this.get('height') + 'px';
      container.style.backgroundImage = 'url(' + img + ')';
      container.style.backgroundRepeat = 'no-repeat';
      container.style.backgroundPositionX = this.get('marginLeft') + 'px';
      container.style.backgroundSize = 'contain';
      bgChart.destroy();
      this.set('bgChart', null);
    }
    this.set('firstRender', false);
  },
  _updateLinkCharts: function(dim, range) {
    var self = this;
    var linkCharts = Util.isArray(self.get('charts')) ? self.get('charts') : [self.get('charts')];
    if (linkCharts[0].get('parent')) {
      Util.each(linkCharts, function(chart) {
        chart.filter(dim, range);
      });
      var parentChart = linkCharts[0].get('parent');
      if (self.get('firstRender')) {
        parentChart.render();
      } else {
        parentChart.repaint();
      }
    } else {
      Util.each(linkCharts, function(chart) {
        chart.filter(dim, range);
        if (self.get('firstRender')) {
          chart.render();
        } else {
          chart.repaint();
        }
      });
    }
  },
  render: function() {
    var linkCharts = this.get('charts');
    var chart = Util.isArray(linkCharts) ? linkCharts[0] : linkCharts;
    var plotRange;
    var width;
    if (chart.get('parent')) {
      plotRange = chart.get('parent').get('plotRange');
      width = chart.get('parent').get('width');
    } else {
      plotRange = chart.get('plotRange');
      width = chart.get('width');
    }

    this.set('plotWidth', plotRange.tr.x - plotRange.tl.x);
    this.set('marginLeft', plotRange.tl.x);
    this.set('width', width);

    if (!this.get('canvas')) {
      this._initCanvas();
    }
    this._initBackground(chart);
    this._initSlider();
    this._bindEvent();

    var xDim = this.get('xDim');
    var min = this._getHandleValue('min');
    var max = this._getHandleValue('max');
    if (!this.get('changeSize')) {
      this._updateLinkCharts(xDim, [min, max]);
    }
    this.get('canvas').draw();
  },
  destroy: function() {
    var rangeElement = this.get('rangeElement');
    rangeElement.off('rangeChange');
    this.get('bgChart') && this.get('bgChart').destroy();
    this.get('canvas').destroy();
    var container = this.get('container');
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }
    Slider.superclass.destroy.call(this);
    window.removeEventListener('resize', Util.getWrapBehavior(this, '_initForceFitEvent'));
  },
  clear: function() {
    var container = this.get('container');
    container.style.backgroundImage = '';
    this.get('canvas').clear();
    this.get('bgChart') && this.get('bgChart').destroy();
    this.set('bgChart', null);
  },
  repaint: function() {
    this.set('firstRender', false);
    this.clear();
    this.render();
  }
});

module.exports = Slider;
