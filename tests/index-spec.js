var expect = require('expect.js');
var $ = require('jquery');
var G2 = require('g2');
var Slider = require('../src/slider');

$('<div id="c1"></div>').appendTo('body');
$('<div id="range"></div>').appendTo('body');

$('<div id="c2"></div>').appendTo('body');
$('<div id="range2"></div>').appendTo('body');

describe('Test cases', function() {
  it('slider', function() {
    $.getJSON('./candleSticks.json', function(data) {
      var Stat = G2.Stat;
      var chart = new G2.Chart({
        id: 'c1',
        width: 800,
        height: 250,
        plotCfg: {
          margin: [30, 120, 30],
          background: {
            fill: '#191821'
          }
        }
      });
      // 创建数据源
      var Frame = G2.Frame;
      var frame = new Frame(data);
      frame.addCol('trend', function(obj) {
        return (obj.start <= obj.end) ? 0 : 1;
      });
      chart.source(frame, {
        'trend': {
          type: 'cat',
          alias: '趋势',
          values: ['上涨', '下跌']
        },
        'time': {
          type: 'timeCat',
          nice: false,
          mask: 'mm-dd',
          alias: '时间',
          tickCount: 10,
          range: [0, 1]
        },
        'volumn': {
          alias: '成交量'
        },
        'start': {
          alias: '开盘价'
        },
        'end': {
          alias: '收盘价'
        },
        'max': {
          alias: '最高价'
        },
        'min': {
          alias: '最低价'
        },
        'start+end+max+min': {
          alias: '股票价格'
        }
      });
      chart.axis('time', {
        title: null
      });
      chart.schema()
        .position('time*(start+end+max+min)')
        .color('trend', ['#2AF483', '#F80041'])
        .shape('candle')
        .tooltip('start*end*max*min*volumn');
      var chart1 = new G2.Chart({
        id: 'c1',
        width: 800,
        height: 80,
        plotCfg: {
          margin: [10, 120, 10],
          background: {
            fill: '#191821'
          }
        }
      });
      chart1.source(frame);
      chart1.col('volumn', {
        alias: '成交量(万)',
        tickInterval: 4000
      });
      chart1.col('time', {
        type: 'timeCat',
        nice: false,
        mask: 'mm-dd',
        alias: '时间',
        tickCount: 10,
        range: [0, 1]
      });
      chart1.axis('time', false);
      chart1.axis('volumn', {
        formatter: function(val) {
          return parseInt(val / 1000, 10) + 'k';
        }
      });
      chart1.interval()
        .position('time*volumn')
        .color('trend', ['#2AF483', '#F80041'])
        // .tooltip('volumn');
      chart1.legend('trend', false);
      var slider = new Slider({
        domId: 'range',
        width: 1000,
        height: 30,
        charts: [chart, chart1],
        xDim: 'time',
        yDim: 'max'
      });
      slider.render();

      setTimeout(function() {
        var newData = [{"time":"2015-11-19","start":8.18,"max":8.33,"min":7.98,"end":8.32,"volumn":1810,"money":14723.56},{"time":"2015-11-18","start":8.37,"max":8.6,"min":8.03,"end":8.09,"volumn":2790.37,"money":23309.19},{"time":"2015-11-17","start":8.7,"max":8.78,"min":8.32,"end":8.37,"volumn":3729.04,"money":31709.71},{"time":"2015-11-16","start":8.18,"max":8.69,"min":8.05,"end":8.62,"volumn":3095.44,"money":26100.69},{"time":"2015-11-13","start":8.01,"max":8.75,"min":7.97,"end":8.41,"volumn":5815.58,"money":48562.37},{"time":"2015-11-12","start":7.76,"max":8.18,"min":7.61,"end":8.15,"volumn":4742.6,"money":37565.36},{"time":"2015-11-11","start":7.55,"max":7.81,"min":7.49,"end":7.8,"volumn":3133.82,"money":24065.42},{"time":"2015-11-10","start":7.5,"max":7.68,"min":7.44,"end":7.57,"volumn":2670.35,"money":20210.58},{"time":"2015-11-09","start":7.65,"max":7.66,"min":7.3,"end":7.58,"volumn":2841.79,"money":21344.36},{"time":"2015-11-06","start":7.52,"max":7.71,"min":7.48,"end":7.64,"volumn":2725.44,"money":20721.51},{"time":"2015-11-05","start":7.48,"max":7.57,"min":7.29,"end":7.48,"volumn":3520.85,"money":26140.83},{"time":"2015-11-04","start":7.01,"max":7.5,"min":7.01,"end":7.46,"volumn":3591.47,"money":26285.52},{"time":"2015-11-03","start":7.1,"max":7.17,"min":6.82,"end":7,"volumn":2029.21,"money":14202.33},{"time":"2015-11-02","start":7.09,"max":7.44,"min":6.93,"end":7.17,"volumn":3191.31,"money":23205.11},{"time":"2015-10-30","start":6.98,"max":7.27,"min":6.84,"end":7.18,"volumn":3522.61,"money":25083.44},{"time":"2015-10-29","start":6.94,"max":7.2,"min":6.8,"end":7.05,"volumn":2752.27,"money":19328.44},{"time":"2015-10-28","start":7.01,"max":7.14,"min":6.8,"end":6.85,"volumn":2311.11,"money":16137.32}];
        var Frame = G2.Frame;
        var frame = new Frame(newData);
        frame.addCol('trend', function(obj) {
          return (obj.start <= obj.end) ? 0 : 1;
        });

        chart.changeData(frame);
        chart1.changeData(frame);
        slider.repaint();
      }, 3000);
    });
  });

  it('views slider', function() {
    $.getJSON('./candleSticks.json', function(data) {
      var Stat = G2.Stat;
      var chart = new G2.Chart({
        id: 'c2',
        width: 800,
        height: 250
      });
      // 创建数据源
      var Frame = G2.Frame;
      var frame = new Frame(data);
      frame.addCol('trend', function(obj) {
        return (obj.start <= obj.end) ? 0 : 1;
      });
      var view1 = chart.createView({
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 1,
          y: 0.7
        }
      });
      view1.source(frame, {
        'trend': {
          type: 'cat',
          alias: '趋势',
          values: ['上涨', '下跌']
        },
        'time': {
          type: 'time',
          nice: false,
          mask: 'mm-dd',
          alias: '时间',
          tickCount: 10
        },
        'volumn': {
          alias: '成交量'
        },
        'start': {
          alias: '开盘价'
        },
        'end': {
          alias: '收盘价'
        },
        'max': {
          alias: '最高价'
        },
        'min': {
          alias: '最低价'
        },
        'start+end+max+min': {
          alias: '股票价格'
        }
      });
      view1.axis('time', {
        title: null
      });
      view1.schema()
        .position('time*(start+end+max+min)')
        .color('trend', ['#2AF483', '#F80041'])
        .shape('candle')
        .tooltip('start*end*max*min*volumn');
      var view2 = chart.createView({
        start: {
          x: 0,
          y: 0.85
        },
        end: {
          x: 1,
          y: 1
        }
      });

      view2.source(frame);
      view2.col('volumn', {
        alias: '成交量(万)',
        tickInterval: 4000
      });
      view2.col('time', {
        type: 'time',
        nice: false,
        mask: 'mm-dd',
        alias: '时间',
        tickCount: 10
      });
      view2.axis('time', false);
      view2.axis('volumn', {
        formatter: function(val) {
          return parseInt(val / 1000, 10) + 'k';
        }
      });
      view2.interval()
        .position('time*volumn')
        .color('trend', ['#2AF483', '#F80041'])
      chart.legend('trend', false);
      var slider = new Slider({
        domId: 'range2',
        width: 1000,
        height: 30,
        charts: [view1, view2],
        xDim: 'time'
      });
      slider.render();
    });
  });
});
