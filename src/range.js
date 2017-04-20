/**
 * @fileOverview
 * @ignore
 */

'use strict';

var G2 = require('g2');
var Util = G2.Util;
var Canvas = G2.Canvas;
var Group = Canvas.Group;

var Range = function(cfg) {
  Range.superclass.constructor.call(this, cfg);
};

Range.CFG = {
  /**
   * 范围
   * @type {Array}
   */
  range: null,
  /**
   * 中滑块属性
   * @type {ATTRS}
   */
  middleAttr: null,
  /**
   * 背景
   * @type {G-Element}
   */
  backgroundElement: null,
  /**
   * 下滑块
   * @type {G-Element}
   */
  minHandleElement: null,
  /**
   * 上滑块
   * @type {G-Element}
   */
  maxHandleElement: null,
  /**
   * 中块
   * @type {G-Element}
   */
  middleHandleElement: null,
  /**
   * 当前的激活的元素
   * @type {G-Element}
   */
  currentTarget: null,
  /**
   * 布局方式： horizontal，vertical
   * @type {String}
   */
  layout: 'vertical',
  /**
   * 宽
   * @type {Number}
   */
  width: null,
  /**
   * 高
   * @type {Number}
   */
  height: null,
  /**
   * 当前的PageX
   * @type {Number}
   */
  pageX: null,
  /**
   * 当前的PageY
   * @type {Number}
   */
  pageY: null,
  /**
   * 是否参与动画
   * @type {Boolean}
   */
  animate: false,
  /**
   * 可操作性，false 则不滑动
   * @type {Boolean}
   */
  operable: true
};

Util.extend(Range, Group);

Util.augment(Range, {
  _beforeRenderUI: function() {
    var layout = this.get('layout');
    var backgroundElement = this.get('backgroundElement');
    var minHandleElement = this.get('minHandleElement');
    var maxHandleElement = this.get('maxHandleElement');
    var middleHandleElement = this.addShape('rect', {
      attrs: this.get('middleAttr')
    });
    var trigerCursor = layout === 'vertical' ? 'ns-resize' : 'ew-resize';
    this.add([backgroundElement, minHandleElement, maxHandleElement]);
    this.set('middleHandleElement', middleHandleElement);
    backgroundElement.set('zIndex', 0);
    middleHandleElement.set('zIndex', 1);
    minHandleElement.set('zIndex', 2);
    maxHandleElement.set('zIndex', 2);
    if (this.get('operable')) {
      middleHandleElement.set('cursor', 'move');
      Util.each(minHandleElement.get('children'), function(child) {
        child.set('cursor', trigerCursor);
      });
      Util.each(maxHandleElement.get('children'), function(child) {
        child.set('cursor', trigerCursor);
      });
      // minHandleElement.set('cursor', trigerCursor);
      // maxHandleElement.set('cursor', trigerCursor);
    }
    this.sort();
  },
  _renderUI: function() {
    var layout = this.get('layout');
    if (layout === 'horizontal') {
      this._renderHorizontal();
    } else {
      this._renderVertical();
    }
  },
  _transform: function(layout) {
    var range = this.get('range');
    var minRatio = range[0] / 100;
    var maxRatio = range[1] / 100;
    var width = this.get('width');
    var height = this.get('height');
    var minHandleElement = this.get('minHandleElement');
    var maxHandleElement = this.get('maxHandleElement');
    var middleHandleElement = this.get('middleHandleElement');

    minHandleElement.initTransform();
    maxHandleElement.initTransform();

    if (layout === 'horizontal') {
      middleHandleElement.attr({
        x: width * minRatio,
        y: 0,
        width: (maxRatio - minRatio) * width,
        height: height
      });
      minHandleElement.translate(minRatio * width, 0);
      maxHandleElement.translate(maxRatio * width, 0);
    } else {
      middleHandleElement.attr({
        x: 0,
        y: height * (1 - maxRatio),
        width: width,
        height: (maxRatio - minRatio) * height
      });
      minHandleElement.translate(width / 2, (1 - minRatio) * height);
      maxHandleElement.translate(width / 2, (1 - maxRatio) * height);
    }
  },
  _renderHorizontal: function() {
    this._transform('horizontal');
  },
  _renderVertical: function() {
    this._transform('vertical');
  },
  _bindUI: function() {
    if (this.get('operable')) {
      this.on('mousedown', Util.wrapBehavior(this, '_onMouseDown'));
      this.on('mousemove', Util.wrapBehavior(this, '_onMouseMove'));
      this.on('mouseleave', Util.wrapBehavior(this, '_onMouseLeave'));
    }
  },
  // 判断是否是该元素
  _isElement: function(target, name) {
    var element = this.get(name);
    if (target === element) {
      return true;
    }
    if (element.isGroup) {
      var elementChildren = element.get('children');
      return elementChildren.indexOf(target) > -1;
    }
    return false;
  },
  _getRange: function(diff, range) {
    var rst = diff + range;
    rst = rst > 100 ? 100 : rst;
    rst = rst < 0 ? 0 : rst;
    return rst;
  },
  /**
   * 更新状态
   * @param {String} dim x || y
   * @param {Object} ev DOM 原生事件
   */
  _updateStatus: function(dim, ev) {
    var totalLength = dim === 'x' ? this.get('width') : this.get('height');
    var ucDim = Util.ucfirst(dim);
    var range = this.get('range');
    var page = this.get('page' + ucDim);
    var currentTarget = this.get('currentTarget');
    var rangeStash = this.get('rangeStash');
    var layout = this.get('layout');
    var sign = layout === 'vertical' ? -1 : 1;
    var currentPage = ev['page' + ucDim];
    var diffPage = currentPage - page;
    var diffRange = (diffPage / totalLength) * 100 * sign;
    var diffStashRange;

    if (range[1] <= range[0]) {
      if (this._isElement(currentTarget, 'minHandleElement') || this._isElement(currentTarget, 'maxHandleElement')) {
        range[0] = this._getRange(diffRange, range[0]);
        range[1] = this._getRange(diffRange, range[0]);
      }
    } else {
      if (this._isElement(currentTarget, 'minHandleElement')) {
        range[0] = this._getRange(diffRange, range[0]);
      }
      if (this._isElement(currentTarget, 'maxHandleElement')) {
        range[1] = this._getRange(diffRange, range[1]);
      }
    }

    if (this._isElement(currentTarget, 'middleHandleElement')) {
      diffStashRange = (rangeStash[1] - rangeStash[0]);
      range[0] = this._getRange(diffRange, range[0]);
      range[1] = range[0] + diffStashRange;
      if (range[1] > 100) {
        range[1] = 100;
        range[0] = range[1] - diffStashRange;
      }
    }

    this.fire('rangeChange', {
      range: range
    });

    this.set('page' + ucDim, currentPage);
    this._renderUI();
    this.get('canvas').draw(); // need delete
    return;
  },
  _onMouseLeave: function() {
    var containerDOM = this.get('canvas').get('containerDOM');
    containerDOM.style.cursor = 'default';
  },
  _onMouseMove: function(ev) {
    var cursor = ev.currentTarget.get('cursor', true);
    var containerDOM = this.get('canvas').get('containerDOM');
    if (containerDOM) {
      if (cursor) {
        containerDOM.style.cursor = cursor;
      } else {
        containerDOM.style.cursor = 'default';
      }
    }
  },
  _onMouseDown: function(ev) {
    var currentTarget = ev.currentTarget;
    var originEvent = ev.event;
    var range = this.get('range');
    originEvent.stopPropagation();
    originEvent.preventDefault();
    this.set('pageX', originEvent.pageX);
    this.set('pageY', originEvent.pageY);
    this.set('currentTarget', currentTarget);
    this.set('rangeStash', [range[0], range[1]]);
    this._bindCanvasEvents();
  },
  _bindCanvasEvents: function() {
    this.onMouseMoveListener = Util.addEventListener(document, 'mousemove', Util.wrapBehavior(this, '_onCanvasMouseMove'));
    this.onMouseUpListener = Util.addEventListener(document, 'mouseup', Util.wrapBehavior(this, '_onCanvasMouseUp'));
  },
  _onCanvasMouseMove: function(ev) {
    var layout = this.get('layout');
    if (layout === 'horizontal') {
      this._updateStatus('x', ev);
    } else {
      this._updateStatus('y', ev);
    }
  },
  _onCanvasMouseUp: function() {
    this._removeDocumentEvents();
  },
  _removeDocumentEvents: function() {
    this.onMouseMoveListener.remove();
    this.onMouseUpListener.remove();
  }
});

module.exports = Range;
