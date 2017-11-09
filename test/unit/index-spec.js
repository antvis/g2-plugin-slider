const expect = require('chai').expect;
const G2 = require('@antv/g2');
const DataSet = require('@antv/data-set');
const Slider = require('../../index');
const PekingAQI = require('../fixtures/peking-aqi.json');
const kData = require('../fixtures/candleSticks.json');

const div = document.createElement('div');
div.id = 'c1';
document.body.appendChild(div);

const range = document.createElement('div');
range.id = 'range';
document.body.appendChild(range);

describe('Test cases', function() {
  it.only('changeData && autoWidth', function() {
    // 设置状态量
    const ds = new DataSet({
      state: {
        start: '2004-01-01',
        end: '2007-09-24'
      }
    });
    const dv = ds.createView();
    dv.source(PekingAQI)
      .transform({
        type: 'filter',
        callback: obj => {
          return obj.date <= ds.state.end && obj.date >= ds.state.start;
        }
      });
    const chart = new G2.Chart({
      id: 'c1',
      forceFit: true,
      height: 400,
      animate: false
    });

    chart.scale({
      date: {
        type: 'time',
        mask: 'YYYY-MM-DD',
        alias: '日期'
      }
    });

    const view1 = chart.view({
      start: {
        x: 0,
        y: 0
      },
      end: {
        x: 1,
        y: 0.45
      }
    });
    view1.source(dv);
    view1.line().position('date*aqi');

    const view2 = chart.view({
      start: {
        x: 0,
        y: 0.55
      },
      end: {
        x: 1,
        y: 1
      }
    });
    view2.source(dv);
    view2.interval().position('date*aqi');
    chart.render();

    const slider = new Slider({
      container: 'range', // DOM id
      width: 'auto',
      height: 26,
      start: '2004-01-01', // 和状态量对应
      end: '2007-09-24',
      data: PekingAQI, // 源数据
      xAxis: 'date', // 背景图的横轴对应字段，同时为数据筛选的字段
      yAxis: 'aqi', // 背景图的纵轴对应字段，同时为数据筛选的字段
      // backgroundChart: {
      //   type: 'area',
      //   color: 'rgba(0, 0, 0, 0.3)'
      // },
      // fillerStyle: {
      //   fill: 'rgba(0, 0, 0, 0.2)'
      // },
      // backgroundStyle: {
      //   stroke: '#f80',
      //   fill: '#F3F3F3',
      //   opacity: 0.2,
      //   lineWidth: 2
      // },
      onChange: (min, max) => {
        ds.setState('start', min);
        ds.setState('end', max);
      }
    });
    slider.render();

    expect(slider.bgChart).not.to.be.empty;


    setTimeout(function() {
      const newData = PekingAQI.slice(10, 90);
      ds.setState('start', '2000-06-29');
      ds.setState('end', '2000-08-20');
      dv.source(newData)
        .transform({
          type: 'filter',
          callback: obj => {
            return obj.date <= ds.state.end && obj.date >= ds.state.start;
          }
        });
      view1.changeData(dv);
      view2.changeData(dv);
      slider.start = '2000-06-29';
      slider.end = '2000-08-20';
      slider.changeData(newData);
      expect(slider.bgChart).not.to.be.empty;
      expect(slider.start).equal('2000-06-29');

    }, 2000);
  });
  it('basic', function() {
    // 设置状态量，时间格式建议转换为时间戳
    const ds = new DataSet({
      state: {
        start: new Date('2015-04-07').getTime(),
        end: new Date('2015-08-01').getTime()
      }
    });
    const dv = ds.createView();
    dv.source(kData)
      .transform({
        type: 'filter',
        callback: obj => {
          const date = new Date(obj.time).getTime();
          return date <= ds.state.end && date >= ds.state.start;
        }
      })
      .transform({
        type: 'map',
        callback: obj => {
          obj.trend = (obj.start <= obj.end) ? '上涨' : '下跌';
          obj.range = [ obj.start, obj.end, obj.max, obj.min ];
          return obj;
        }
      });
    const chart = new G2.Chart({
      container: 'c1',
      width: 600,
      height: 400,
      animate: false,
      padding: [ 20, 120, 100 ]
    });

    chart.source(dv, {
      trend: {
        alias: '趋势'
      },
      time: {
        type: 'timeCat',
        nice: false,
        mask: 'MM-DD',
        alias: '时间',
        tickCount: 10
      },
      volumn: { alias: '成交量' },
      start: { alias: '开盘价' },
      end: { alias: '收盘价' },
      max: { alias: '最高价' },
      min: { alias: '最低价' },
      range: { alias: '股票价格' }
    });
    chart.tooltip({
      showTitle: false,
      itemTpl: '<li data-index={index} style="margin-bottom:4px;">'
        + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
        + '{name}<br/>'
        + '<span style="padding-left: 16px">开盘价：{start}</span><br/>'
        + '<span style="padding-left: 16px">收盘价：{end}</span><br/>'
        + '<span style="padding-left: 16px">最高价：{max}</span><br/>'
        + '<span style="padding-left: 16px">最低价：{min}</span><br/>'
        + '<span style="padding-left: 16px">成交量：{volumn}</span><br/>'
        + '</li>'
    });
    chart.schema()
      .position('time*range')
      .color('trend', val => {
        if (val === '上涨') {
          return '#f04864';
        }

        if (val === '下跌') {
          return '#2fc25b';
        }
      })
      .shape('candle')
      .tooltip('time*start*end*max*min*volumn', (time, start, end, max, min, volumn) => {
        return {
          name: time,
          start,
          end,
          max,
          min,
          volumn
        };
      });
    chart.render();

    const slider = new Slider({
      container: 'range', // DOM id
      width: 600,
      height: 26,
      padding: [ 20, 120, 100 ],
      start: ds.state.start, // 和状态量对应
      end: ds.state.end,
      data: kData, // 源数据
      xAxis: 'time', // 背景图的横轴对应字段，同时为数据筛选的字段
      yAxis: 'volumn', // 背景图的纵轴对应字段，同时为数据筛选的字段
      onChange: (min, max) => {

        ds.setState('start', new Date(min).getTime());
        ds.setState('end', new Date(max).getTime());
      }
    });
    slider.render();
  });
});
