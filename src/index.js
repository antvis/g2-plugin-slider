/**
 * @fileOverview G2's plugin for datazoom.
 * @author sima.zhang
 */

const { Chart, Util, G } = require('@antv/g2');
const { Canvas } = G;

const Range = require('./component/range');
const OFFSET = 5;

class Slider {
  _initProps() {
    this.charts = null;
    this.height = null;
    this.width = null;
    this.start = null;
    this.end = null;
    this.container = null;
    this.xAxis = null;
    this.yAxis = null;
    // 选中区域的样式
    this.fillerStyle = {
      fill: '#D5DAE3',
      fillOpacity: 0.2
    };
    // 滑动条背景样式
    this.backgroundStyle = {
      stroke: '#E2E2E2',
      fill: '#F3F3F3',
      opacity: 0.2,
      lineWidth: 1
    };
    this.range = [ 0, 100 ];
    this.layout = 'horizontal';
    // 文本颜色
    this.textStyle = {
      fill: '#333'
    };
    // 滑块的样式
    this.handleStyle = {
      img: 'https://t.alipayobjects.com/images/rmsweb/T1YohhXd4bXXXXXXXX.png'
    };
    // 背景图表的配置，如果为 false 则表示不渲染
    this.backgroundChart = {};
  }
  constructor(cfg) {
    this._initProps();
    Util.mix(this, cfg);
    this.init();
  }

  init() {
    this.container = document.getElementById(this.container);
    this.firstRender = true;

    const linkCharts = this.charts;
    const chart = Util.isArray(linkCharts) ? linkCharts[0] : linkCharts;
    const forceFit = chart.get('parent') ? chart.get('parent').get('forceFit') : chart.get('forceFit');
    if (forceFit) {
      window.addEventListener('resize', Util.wrapBehavior(this, '_initForceFitEvent'));
    }
  }

  _initForceFitEvent() {
    const timer = setTimeout(Util.wrapBehavior(this, 'forceFit'), 200);
    clearTimeout(this.resizeTimer);
    this.resizeTimer = timer;
  }

  forceFit() {
    const linkCharts = this.charts;
    const chart = Util.isArray(linkCharts) ? linkCharts[0] : linkCharts;
    const width = chart.get('parent') ? chart.get('parent').get('width') : chart.get('width');
    const height = this.height;
    if (width !== this.width) {
      const canvas = this.canvas;
      const filters = chart.get('options').filters;
      const xAxis = this.xAxis;
      this.start = filters[xAxis][0];
      this.end = filters[xAxis][1];
      this.width = width;
      canvas.changeSize(width, height);
      this.changeSize = true;
      this.repaint();
    }
  }

  render() {
    const linkCharts = this.charts;
    const chart = Util.isArray(linkCharts) ? linkCharts[0] : linkCharts;
    let plotRange;
    let width;
    if (chart.get('parent')) {
      plotRange = chart.get('parent').get('plotRange');
      width = chart.get('parent').get('width');
    } else {
      plotRange = chart.get('plotRange');
      width = chart.get('width');
    }

    this.plotWidth = plotRange.tr.x - plotRange.tl.x;
    this.marginLeft = plotRange.tl.x;
    this.width = width;

    if (!this.canvas) {
      this._initCanvas();
    }
    this._initBackground(chart);
    this._initSlider();
    this._bindEvent();

    const xAxis = this.xAxis;
    const min = this._getHandleValue('min');
    const max = this._getHandleValue('max');
    if (!this.changeSize) {
      this._updateLinkCharts(xAxis, [ min, max ]);
    }
    this.canvas.draw();
  }

  destroy() {
    const rangeElement = this.rangeElement;
    rangeElement.off('sliderchange');
    this.bgChart && this.bgChart.destroy();
    this.canvas.destroy();
    const container = this.container;
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }
    Slider.superclass.destroy.call(this);
    window.removeEventListener('resize', Util.getWrapBehavior(this, '_initForceFitEvent'));
  }

  clear() {
    const container = this.container;
    container.style.backgroundImage = '';

    let charts = this.charts;
    if (!Util.isArray(charts)) {
      charts = [ charts ];
    }
    // Util.each(charts, function(chart) {
    //   chart.set('_originData', null);
    // });

    this.canvas.clear();
    this.bgChart && this.bgChart.destroy();
    this.bgChart = null;
  }

  repaint() {
    this.firstRender = false;
    this.clear();
    this.render();
  }

  _initCanvas() {
    const width = this.width;
    const height = this.height;
    const canvas = new Canvas({
      width,
      height,
      containerDOM: this.container,
      capture: false
    });
    // canvas.set('fontFamily', G2.Global.fontFamily);
    // style canvas
    const node = canvas.get('el');
    node.style.position = 'absolute';
    node.style.top = 0;
    node.style.left = 0;
    node.style.zIndex = 3;
    this.canvas = canvas;
  }

  _initBackground(linkChart) {
    const data = linkChart.get('data'); // TODO: 是否会是 DataView 对象
    // if (!(data instanceof DataFrame)) {
    //   data = new DataFrame(data);
    // }
    const options = linkChart.get('options');

    const xAxis = this.xAxis;
    const yAxis = this.yAxis;
    let xScale;
    if (this.changeSize) {
      xScale = this.xScale;
    } else {
      const scaleController = linkChart.get('scaleController');
      scaleController.defs = Util.mix({}, true, scaleController.defs, options.scales);
      xScale = scaleController.createScale(xAxis, data);
    }

    if (this.backgroundChart) {
      const backgroundChart = this.backgroundChart;
      const bgChartX = backgroundChart.xAxis || xAxis;
      const bgChartY = backgroundChart.yAxis || yAxis;
      const geom = backgroundChart.geom;
      const color = backgroundChart.color || '#CED1D4';

      const bgChart = new Chart({
        container: this.container,
        width: this.plotWidth,
        height: this.height,
        padding: 0
      });
      bgChart.source(data);
      bgChart.scale('#CED1D4', {
        range: [ 0, 1 ],
        nice: false
      });
      bgChart.axis(false);
      bgChart.tooltip(false);
      bgChart.legend(false);
      if (geom) {
        bgChart[geom]().position(bgChartX + '*' + bgChartY).color(color);
      } else {
        bgChart.area().position(bgChartX + '*' + bgChartY).color(color);
        bgChart.line().position(bgChartX + '*' + bgChartY).color(color);
      }
      bgChart.render();
      // 自动对齐
      const canvas = bgChart.get('canvas');
      const container = canvas.get('el').parentNode;
      container.style.marginLeft = this.marginLeft + 'px';
      this.bgChart = bgChart;
    }

    this.xScale = xScale;
  }

  _initRange() {
    const start = this.start;
    const end = this.end;
    const xScale = this.xScale;
    const min = start ? xScale.scale(start) : 0.3;
    const max = end ? xScale.scale(end) : 0.7;
    const range = [ min * 100, max * 100 ];
    this.range = range;
    return range;
  }

  _getHandleValue(type) {
    let value;
    const range = this.range;
    const min = range[0] / 100;
    const max = range[1] / 100;
    const xScale = this.xScale;
    if (type === 'min') {
      value = this.start ? this.start : xScale.invert(min);
    } else {
      value = this.end ? this.end : xScale.invert(max);
    }
    return value;
  }

  _initHorizontalHandle(type) {
    const canvas = this.canvas;
    const handle = canvas.addGroup();
    const height = this.height;
    const xScale = this.xScale;
    const handleValue = xScale.getText(this._getHandleValue(type));

    handle.addShape('Image', {
      attrs: Util.mix({
        x: -height / 2,
        y: 0,
        width: height,
        height
      }, this.handleStyle)
    });
    const text = handle.addShape('Text', {
      attrs: Util.mix({
        x: (type === 'min') ? -(height / 2 + OFFSET) : height / 2 + OFFSET,
        y: height / 2,
        textAlign: (type === 'min') ? 'end' : 'start',
        textBaseline: 'middle',
        text: handleValue
      }, this.textStyle)
    });

    this[type + 'TextElement'] = text;
    return handle;
  }

  _initSliderBackground() {
    const canvas = this.canvas;
    const backgroundElement = canvas.addGroup();
    backgroundElement.initTransform();
    backgroundElement.translate(0, 0);
    backgroundElement.addShape('Rect', {
      attrs: Util.mix({
        x: 0,
        y: 0,
        width: this.plotWidth,
        height: this.height
      }, this.backgroundStyle)
    });
    return backgroundElement;
  }

  _initSlider() {
    const canvas = this.canvas;
    const range = this._initRange();
    const minHandleElement = this._initHorizontalHandle('min');
    const maxHandleElement = this._initHorizontalHandle('max');
    const backgroundElement = this._initSliderBackground();

    const rangeElement = canvas.addGroup(Range, {
      minHandleElement,
      maxHandleElement,
      backgroundElement,
      middleAttr: this.fillerStyle,
      range,
      layout: this.layout,
      width: this.plotWidth,
      height: this.height
    });
    rangeElement.translate(this.marginLeft, 0);
    this.rangeElement = rangeElement;
  }

  _bindEvent() {
    const self = this;
    const rangeElement = self.rangeElement;
    const xAxis = self.xAxis;
    const xScale = self.xScale;

    rangeElement.on('sliderchange', function(ev) {
      const range = ev.range;
      const minRatio = range[0] / 100;
      const maxRatio = range[1] / 100;
      const min = xScale.invert(minRatio);
      const max = xScale.invert(maxRatio);
      const minText = xScale.getText(min);
      const maxText = xScale.getText(max);
      self._updateElement(minText, maxText);
      self._updateLinkCharts(xAxis, [ min, max ]);
    });
  }

  _updateElement(min, max) {
    const minTextElement = this.minTextElement;
    const maxTextElement = this.maxTextElement;
    minTextElement.attr(Util.mix({}, minTextElement.__attrs, {
      text: min
    }));
    maxTextElement.attr(Util.mix({}, maxTextElement.__attrs, {
      text: max
    }));

    if (this.bgChart) { // 将背景图表转换为背景图
      const bgChart = this.bgChart;
      const canvas = bgChart.get('canvas').get('el');
      const img = canvas.toDataURL('image/png');
      const container = this.container;
      container.style.width = this.width + 'px';
      container.style.height = this.height + 'px';
      container.style.backgroundImage = 'url(' + img + ')';
      container.style.backgroundRepeat = 'no-repeat';
      container.style.backgroundPositionX = this.marginLeft + 'px';
      container.style.backgroundSize = 'contain';
      bgChart.destroy();
      this.bgChart = null;
    }
    this.firstRender = false;
  }

  _updateLinkCharts(dim, range) {
    const self = this;
    const linkCharts = Util.isArray(self.charts) ? self.charts : [ self.charts ];
    const xScale = self.xScale;
    const min = xScale.translate(range[0]);
    const max = xScale.translate(range[1]);
    // if (xScale.isCategory && xScale.type !== 'timeCat') { // 分类
    //   const values = xScale.values;
    //   const minIndex = values.indexOf(range[0]);
    //   const maxIndex = values.indexOf(range[1]);
    //   range = values.slice(minIndex, maxIndex + 1);

    //   Util.each(linkCharts, function(chart) {
    //     let frame;
    //     if (chart.get('_originData')) {
    //       frame = chart.get('_originData');
    //     } else {
    //       frame = chart.get('data');
    //       chart.set('_originData', frame);
    //     }

    //     frame = G2.Frame.filter(frame, function(obj) {
    //       return range.indexOf(obj[dim]) > -1;
    //     });
    //     if (frame && frame.data.length) {
    //       chart.changeData(frame);
    //     }
    //   });
    // } else {
    if (linkCharts[0].get('parent')) {
      Util.each(linkCharts, function(chart) {
        chart.filter(dim, val => {
          val = xScale.translate(val);
          return val <= max && val >= min;
        });
      });
      const parentChart = linkCharts[0].get('parent');
      if (self.firstRender) {
        parentChart.render();
      } else {
        parentChart.repaint();
      }
    } else {
      Util.each(linkCharts, function(chart) {
        chart.filter(dim, val => {
          val = xScale.translate(val);
          return val <= max && val >= min;
        });
        if (self.firstRender) {
          chart.render();
        } else {
          chart.repaint();
        }
      });
    }
    // }
  }
}

module.exports = Slider;
