webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(2);
	__webpack_require__(1);
	$.getJSON('./candleSticks.json', function (data) {
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
	  frame.addCol('trend', function (obj) {
	    return obj.start <= obj.end ? 0 : 1;
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
	  chart.schema().position('time*(start+end+max+min)').color('trend', ['#2AF483', '#F80041']).shape('candle').tooltip('start*end*max*min*volumn');
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
	    formatter: function formatter(val) {
	      return parseInt(val / 1000, 10) + 'k';
	    }
	  });
	  chart1.interval().position('time*volumn').color('trend', ['#2AF483', '#F80041']);
	  // .tooltip('volumn');
	  chart1.legend('trend', false);
	  var slider = new G2.Plugin.slider({
	    domId: 'range',
	    height: 30,
	    charts: [chart, chart1],
	    xDim: 'time',
	    yDim: 'max'
	  });
	  slider.render();
	});

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9pbmRleC5tZCJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsImdldEpTT04iLCJkYXRhIiwiU3RhdCIsIkcyIiwiY2hhcnQiLCJDaGFydCIsImlkIiwid2lkdGgiLCJoZWlnaHQiLCJwbG90Q2ZnIiwibWFyZ2luIiwiYmFja2dyb3VuZCIsImZpbGwiLCJGcmFtZSIsImZyYW1lIiwiYWRkQ29sIiwib2JqIiwic3RhcnQiLCJlbmQiLCJzb3VyY2UiLCJ0eXBlIiwiYWxpYXMiLCJ2YWx1ZXMiLCJuaWNlIiwibWFzayIsInRpY2tDb3VudCIsInJhbmdlIiwiYXhpcyIsInRpdGxlIiwic2NoZW1hIiwicG9zaXRpb24iLCJjb2xvciIsInNoYXBlIiwidG9vbHRpcCIsImNoYXJ0MSIsImNvbCIsInRpY2tJbnRlcnZhbCIsImZvcm1hdHRlciIsInZhbCIsInBhcnNlSW50IiwiaW50ZXJ2YWwiLCJsZWdlbmQiLCJzbGlkZXIiLCJQbHVnaW4iLCJkb21JZCIsImNoYXJ0cyIsInhEaW0iLCJ5RGltIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxLQUFJQSxJQUFJLG1CQUFBQyxDQUFRLENBQVIsQ0FBUjtBQUNBLG9CQUFBQSxDQUFRLENBQVI7QUFDQUQsR0FBRUUsT0FBRixDQUFVLHFCQUFWLEVBQWlDLFVBQVNDLElBQVQsRUFBZTtBQUM1QyxPQUFJQyxPQUFPQyxHQUFHRCxJQUFkO0FBQ0EsT0FBSUUsUUFBUSxJQUFJRCxHQUFHRSxLQUFQLENBQWE7QUFDdkJDLFNBQUksSUFEbUI7QUFFdkJDLFlBQU8sR0FGZ0I7QUFHdkJDLGFBQVEsR0FIZTtBQUl2QkMsY0FBUztBQUNQQyxlQUFRLENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxFQUFWLENBREQ7QUFFUEMsbUJBQVk7QUFDVkMsZUFBTTtBQURJO0FBRkw7QUFKYyxJQUFiLENBQVo7QUFXQTtBQUNBLE9BQUlDLFFBQVFWLEdBQUdVLEtBQWY7QUFDQSxPQUFJQyxRQUFR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eGFtcGxlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5yZXF1aXJlKCdnMi1wbHVnaW4tc2xpZGVyJyk7XG4kLmdldEpTT04oJy4vY2FuZGxlU3RpY2tzLmpzb24nLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIFN0YXQgPSBHMi5TdGF0O1xuICAgIHZhciBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBpZDogJ2MxJyxcbiAgICAgIHdpZHRoOiA4MDAsXG4gICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgIHBsb3RDZmc6IHtcbiAgICAgICAgbWFyZ2luOiBbMzAsIDEyMCwgMzBdLFxuICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgZmlsbDogJyMxOTE4MjEnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyDliJvlu7rmlbDmja7mupBcbiAgICB2YXIgRnJhbWUgPSBHMi5GcmFtZTtcbiAgICB2YXIgZnJhbWUgPSBuZXcgRnJhbWUoZGF0YSk7XG4gICAgZnJhbWUuYWRkQ29sKCd0cmVuZCcsIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIChvYmouc3RhcnQgPD0gb2JqLmVuZCkgPyAwIDogMTtcbiAgICB9KTtcbiAgICBjaGFydC5zb3VyY2UoZnJhbWUsIHtcbiAgICAgICd0cmVuZCc6IHtcbiAgICAgICAgdHlwZTogJ2NhdCcsXG4gICAgICAgIGFsaWFzOiAn6LaL5Yq/JyxcbiAgICAgICAgdmFsdWVzOiBbJ+S4iua2qCcsICfkuIvot4wnXVxuICAgICAgfSxcbiAgICAgICd0aW1lJzoge1xuICAgICAgICB0eXBlOiAndGltZUNhdCcsXG4gICAgICAgIG5pY2U6IGZhbHNlLFxuICAgICAgICBtYXNrOiAnbW0tZGQnLFxuICAgICAgICBhbGlhczogJ+aXtumXtCcsXG4gICAgICAgIHRpY2tDb3VudDogMTAsXG4gICAgICAgIHJhbmdlOiBbMCwgMV1cbiAgICAgIH0sXG4gICAgICAndm9sdW1uJzoge1xuICAgICAgICBhbGlhczogJ+aIkOS6pOmHjydcbiAgICAgIH0sXG4gICAgICAnc3RhcnQnOiB7XG4gICAgICAgIGFsaWFzOiAn5byA55uY5Lu3J1xuICAgICAgfSxcbiAgICAgICdlbmQnOiB7XG4gICAgICAgIGFsaWFzOiAn5pS255uY5Lu3J1xuICAgICAgfSxcbiAgICAgICdtYXgnOiB7XG4gICAgICAgIGFsaWFzOiAn5pyA6auY5Lu3J1xuICAgICAgfSxcbiAgICAgICdtaW4nOiB7XG4gICAgICAgIGFsaWFzOiAn5pyA5L2O5Lu3J1xuICAgICAgfSxcbiAgICAgICdzdGFydCtlbmQrbWF4K21pbic6IHtcbiAgICAgICAgYWxpYXM6ICfogqHnpajku7fmoLwnXG4gICAgICB9XG4gICAgfSk7XG4gICAgY2hhcnQuYXhpcygndGltZScsIHtcbiAgICAgIHRpdGxlOiBudWxsXG4gICAgfSk7XG4gICAgY2hhcnQuc2NoZW1hKClcbiAgICAgIC5wb3NpdGlvbigndGltZSooc3RhcnQrZW5kK21heCttaW4pJylcbiAgICAgIC5jb2xvcigndHJlbmQnLCBbJyMyQUY0ODMnLCAnI0Y4MDA0MSddKVxuICAgICAgLnNoYXBlKCdjYW5kbGUnKVxuICAgICAgLnRvb2x0aXAoJ3N0YXJ0KmVuZCptYXgqbWluKnZvbHVtbicpO1xuICAgIHZhciBjaGFydDEgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgaWQ6ICdjMScsXG4gICAgICB3aWR0aDogODAwLFxuICAgICAgaGVpZ2h0OiA4MCxcbiAgICAgIHBsb3RDZmc6IHtcbiAgICAgICAgbWFyZ2luOiBbMTAsIDEyMCwgMTBdLFxuICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgZmlsbDogJyMxOTE4MjEnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBjaGFydDEuc291cmNlKGZyYW1lKTtcbiAgICBjaGFydDEuY29sKCd2b2x1bW4nLCB7XG4gICAgICBhbGlhczogJ+aIkOS6pOmHjyjkuIcpJyxcbiAgICAgIHRpY2tJbnRlcnZhbDogNDAwMFxuICAgIH0pO1xuICAgIGNoYXJ0MS5jb2woJ3RpbWUnLCB7XG4gICAgICB0eXBlOiAndGltZUNhdCcsXG4gICAgICBuaWNlOiBmYWxzZSxcbiAgICAgIG1hc2s6ICdtbS1kZCcsXG4gICAgICBhbGlhczogJ+aXtumXtCcsXG4gICAgICB0aWNrQ291bnQ6IDEwLFxuICAgICAgcmFuZ2U6IFswLCAxXVxuICAgIH0pO1xuICAgIGNoYXJ0MS5heGlzKCd0aW1lJywgZmFsc2UpO1xuICAgIGNoYXJ0MS5heGlzKCd2b2x1bW4nLCB7XG4gICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsIC8gMTAwMCwgMTApICsgJ2snO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNoYXJ0MS5pbnRlcnZhbCgpXG4gICAgICAucG9zaXRpb24oJ3RpbWUqdm9sdW1uJylcbiAgICAgIC5jb2xvcigndHJlbmQnLCBbJyMyQUY0ODMnLCAnI0Y4MDA0MSddKVxuICAgICAgLy8gLnRvb2x0aXAoJ3ZvbHVtbicpO1xuICAgIGNoYXJ0MS5sZWdlbmQoJ3RyZW5kJywgZmFsc2UpO1xuICAgIHZhciBzbGlkZXIgPSBuZXcgRzIuUGx1Z2luLnNsaWRlcih7XG4gICAgICBkb21JZDogJ3JhbmdlJyxcbiAgICAgIGhlaWdodDogMzAsXG4gICAgICBjaGFydHM6IFtjaGFydCwgY2hhcnQxXSxcbiAgICAgIHhEaW06ICd0aW1lJyxcbiAgICAgIHlEaW06ICdtYXgnXG4gICAgfSk7XG4gICAgc2xpZGVyLnJlbmRlcigpO1xufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9pbmRleC5tZFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=