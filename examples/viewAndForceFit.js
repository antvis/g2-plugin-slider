webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(2);
	__webpack_require__(1);
	$.getJSON('./candleSticks.json', function (data) {
	  var Stat = G2.Stat;
	  var chart = new G2.Chart({
	    id: 'c1',
	    forceFit: true,
	    height: 250
	  });
	  // 创建数据源
	  var Frame = G2.Frame;
	  var frame = new Frame(data);
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
	});

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy92aWV3QW5kRm9yY2VGaXQubWQiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJnZXRKU09OIiwiZGF0YSIsIlN0YXQiLCJHMiIsImNoYXJ0IiwiQ2hhcnQiLCJpZCIsImZvcmNlRml0IiwiaGVpZ2h0IiwiRnJhbWUiLCJmcmFtZSIsImFkZENvbCIsIm9iaiIsInN0YXJ0IiwiZW5kIiwidmlldzEiLCJjcmVhdGVWaWV3IiwieCIsInkiLCJzb3VyY2UiLCJ0eXBlIiwiYWxpYXMiLCJ2YWx1ZXMiLCJuaWNlIiwibWFzayIsInRpY2tDb3VudCIsImF4aXMiLCJ0aXRsZSIsInNjaGVtYSIsInBvc2l0aW9uIiwiY29sb3IiLCJzaGFwZSIsInRvb2x0aXAiLCJ2aWV3MiIsImNvbCIsInRpY2tJbnRlcnZhbCIsImZvcm1hdHRlciIsInZhbCIsInBhcnNlSW50IiwiaW50ZXJ2YWwiLCJsZWdlbmQiLCJzbGlkZXIiLCJQbHVnaW4iLCJkb21JZCIsImNoYXJ0cyIsInhEaW0iLCJ5RGltIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBRSxLQUFJQSxJQUFJLG1CQUFBQyxDQUFRLENBQVIsQ0FBUjtBQUNBLG9CQUFBQSxDQUFRLENBQVI7QUFDQUQsR0FBRUUsT0FBRixDQUFVLHFCQUFWLEVBQWlDLFVBQVNDLElBQVQsRUFBZTtBQUM5QyxPQUFJQyxPQUFPQyxHQUFHRCxJQUFkO0FBQ0EsT0FBSUUsUUFBUSxJQUFJRCxHQUFHRSxLQUFQLENBQWE7QUFDdkJDLFNBQUksSUFEbUI7QUFFdkJDLGVBQVUsSUFGYTtBQUd2QkMsYUFBUTtBQUhlLElBQWIsQ0FBWjtBQUtBO0FBQ0EsT0FBSUMsUUFBUU4sR0FBR00sS0FBZjtBQUNBLE9BQUlDLFFBQVEsSUFBSUQsS0FBSixDQUFVUixJQUFWLENBQVo7QUFDQVMsU0FBTUMsTUFBTixDQUFhLE9BQWIsRUFBc0IsVUFBU0MsR0FBVCxFQUFjO0FBQ2xDLFlBQVFBLElBQUlDLEtBQUosSUFBYUQsSUFBSUUsR0FBbEIsR0FBeUIsQ0FBekIsR0FBNkIsQ0FBcEM7QUFDRCxJQUZEO0FBR0EsT0FBSUMsUUFBUVgsTUFBTVksVUFBTixDQUFpQjtBQUMzQkgsWUFBTztBQUNMSSxVQUFHLENBREU7QUFFTEMsVUFBRztBQUZFLE1BRG9CO0FBSzNCSixVQUFLO0FBQ0hHLFVBQUcsQ0FEQTtBQUVIQyxVQUFHO0FBRkE7QUFMc0IsSUFBakIsQ0FBWjtBQVVBSCxTQUFNSSxNQUFOLENBQWFULEtBQWIsRUFBb0I7QUFDbEIsY0FBUztBQUNQVSxhQUFNLEtBREM7QUFFUEMsY0FBTyxJQUZBO0FBR1BDLGVBQVEsQ0FBQyxJQUFELEVBQU8sSUFBUDtBQUhELE1BRFM7QUFNbEIsYUFBUTtBQUNORixhQUFNLE1BREE7QUFFTkcsYUFBTSxLQUZBO0FBR05DLGFBQU0sT0FIQTtBQUlOSCxjQUFPLElBSkQ7QUFLTkksa0JBQVc7QUFMTCxNQU5VO0FBYWxCLGVBQVU7QUFDUkosY0FBTztBQURDLE1BYlE7QUFnQmxCLGNBQVM7QUFDUEEsY0FBTztBQURBLE1BaEJTO0FBbUJsQixZQUFPO0FBQ0xBLGNBQU87QUFERixNQW5CVztBQXNCbEIsWUFBTztBQUNMQSxjQUFPO0FBREYsTUF0Qlc7QUF5QmxCLFlBQU87QUFDTEEsY0FBTztBQURGLE1BekJXO0FBNEJsQiwwQkFBcUI7QUFDbkJBLGNBQU87QUFEWTtBQTVCSCxJQUFwQjtBQWdDQU4sU0FBTVcsSUFBTixDQUFXLE1BQVgsRUFBbUI7QUFDakJDLFlBQU87QUFEVSxJQUFuQjtBQUdBWixTQUFNYSxNQUFOLEdBQ0dDLFFBREgsQ0FDWSwwQkFEWixFQUVHQyxLQUZILENBRVMsT0FGVCxFQUVrQixDQUFDLFNBQUQsRUFBWSxTQUFaLENBRmxCLEVBR0dDLEtBSEgsQ0FHUyxRQUhULEVBSUdDLE9BSkgsQ0FJVywwQkFKWDtBQUtBLE9BQUlDLFFBQVE3QixNQUFNWSxVQUFOLENBQWlCO0FBQzNCSCxZQUFPO0FBQ0xJLFVBQUcsQ0FERTtBQUVMQyxVQUFHO0FBRkUsTUFEb0I7QUFLM0JKLFVBQUs7QUFDSEcsVUFBRyxDQURBO0FBRUhDLFVBQUc7QUFGQTtBQUxzQixJQUFqQixDQUFaOztBQVdBZSxTQUFNZCxNQUFOLENBQWFULEtBQWI7QUFDQXVCLFNBQU1DLEdBQU4sQ0FBVSxRQUFWLEVBQW9CO0FBQ2xCYixZQUFPLFFBRFc7QUFFbEJjLG1CQUFjO0FBRkksSUFBcEI7QUFJQUYsU0FBTUMsR0FBTixDQUFVLE1BQVYsRUFBa0I7QUFDaEJkLFdBQU0sTUFEVTtBQUVoQkcsV0FBTSxLQUZVO0FBR2hCQyxXQUFNLE9BSFU7QUFJaEJILFlBQU8sSUFKUztBQUtoQkksZ0JBQVc7QUFMSyxJQUFsQjtBQU9BUSxTQUFNUCxJQUFOLENBQVcsTUFBWCxFQUFtQixLQUFuQjtBQUNBTyxTQUFNUCxJQUFOLENBQVcsUUFBWCxFQUFxQjtBQUNuQlUsZ0JBQVcsbUJBQVNDLEdBQVQsRUFBYztBQUN2QixjQUFPQyxTQUFTRCxNQUFNLElBQWYsRUFBcUIsRUFBckIsSUFBMkIsR0FBbEM7QUFDRDtBQUhrQixJQUFyQjtBQUtBSixTQUFNTSxRQUFOLEdBQ0dWLFFBREgsQ0FDWSxhQURaLEVBRUdDLEtBRkgsQ0FFUyxPQUZULEVBRWtCLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FGbEI7QUFHQTFCLFNBQU1vQyxNQUFOLENBQWEsT0FBYixFQUFzQixLQUF0QjtBQUNBLE9BQUlDLFNBQVMsSUFBSXRDLEdBQUd1QyxNQUFILENBQVVELE1BQWQsQ0FBcUI7QUFDaENFLFlBQU8sT0FEeUI7QUFFaENuQyxhQUFRLEVBRndCO0FBR2hDb0MsYUFBUSxDQUFDN0IsS0FBRCxFQUFRa0IsS0FBUixDQUh3QjtBQUloQ1ksV0FBTSxNQUowQjtBQUtoQ0MsV0FBTTtBQUwwQixJQUFyQixDQUFiO0FBT0FMLFVBQU9NLE1BQVA7QUFDRCxFQXhHRCxFIiwiZmlsZSI6ImV4YW1wbGVzL3ZpZXdBbmRGb3JjZUZpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAgdmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbiAgcmVxdWlyZSgnZzItcGx1Z2luLXNsaWRlcicpO1xuICAkLmdldEpTT04oJy4vY2FuZGxlU3RpY2tzLmpzb24nLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIFN0YXQgPSBHMi5TdGF0O1xuICAgIHZhciBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBpZDogJ2MxJyxcbiAgICAgIGZvcmNlRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0OiAyNTBcbiAgICB9KTtcbiAgICAvLyDliJvlu7rmlbDmja7mupBcbiAgICB2YXIgRnJhbWUgPSBHMi5GcmFtZTtcbiAgICB2YXIgZnJhbWUgPSBuZXcgRnJhbWUoZGF0YSk7XG4gICAgZnJhbWUuYWRkQ29sKCd0cmVuZCcsIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIChvYmouc3RhcnQgPD0gb2JqLmVuZCkgPyAwIDogMTtcbiAgICB9KTtcbiAgICB2YXIgdmlldzEgPSBjaGFydC5jcmVhdGVWaWV3KHtcbiAgICAgIHN0YXJ0OiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICAgIH0sXG4gICAgICBlbmQ6IHtcbiAgICAgICAgeDogMSxcbiAgICAgICAgeTogMC43XG4gICAgICB9XG4gICAgfSk7XG4gICAgdmlldzEuc291cmNlKGZyYW1lLCB7XG4gICAgICAndHJlbmQnOiB7XG4gICAgICAgIHR5cGU6ICdjYXQnLFxuICAgICAgICBhbGlhczogJ+i2i+WKvycsXG4gICAgICAgIHZhbHVlczogWyfkuIrmtqgnLCAn5LiL6LeMJ11cbiAgICAgIH0sXG4gICAgICAndGltZSc6IHtcbiAgICAgICAgdHlwZTogJ3RpbWUnLFxuICAgICAgICBuaWNlOiBmYWxzZSxcbiAgICAgICAgbWFzazogJ21tLWRkJyxcbiAgICAgICAgYWxpYXM6ICfml7bpl7QnLFxuICAgICAgICB0aWNrQ291bnQ6IDEwXG4gICAgICB9LFxuICAgICAgJ3ZvbHVtbic6IHtcbiAgICAgICAgYWxpYXM6ICfmiJDkuqTph48nXG4gICAgICB9LFxuICAgICAgJ3N0YXJ0Jzoge1xuICAgICAgICBhbGlhczogJ+W8gOebmOS7tydcbiAgICAgIH0sXG4gICAgICAnZW5kJzoge1xuICAgICAgICBhbGlhczogJ+aUtuebmOS7tydcbiAgICAgIH0sXG4gICAgICAnbWF4Jzoge1xuICAgICAgICBhbGlhczogJ+acgOmrmOS7tydcbiAgICAgIH0sXG4gICAgICAnbWluJzoge1xuICAgICAgICBhbGlhczogJ+acgOS9juS7tydcbiAgICAgIH0sXG4gICAgICAnc3RhcnQrZW5kK21heCttaW4nOiB7XG4gICAgICAgIGFsaWFzOiAn6IKh56Wo5Lu35qC8J1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZpZXcxLmF4aXMoJ3RpbWUnLCB7XG4gICAgICB0aXRsZTogbnVsbFxuICAgIH0pO1xuICAgIHZpZXcxLnNjaGVtYSgpXG4gICAgICAucG9zaXRpb24oJ3RpbWUqKHN0YXJ0K2VuZCttYXgrbWluKScpXG4gICAgICAuY29sb3IoJ3RyZW5kJywgWycjMkFGNDgzJywgJyNGODAwNDEnXSlcbiAgICAgIC5zaGFwZSgnY2FuZGxlJylcbiAgICAgIC50b29sdGlwKCdzdGFydCplbmQqbWF4Km1pbip2b2x1bW4nKTtcbiAgICB2YXIgdmlldzIgPSBjaGFydC5jcmVhdGVWaWV3KHtcbiAgICAgIHN0YXJ0OiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAuODVcbiAgICAgIH0sXG4gICAgICBlbmQ6IHtcbiAgICAgICAgeDogMSxcbiAgICAgICAgeTogMVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmlldzIuc291cmNlKGZyYW1lKTtcbiAgICB2aWV3Mi5jb2woJ3ZvbHVtbicsIHtcbiAgICAgIGFsaWFzOiAn5oiQ5Lqk6YePKOS4hyknLFxuICAgICAgdGlja0ludGVydmFsOiA0MDAwXG4gICAgfSk7XG4gICAgdmlldzIuY29sKCd0aW1lJywge1xuICAgICAgdHlwZTogJ3RpbWUnLFxuICAgICAgbmljZTogZmFsc2UsXG4gICAgICBtYXNrOiAnbW0tZGQnLFxuICAgICAgYWxpYXM6ICfml7bpl7QnLFxuICAgICAgdGlja0NvdW50OiAxMFxuICAgIH0pO1xuICAgIHZpZXcyLmF4aXMoJ3RpbWUnLCBmYWxzZSk7XG4gICAgdmlldzIuYXhpcygndm9sdW1uJywge1xuICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbCAvIDEwMDAsIDEwKSArICdrJztcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2aWV3Mi5pbnRlcnZhbCgpXG4gICAgICAucG9zaXRpb24oJ3RpbWUqdm9sdW1uJylcbiAgICAgIC5jb2xvcigndHJlbmQnLCBbJyMyQUY0ODMnLCAnI0Y4MDA0MSddKVxuICAgIGNoYXJ0LmxlZ2VuZCgndHJlbmQnLCBmYWxzZSk7XG4gICAgdmFyIHNsaWRlciA9IG5ldyBHMi5QbHVnaW4uc2xpZGVyKHtcbiAgICAgIGRvbUlkOiAncmFuZ2UnLFxuICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgIGNoYXJ0czogW3ZpZXcxLCB2aWV3Ml0sXG4gICAgICB4RGltOiAndGltZScsXG4gICAgICB5RGltOiAndm9sdW1uJ1xuICAgIH0pO1xuICAgIHNsaWRlci5yZW5kZXIoKTtcbiAgfSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy92aWV3QW5kRm9yY2VGaXQubWRcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9