webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _candleSticks = __webpack_require__(2);
	
	var _candleSticks2 = _interopRequireDefault(_candleSticks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Stat = G2.Stat;
	var chart = new G2.Chart({
	  id: 'c1',
	  forceFit: true,
	  height: 250
	});
	// 创建数据源
	var Frame = G2.Frame;
	var frame = new Frame(_candleSticks2.default);
	frame.addCol('trend', function (obj) {
	  return obj.start <= obj.end ? 0 : 1;
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
	view1.schema().position('time*(start+end+max+min)').color('trend', ['#2AF483', '#F80041']).shape('candle').tooltip('start*end*max*min*volumn');
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
	  formatter: function formatter(val) {
	    return parseInt(val / 1000, 10) + 'k';
	  }
	});
	view2.interval().position('time*volumn').color('trend', ['#2AF483', '#F80041']);
	chart.legend('trend', false);
	var slider = new G2.Plugin.slider({
	  domId: 'range',
	  height: 30,
	  charts: [view1, view2],
	  xDim: 'time',
	  yDim: 'volumn'
	});
	slider.render();

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy92aWV3QW5kRm9yY2VGaXQubWQiXSwibmFtZXMiOlsiU3RhdCIsIkcyIiwiY2hhcnQiLCJDaGFydCIsImlkIiwiZm9yY2VGaXQiLCJoZWlnaHQiLCJGcmFtZSIsImZyYW1lIiwiYWRkQ29sIiwib2JqIiwic3RhcnQiLCJlbmQiLCJ2aWV3MSIsImNyZWF0ZVZpZXciLCJ4IiwieSIsInNvdXJjZSIsInR5cGUiLCJhbGlhcyIsInZhbHVlcyIsIm5pY2UiLCJtYXNrIiwidGlja0NvdW50IiwiYXhpcyIsInRpdGxlIiwic2NoZW1hIiwicG9zaXRpb24iLCJjb2xvciIsInNoYXBlIiwidG9vbHRpcCIsInZpZXcyIiwiY29sIiwidGlja0ludGVydmFsIiwiZm9ybWF0dGVyIiwidmFsIiwicGFyc2VJbnQiLCJpbnRlcnZhbCIsImxlZ2VuZCIsInNsaWRlciIsIlBsdWdpbiIsImRvbUlkIiwiY2hhcnRzIiwieERpbSIsInlEaW0iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQSxLQUFJQSxPQUFPQyxHQUFHRCxJQUFkO0FBQ0EsS0FBSUUsUUFBUSxJQUFJRCxHQUFHRSxLQUFQLENBQWE7QUFDdkJDLE9BQUksSUFEbUI7QUFFdkJDLGFBQVUsSUFGYTtBQUd2QkMsV0FBUTtBQUhlLEVBQWIsQ0FBWjtBQUtBO0FBQ0EsS0FBSUMsUUFBUU4sR0FBR00sS0FBZjtBQUNBLEtBQUlDLFFBQVEsSUFBSUQsS0FBSix3QkFBWjtBQUNBQyxPQUFNQyxNQUFOLENBQWEsT0FBYixFQUFzQixVQUFTQyxHQUFULEVBQWM7QUFDbEMsVUFBUUEsSUFBSUMsS0FBSixJQUFhRCxJQUFJRSxHQUFsQixHQUF5QixDQUF6QixHQUE2QixDQUFwQztBQUNELEVBRkQ7QUFHQSxLQUFJQyxRQUFRWCxNQUFNWSxVQUFOLENBQWlCO0FBQzNCSCxVQUFPO0FBQ0xJLFFBQUcsQ0FERTtBQUVMQyxRQUFHO0FBRkUsSUFEb0I7QUFLM0JKLFFBQUs7QUFDSEcsUUFBRyxDQURBO0FBRUhDLFFBQUc7QUFGQTtBQUxzQixFQUFqQixDQUFaO0FBVUFILE9BQU1JLE1BQU4sQ0FBYVQsS0FBYixFQUFvQjtBQUNsQixZQUFTO0FBQ1BVLFdBQU0sS0FEQztBQUVQQyxZQUFPLElBRkE7QUFHUEMsYUFBUSxDQUFDLElBQUQsRUFBTyxJQUFQO0FBSEQsSUFEUztBQU1sQixXQUFRO0FBQ05GLFdBQU0sTUFEQTtBQUVORyxXQUFNLEtBRkE7QUFHTkMsV0FBTSxPQUhBO0FBSU5ILFlBQU8sSUFKRDtBQUtOSSxnQkFBVztBQUxMLElBTlU7QUFhbEIsYUFBVTtBQUNSSixZQUFPO0FBREMsSUFiUTtBQWdCbEIsWUFBUztBQUNQQSxZQUFPO0FBREEsSUFoQlM7QUFtQmxCLFVBQU87QUFDTEEsWUFBTztBQURGLElBbkJXO0FBc0JsQixVQUFPO0FBQ0xBLFlBQU87QUFERixJQXRCVztBQXlCbEIsVUFBTztBQUNMQSxZQUFPO0FBREYsSUF6Qlc7QUE0QmxCLHdCQUFxQjtBQUNuQkEsWUFBTztBQURZO0FBNUJILEVBQXBCO0FBZ0NBTixPQUFNVyxJQUFOLENBQVcsTUFBWCxFQUFtQjtBQUNqQkMsVUFBTztBQURVLEVBQW5CO0FBR0FaLE9BQU1hLE1BQU4sR0FDR0MsUUFESCxDQUNZLDBCQURaLEVBRUdDLEtBRkgsQ0FFUyxPQUZULEVBRWtCLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FGbEIsRUFHR0MsS0FISCxDQUdTLFFBSFQsRUFJR0MsT0FKSCxDQUlXLDBCQUpYO0FBS0EsS0FBSUMsUUFBUTdCLE1BQU1ZLFVBQU4sQ0FBaUI7QUFDM0JILFVBQU87QUFDTEksUUFBRyxDQURFO0FBRUxDLFFBQUc7QUFGRSxJQURvQjtBQUszQkosUUFBSztBQUNIRyxRQUFHLENBREE7QUFFSEMsUUFBRztBQUZBO0FBTHNCLEVBQWpCLENBQVo7O0FBV0FlLE9BQU1kLE1BQU4sQ0FBYVQsS0FBYjtBQUNBdUIsT0FBTUMsR0FBTixDQUFVLFFBQVYsRUFBb0I7QUFDbEJiLFVBQU8sUUFEVztBQUVsQmMsaUJBQWM7QUFGSSxFQUFwQjtBQUlBRixPQUFNQyxHQUFOLENBQVUsTUFBVixFQUFrQjtBQUNoQmQsU0FBTSxNQURVO0FBRWhCRyxTQUFNLEtBRlU7QUFHaEJDLFNBQU0sT0FIVTtBQUloQkgsVUFBTyxJQUpTO0FBS2hCSSxjQUFXO0FBTEssRUFBbEI7QUFPQVEsT0FBTVAsSUFBTixDQUFXLE1BQVgsRUFBbUIsS0FBbkI7QUFDQU8sT0FBTVAsSUFBTixDQUFXLFFBQVgsRUFBcUI7QUFDbkJVLGNBQVcsbUJBQVNDLEdBQVQsRUFBYztBQUN2QixZQUFPQyxTQUFTRCxNQUFNLElBQWYsRUFBcUIsRUFBckIsSUFBMkIsR0FBbEM7QUFDRDtBQUhrQixFQUFyQjtBQUtBSixPQUFNTSxRQUFOLEdBQ0dWLFFBREgsQ0FDWSxhQURaLEVBRUdDLEtBRkgsQ0FFUyxPQUZULEVBRWtCLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FGbEI7QUFHQTFCLE9BQU1vQyxNQUFOLENBQWEsT0FBYixFQUFzQixLQUF0QjtBQUNBLEtBQUlDLFNBQVMsSUFBSXRDLEdBQUd1QyxNQUFILENBQVVELE1BQWQsQ0FBcUI7QUFDaENFLFVBQU8sT0FEeUI7QUFFaENuQyxXQUFRLEVBRndCO0FBR2hDb0MsV0FBUSxDQUFDN0IsS0FBRCxFQUFRa0IsS0FBUixDQUh3QjtBQUloQ1ksU0FBTSxNQUowQjtBQUtoQ0MsU0FBTTtBQUwwQixFQUFyQixDQUFiO0FBT0FMLFFBQU9NLE1BQVAsRyIsImZpbGUiOiJleGFtcGxlcy92aWV3QW5kRm9yY2VGaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2cyLXBsdWdpbi1zbGlkZXInO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9jYW5kbGVTdGlja3MuanNvbic7XG5cbnZhciBTdGF0ID0gRzIuU3RhdDtcbnZhciBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gIGlkOiAnYzEnLFxuICBmb3JjZUZpdDogdHJ1ZSxcbiAgaGVpZ2h0OiAyNTBcbn0pO1xuLy8g5Yib5bu65pWw5o2u5rqQXG52YXIgRnJhbWUgPSBHMi5GcmFtZTtcbnZhciBmcmFtZSA9IG5ldyBGcmFtZShkYXRhKTtcbmZyYW1lLmFkZENvbCgndHJlbmQnLCBmdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIChvYmouc3RhcnQgPD0gb2JqLmVuZCkgPyAwIDogMTtcbn0pO1xudmFyIHZpZXcxID0gY2hhcnQuY3JlYXRlVmlldyh7XG4gIHN0YXJ0OiB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH0sXG4gIGVuZDoge1xuICAgIHg6IDEsXG4gICAgeTogMC43XG4gIH1cbn0pO1xudmlldzEuc291cmNlKGZyYW1lLCB7XG4gICd0cmVuZCc6IHtcbiAgICB0eXBlOiAnY2F0JyxcbiAgICBhbGlhczogJ+i2i+WKvycsXG4gICAgdmFsdWVzOiBbJ+S4iua2qCcsICfkuIvot4wnXVxuICB9LFxuICAndGltZSc6IHtcbiAgICB0eXBlOiAndGltZScsXG4gICAgbmljZTogZmFsc2UsXG4gICAgbWFzazogJ21tLWRkJyxcbiAgICBhbGlhczogJ+aXtumXtCcsXG4gICAgdGlja0NvdW50OiAxMFxuICB9LFxuICAndm9sdW1uJzoge1xuICAgIGFsaWFzOiAn5oiQ5Lqk6YePJ1xuICB9LFxuICAnc3RhcnQnOiB7XG4gICAgYWxpYXM6ICflvIDnm5jku7cnXG4gIH0sXG4gICdlbmQnOiB7XG4gICAgYWxpYXM6ICfmlLbnm5jku7cnXG4gIH0sXG4gICdtYXgnOiB7XG4gICAgYWxpYXM6ICfmnIDpq5jku7cnXG4gIH0sXG4gICdtaW4nOiB7XG4gICAgYWxpYXM6ICfmnIDkvY7ku7cnXG4gIH0sXG4gICdzdGFydCtlbmQrbWF4K21pbic6IHtcbiAgICBhbGlhczogJ+iCoeelqOS7t+agvCdcbiAgfVxufSk7XG52aWV3MS5heGlzKCd0aW1lJywge1xuICB0aXRsZTogbnVsbFxufSk7XG52aWV3MS5zY2hlbWEoKVxuICAucG9zaXRpb24oJ3RpbWUqKHN0YXJ0K2VuZCttYXgrbWluKScpXG4gIC5jb2xvcigndHJlbmQnLCBbJyMyQUY0ODMnLCAnI0Y4MDA0MSddKVxuICAuc2hhcGUoJ2NhbmRsZScpXG4gIC50b29sdGlwKCdzdGFydCplbmQqbWF4Km1pbip2b2x1bW4nKTtcbnZhciB2aWV3MiA9IGNoYXJ0LmNyZWF0ZVZpZXcoe1xuICBzdGFydDoge1xuICAgIHg6IDAsXG4gICAgeTogMC44NVxuICB9LFxuICBlbmQ6IHtcbiAgICB4OiAxLFxuICAgIHk6IDFcbiAgfVxufSk7XG5cbnZpZXcyLnNvdXJjZShmcmFtZSk7XG52aWV3Mi5jb2woJ3ZvbHVtbicsIHtcbiAgYWxpYXM6ICfmiJDkuqTph48o5LiHKScsXG4gIHRpY2tJbnRlcnZhbDogNDAwMFxufSk7XG52aWV3Mi5jb2woJ3RpbWUnLCB7XG4gIHR5cGU6ICd0aW1lJyxcbiAgbmljZTogZmFsc2UsXG4gIG1hc2s6ICdtbS1kZCcsXG4gIGFsaWFzOiAn5pe26Ze0JyxcbiAgdGlja0NvdW50OiAxMFxufSk7XG52aWV3Mi5heGlzKCd0aW1lJywgZmFsc2UpO1xudmlldzIuYXhpcygndm9sdW1uJywge1xuICBmb3JtYXR0ZXI6IGZ1bmN0aW9uKHZhbCkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWwgLyAxMDAwLCAxMCkgKyAnayc7XG4gIH1cbn0pO1xudmlldzIuaW50ZXJ2YWwoKVxuICAucG9zaXRpb24oJ3RpbWUqdm9sdW1uJylcbiAgLmNvbG9yKCd0cmVuZCcsIFsnIzJBRjQ4MycsICcjRjgwMDQxJ10pXG5jaGFydC5sZWdlbmQoJ3RyZW5kJywgZmFsc2UpO1xudmFyIHNsaWRlciA9IG5ldyBHMi5QbHVnaW4uc2xpZGVyKHtcbiAgZG9tSWQ6ICdyYW5nZScsXG4gIGhlaWdodDogMzAsXG4gIGNoYXJ0czogW3ZpZXcxLCB2aWV3Ml0sXG4gIHhEaW06ICd0aW1lJyxcbiAgeURpbTogJ3ZvbHVtbidcbn0pO1xuc2xpZGVyLnJlbmRlcigpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvdmlld0FuZEZvcmNlRml0Lm1kXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==