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
  forceFit: true,
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
var slider = new G2.Plugin.slider({
  domId: 'range',
  height: 30,
  charts: [view1, view2],
  xDim: 'time',
  yDim: 'volumn'
});
slider.render();
````
