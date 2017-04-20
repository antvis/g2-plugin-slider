# Slider

---

## code

````html
<!-- 载入 G2 脚本 -->
<script src="https://a.alipayobjects.com/g/datavis/g2/2.3.0/g2.js"></script>
<div id="c1"></div>
<div id="range"></div>
````

````js
import 'g2-plugin-slider';
import data from './candleSticks.json';

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

chart1.legend('trend', false);
var slider = new G2.Plugin.slider({
  domId: 'range',
  height: 30,
  charts: [chart, chart1],
  xDim: 'time',
  yDim: 'max'
});
slider.render();
````
