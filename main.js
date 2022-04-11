"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _element = /*#__PURE__*/new WeakMap();

var _running = /*#__PURE__*/new WeakMap();

var AutoPlay = /*#__PURE__*/function () {
  function AutoPlay(_click) {
    var _this = this;

    _classCallCheck(this, AutoPlay);

    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _running, {
      writable: true,
      value: void 0
    });

    if (!AutoPlay.instance) {
      _classPrivateFieldSet(this, _element, new Element(document.querySelector(".autoplay")));

      _classPrivateFieldSet(this, _running, false);

      var handlers = {
        click: function click() {
          if (_classPrivateFieldGet(_this, _running)) {
            _classPrivateFieldGet(_this, _element).image = "url(shapes/autoplay-play.svg)";
          } else {
            _classPrivateFieldGet(_this, _element).image = "url(shapes/autoplay-pause.svg)";
          }

          _classPrivateFieldSet(_this, _running, !_classPrivateFieldGet(_this, _running));

          _click && _click(_classPrivateFieldGet(_this, _running));
        },
        pointerover: function pointerover(left, top) {
          Sound.pointerover.play();
        }
      };

      _classPrivateFieldGet(this, _element).domelement.addEventListener("click", handlers.click);

      _classPrivateFieldGet(this, _element).addEventListener("pointerover", handlers.pointerover);
    }

    return AutoPlay.instance || (AutoPlay.instance = this);
  }

  _createClass(AutoPlay, [{
    key: "reset",
    value: function reset() {
      _classPrivateFieldGet(this, _element).image = "url(shapes/autoplay-play.svg)";

      _classPrivateFieldSet(this, _running, false);
    }
  }]);

  return AutoPlay;
}();

var BackgroundMusic = /*#__PURE__*/_createClass(function BackgroundMusic() {
  _classCallCheck(this, BackgroundMusic);

  if (!BackgroundMusic.instance) {
    var audio = Sound.background;
    audio && audio.addEventListener("ended", function () {
      this.currentTime = 0;
      this.play();
    });

    var autoplay = function autoplay() {
      audio && (audio.muted = true);
      audio && audio.play();
      audio && (audio.muted = false);

      if (audio && audio.duration > 0 && audio && audio.paused === false) {
        document.removeEventListener("pointerdown", autoplay);
      } else {
        setTimeout(function () {
          document.dispatchEvent(new Event("pointerdown"));
        }, 100);
      }
    };

    document.addEventListener("pointerdown", autoplay);
  }

  return BackgroundMusic.instance || (BackgroundMusic.instance = this);
});

var _element2 = /*#__PURE__*/new WeakMap();

var _enable = /*#__PURE__*/new WeakMap();

var Cursor = /*#__PURE__*/function () {
  function Cursor(domelement) {
    var _this2 = this;

    _classCallCheck(this, Cursor);

    _classPrivateFieldInitSpec(this, _element2, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _enable, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "$pointerdown", void 0);

    _defineProperty(this, "$pointermove", void 0);

    _defineProperty(this, "$pointerup", void 0);

    _defineProperty(this, "$visible", void 0);

    _classPrivateFieldSet(this, _element2, new Element(domelement));

    _classPrivateFieldSet(this, _enable, true);

    var pointerdown = function pointerdown(left, top, dispatchEvent) {
      if (_classPrivateFieldGet(_this2, _enable) || dispatchEvent) {
        _classStaticPrivateFieldSpecSet(Cursor, Cursor, _left, left);

        _classStaticPrivateFieldSpecSet(Cursor, Cursor, _top, top);

        if (_this2.visible) {
          if (_this2.$pointerdown) {
            _this2.$pointerdown && _this2.$pointerdown(left, top);
          } else {
            _classPrivateFieldGet(_this2, _element2).left = left;
            _classPrivateFieldGet(_this2, _element2).top = top;
          }
        }
      }
    };

    var pointermove = function pointermove(left, top, dispatchEvent) {
      if (_classPrivateFieldGet(_this2, _enable) || dispatchEvent) {
        _classStaticPrivateFieldSpecSet(Cursor, Cursor, _left, left);

        _classStaticPrivateFieldSpecSet(Cursor, Cursor, _top, top);

        if (_this2.visible) {
          if (_this2.$pointermove) {
            _this2.$pointermove(left, top);
          } else {
            _classPrivateFieldGet(_this2, _element2).left = left;
            _classPrivateFieldGet(_this2, _element2).top = top;
          }
        }
      }
    };

    var pointerup = function pointerup(left, top, dispatchEvent) {
      if (_classPrivateFieldGet(_this2, _enable) || dispatchEvent) {
        if (_this2.visible) {
          if (_this2.$pointerup) {
            _this2.$pointerup && _this2.$pointerup(left, top);
          } else {
            _classStaticPrivateFieldSpecSet(Cursor, Cursor, _left, left);

            _classStaticPrivateFieldSpecSet(Cursor, Cursor, _top, top);
          }
        }
      }
    };

    PointerEvent.addEventListener("pointermove", this.domelement, pointermove, false);
    PointerEvent.addEventListener("pointerdown", this.domelement, pointerdown, false);
    PointerEvent.addEventListener("pointerup", this.domelement, pointerup, false);
  }

  _createClass(Cursor, [{
    key: "domelement",
    get: function get() {
      return _classPrivateFieldGet(this, _element2).domelement;
    }
  }, {
    key: "element",
    get: function get() {
      return _classPrivateFieldGet(this, _element2);
    }
  }, {
    key: "enable",
    set: function set(value) {
      _classPrivateFieldSet(this, _enable, value);
    }
  }, {
    key: "style",
    get: function get() {
      return _classPrivateFieldGet(this, _element2).style;
    }
  }, {
    key: "visible",
    get: function get() {
      return _classPrivateFieldGet(this, _element2).visible;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _element2).left = Cursor.left;
      _classPrivateFieldGet(this, _element2).top = Cursor.top;
      _classPrivateFieldGet(this, _element2).visible = value;
      this.$visible && this.$visible(value);
    }
  }], [{
    key: "left",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Cursor, Cursor, _left);
    }
  }, {
    key: "top",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Cursor, Cursor, _top);
    }
  }]);

  return Cursor;
}();

var _left = {
  writable: true,
  value: void 0
};
var _top = {
  writable: true,
  value: void 0
};

var _element3 = /*#__PURE__*/new WeakMap();

var _enable2 = /*#__PURE__*/new WeakMap();

var _offsetX = /*#__PURE__*/new WeakMap();

var _offsetY = /*#__PURE__*/new WeakMap();

var _originalX = /*#__PURE__*/new WeakMap();

var _originalY = /*#__PURE__*/new WeakMap();

var Draggable = /*#__PURE__*/function () {
  function Draggable(domelement) {
    var _this3 = this;

    _classCallCheck(this, Draggable);

    _classPrivateFieldInitSpec(this, _element3, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _enable2, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _offsetX, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _offsetY, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _originalX, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _originalY, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "$dragend", void 0);

    _defineProperty(this, "$dragmove", void 0);

    _defineProperty(this, "$dragstart", void 0);

    _classPrivateFieldSet(this, _element3, new Element(domelement));

    _classPrivateFieldSet(this, _enable2, true);

    var dragend = function dragend(left, top, dragger, dispatchEvent) {
      if (_classPrivateFieldGet(_this3, _enable2) || dispatchEvent) {
        if (_this3.$dragend) {
          _this3.$dragend(left, top, dragger);
        } else {
          _classPrivateFieldGet(_this3, _element3).left = _classPrivateFieldGet(_this3, _originalX);
          _classPrivateFieldGet(_this3, _element3).top = _classPrivateFieldGet(_this3, _originalY);
        }

        return null;
      }

      return dragger;
    };

    var dragmove = function dragmove(left, top, dragger, dispatchEvent) {
      if (_classPrivateFieldGet(_this3, _enable2) || dispatchEvent) {
        if (_this3.$dragmove) {
          _this3.$dragmove(left, top, dragger);
        } else {
          _classPrivateFieldGet(_this3, _element3).left = left + _classPrivateFieldGet(_this3, _offsetX);
          _classPrivateFieldGet(_this3, _element3).top = top + _classPrivateFieldGet(_this3, _offsetY);
        }
      }
    };

    var dragstart = function dragstart(left, top, dispatchEvent) {
      if (_classPrivateFieldGet(_this3, _enable2) || dispatchEvent) {
        _classPrivateFieldSet(_this3, _offsetX, _classPrivateFieldGet(_this3, _element3).left - left);

        _classPrivateFieldSet(_this3, _offsetY, _classPrivateFieldGet(_this3, _element3).top - top);

        _classPrivateFieldSet(_this3, _originalX, _classPrivateFieldGet(_this3, _element3).left);

        _classPrivateFieldSet(_this3, _originalY, _classPrivateFieldGet(_this3, _element3).top);

        if (_this3.$dragstart) {
          return _this3.$dragstart(left, top);
        }

        return _this3;
      }

      return null;
    };

    PointerEvent.addEventListener("dragend", _classPrivateFieldGet(this, _element3), dragend);
    PointerEvent.addEventListener("dragmove", _classPrivateFieldGet(this, _element3), dragmove);
    PointerEvent.addEventListener("dragstart", _classPrivateFieldGet(this, _element3), dragstart);
  }

  _createClass(Draggable, [{
    key: "domelement",
    get: function get() {
      return _classPrivateFieldGet(this, _element3).domelement;
    }
  }, {
    key: "element",
    get: function get() {
      return _classPrivateFieldGet(this, _element3);
    }
  }, {
    key: "enable",
    set: function set(value) {
      _classPrivateFieldSet(this, _enable2, value);
    }
  }, {
    key: "cancel",
    value: function cancel() {
      _classPrivateFieldGet(this, _element3).left = _classPrivateFieldGet(this, _originalX);
      _classPrivateFieldGet(this, _element3).top = _classPrivateFieldGet(this, _originalY);
    }
  }]);

  return Draggable;
}();

var _element4 = /*#__PURE__*/new WeakMap();

var _enable3 = /*#__PURE__*/new WeakMap();

var Droppable = /*#__PURE__*/function () {
  function Droppable(domelement) {
    var _this4 = this;

    _classCallCheck(this, Droppable);

    _classPrivateFieldInitSpec(this, _element4, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _enable3, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "$dragout", void 0);

    _defineProperty(this, "$dragover", void 0);

    _defineProperty(this, "$drop", void 0);

    _classPrivateFieldSet(this, _element4, new Element(domelement));

    _classPrivateFieldSet(this, _enable3, true);

    var dragout = function dragout(left, top, dragger, dispatchEvent) {
      if (_classPrivateFieldGet(_this4, _enable3) || dispatchEvent) {
        _this4.$dragout && _this4.$dragout(left, top, dragger);
      }
    };

    var dragover = function dragover(left, top, dragger, dispatchEvent) {
      if (_classPrivateFieldGet(_this4, _enable3) || dispatchEvent) {
        _this4.$dragover && _this4.$dragover(left, top, dragger);
      }
    };

    var drop = function drop(left, top, dragger, dispatchEvent) {
      if (_classPrivateFieldGet(_this4, _enable3) || dispatchEvent) {
        _this4.$drop && _this4.$drop(left, top, dragger);
        return null;
      }

      return dragger;
    };

    PointerEvent.addEventListener("dragout", _classPrivateFieldGet(this, _element4), dragout);
    PointerEvent.addEventListener("dragover", _classPrivateFieldGet(this, _element4), dragover);
    PointerEvent.addEventListener("drop", _classPrivateFieldGet(this, _element4), drop);
  }

  _createClass(Droppable, [{
    key: "domelement",
    get: function get() {
      return _classPrivateFieldGet(this, _element4).domelement;
    }
  }, {
    key: "element",
    get: function get() {
      return _classPrivateFieldGet(this, _element4);
    }
  }, {
    key: "enable",
    set: function set(value) {
      _classPrivateFieldSet(this, _enable3, value);
    }
  }]);

  return Droppable;
}();

var _domelement = /*#__PURE__*/new WeakMap();

var Element = /*#__PURE__*/function () {
  function Element(domelement) {
    _classCallCheck(this, Element);

    _classPrivateFieldInitSpec(this, _domelement, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _domelement, domelement);
  }

  _createClass(Element, [{
    key: "bottom",
    get: function get() {
      return this.top + this.height;
    },
    set: function set(value) {
      this.top = value - this.height;
    }
  }, {
    key: "children",
    get: function get() {
      return _classPrivateFieldGet(this, _domelement).children;
    }
  }, {
    key: "domelement",
    get: function get() {
      return _classPrivateFieldGet(this, _domelement);
    }
  }, {
    key: "enable",
    get: function get() {
      return this.style["pointer-events"] === "none" ? false : true;
    },
    set: function set(value) {
      this.style["pointer-events"] = value ? "all" : "none";
    }
  }, {
    key: "height",
    get: function get() {
      return _classPrivateFieldGet(this, _domelement).getBoundingClientRect().height / frame.scale.y;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _domelement).style["height"] = value + "px";
    }
  }, {
    key: "image",
    get: function get() {
      return this.style["background-image"];
    },
    set: function set(value) {
      this.style["background-image"] = value;
    }
  }, {
    key: "left",
    get: function get() {
      return (_classPrivateFieldGet(this, _domelement).getBoundingClientRect().left - frame.getBoundingClientRect().left) / frame.scale.x;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _domelement).style["left"] = value - (1 - this.scale.x) * parseFloat(getComputedStyle(_classPrivateFieldGet(this, _domelement)).width) / 2.0 + "px";
    }
  }, {
    key: "rect",
    get: function get() {
      return {
        left: this.left,
        top: this.top,
        width: this.width,
        height: this.height,
        right: this.left + this.width,
        bottom: this.top + this.height
      };
    }
  }, {
    key: "right",
    get: function get() {
      return this.left + this.width;
    },
    set: function set(value) {
      this.left = value - this.width;
    }
  }, {
    key: "scale",
    get: function get() {
      var visible = this.visible;
      _classPrivateFieldGet(this, _domelement).style["display"] = "initial";
      var scale = {
        x: _classPrivateFieldGet(this, _domelement).getBoundingClientRect().width / _classPrivateFieldGet(this, _domelement).offsetWidth / frame.scale.x,
        y: _classPrivateFieldGet(this, _domelement).getBoundingClientRect().height / _classPrivateFieldGet(this, _domelement).offsetHeight / frame.scale.y
      };
      this.visible = visible;
      return scale;
    }
  }, {
    key: "style",
    get: function get() {
      return _classPrivateFieldGet(this, _domelement).style;
    }
  }, {
    key: "transform",
    get: function get() {
      return _classPrivateFieldGet(this, _domelement).style["transform"];
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _domelement).style["transform"] = value;
    }
  }, {
    key: "top",
    get: function get() {
      return (_classPrivateFieldGet(this, _domelement).getBoundingClientRect().top - frame.getBoundingClientRect().top) / frame.scale.y;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _domelement).style["top"] = value - (1 - this.scale.y) * parseFloat(getComputedStyle(_classPrivateFieldGet(this, _domelement)).height) / 2.0 + "px";
    }
  }, {
    key: "visible",
    get: function get() {
      return getComputedStyle(_classPrivateFieldGet(this, _domelement)).display === "none" ? false : true;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _domelement).style["display"] = value ? "block" : "none";
    }
  }, {
    key: "width",
    get: function get() {
      return _classPrivateFieldGet(this, _domelement).getBoundingClientRect().width / frame.scale.x;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _domelement).style["width"] = value + "px";
    }
  }, {
    key: "zindex",
    get: function get() {
      return this.style["z-index"];
    },
    set: function set(value) {
      this.style["z-index"] = value;
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, handler, active) {
      PointerEvent.addEventListener(type, this, handler, active);
    }
  }, {
    key: "getBoundingClientRect",
    value: function getBoundingClientRect() {
      return _classPrivateFieldGet(this, _domelement).getBoundingClientRect();
    }
  }, {
    key: "getComputedStyle",
    value: function getComputedStyle() {
      return this.getComputedStyle(_classPrivateFieldGet(this, _domelement));
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, handler) {
      PointerEvent.removeEventListener(type, this, handler);
    }
  }]);

  return Element;
}();

var _element5 = /*#__PURE__*/new WeakMap();

var _buttons = /*#__PURE__*/new WeakMap();

var EndScreen = /*#__PURE__*/function () {
  function EndScreen(_click2) {
    var _this5 = this;

    _classCallCheck(this, EndScreen);

    _classPrivateFieldInitSpec(this, _element5, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _buttons, {
      writable: true,
      value: new Array()
    });

    if (!EndScreen.instance) {
      (function () {
        _classPrivateFieldSet(_this5, _element5, new Element(document.querySelector(".end-screen")));

        var handlers = {
          click: function click(index) {
            if (index === 0) {
              Sound.lose && (Sound.lose.pause(), Sound.lose.currentTime = 0);
              Sound.timeup && (Sound.timeup.pause(), Sound.timeup.currentTime = 0);
              Sound.win && (Sound.win.pause(), Sound.win.currentTime = 0);
              _this5.visible = false;
              _click2 && _click2();
            }
          },
          pointerout: function pointerout(index) {
            _classPrivateFieldGet(_this5, _buttons)[index].image = Image.EndScreen_pointerout;
          },
          pointerover: function pointerover(index) {
            Sound.pointerover.play();
            _classPrivateFieldGet(_this5, _buttons)[index].image = Image.EndScreen_pointerover;
          }
        };
        var buttons = document.querySelector(".end-screen > .end-screen-buttons");

        var _loop = function _loop(i) {
          _classPrivateFieldGet(_this5, _buttons).push(new Element(buttons.children[i]));

          _classPrivateFieldGet(_this5, _buttons)[i].addEventListener("click", function () {
            return handlers.click(i);
          });

          _classPrivateFieldGet(_this5, _buttons)[i].addEventListener("pointerout", function () {
            return handlers.pointerout(i);
          });

          _classPrivateFieldGet(_this5, _buttons)[i].addEventListener("pointerover", function () {
            return handlers.pointerover(i);
          });
        };

        for (var i = 0; i < buttons.childElementCount; i++) {
          _loop(i);
        }
      })();
    }

    return EndScreen.instance || (EndScreen.instance = this);
  }

  _createClass(EndScreen, [{
    key: "result",
    set: function set(value) {
      var result = new Element(document.querySelector(".end-screen > .end-screen-result"));

      switch (value) {
        case "lose":
          Sound.lose && Sound.lose.play();
          result.image = Image.EndScreen_lose;
          break;

        case "timeup":
          Sound.timeup && Sound.timeup.play();
          result.image = Image.EndScreen_timeup;
          break;

        case "win":
          Sound.win && Sound.win.play();
          result.image = Image.EndScreen_win;
          break;
      }
    }
  }, {
    key: "score",
    set: function set(value) {
      document.querySelector(".end-screen > .end-screen-score > .end-screen-score-text").innerHTML = value;
      document.querySelector(".end-screen > .end-screen-score > .end-screen-score-point-text").style["left"] = value < 10 ? "192px" : value < 100 ? "219px" : "246px";
    }
  }, {
    key: "visible",
    get: function get() {
      return _classPrivateFieldGet(this, _element5).visible;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _element5).visible = value;
    }
  }]);

  return EndScreen;
}();

var ExitButton = /*#__PURE__*/_createClass(function ExitButton() {
  _classCallCheck(this, ExitButton);

  if (!ExitButton.instance) {
    var element = new Element(document.querySelector(".exit-button"));
    var door1 = new Element(document.querySelector(".exit-button > .exit-button-door-1"));
    var text1 = new Element(document.querySelector(".exit-button > .exit-button-text-1"));
    var text2 = new Element(document.querySelector(".exit-button > .exit-button-text-2"));

    var pointerout = function pointerout(left, top) {
      element.style["right"] = "20px";
      element.style["width"] = "64px";
      door1.visible = false;
      text1.style["left"] = " -15px";
      text1.style["top"] = "2px";
      text2.style["right"] = "-5px";
      text2.style["bottom"] = "2px";
    };

    var pointerover = function pointerover(left, top) {
      Sound.exit.play();
      element.style["right"] = "15px";
      element.style["width"] = "90px";
      door1.visible = true;
      text1.style["left"] = " -10px";
      text1.style["top"] = "-5px";
      text2.style["right"] = "-5px";
      text2.style["bottom"] = "-5px";
    };

    element.addEventListener("pointerout", pointerout);
    element.addEventListener("pointerover", pointerover);
  }

  return ExitButton.instance || (ExitButton.instance = this);
});

var _height = /*#__PURE__*/new WeakMap();

var _width = /*#__PURE__*/new WeakMap();

var Frame = /*#__PURE__*/function (_Element) {
  _inherits(Frame, _Element);

  var _super = _createSuper(Frame);

  function Frame(domelement) {
    var _this6;

    _classCallCheck(this, Frame);

    _this6 = _super.call(this, domelement);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this6), _width, {
      get: void 0,
      set: _set_width
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this6), _height, {
      get: void 0,
      set: _set_height
    });

    return _this6;
  }

  _createClass(Frame, [{
    key: "height",
    get: function get() {
      return this.domelement.getBoundingClientRect().height;
    }
  }, {
    key: "scale",
    get: function get() {
      var visible = this.visible;
      this.domelement.style["display"] = "initial";
      var scale = {
        x: this.domelement.getBoundingClientRect().width / this.domelement.offsetWidth,
        y: this.domelement.getBoundingClientRect().height / this.domelement.offsetHeight
      };
      this.visible = visible;
      return scale;
    }
  }, {
    key: "width",
    get: function get() {
      return this.domelement.getBoundingClientRect().width;
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, handler) {
      this.domelement.addEventListener(type, handler);
    }
  }, {
    key: "getComputedStyle",
    value: function getComputedStyle() {
      return this.domelement.getComputedStyle(this.domelement);
    }
  }, {
    key: "removeChild",
    value: function removeChild(domelement) {
      return this.domelement.removeChild(domelement);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, handler) {
      this.domelement.removeEventListener(type, handler);
    }
  }]);

  return Frame;
}(Element);

function _set_height(value) {}

function _set_width(value) {}

var FullScreen = /*#__PURE__*/_createClass(function FullScreen() {
  _classCallCheck(this, FullScreen);

  if (!FullScreen.instance) {
    var element = new Element(document.querySelector(".fullscreen"));
    var fullscreen = false;

    var click = function click() {
      if (fullscreen && document.fullscreenElement !== null) {
        (document.exitFullscreen || document.webkitExitFullscreen).call(document);
        frame.transform = "translate(-50%, -50%) scale(1, 1)";
      } else {
        var requestFullscreen = function requestFullscreen() {
          var scale = window.innerWidth > window.innerHeight ? screen.height / 600 : screen.width / 800;
          frame.transform = "translate(-50%, -50%) scale(".concat(scale - 0.01, ", ").concat(scale - 0.01, ")");
        };

        var promise = (document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen).call(document.documentElement);
        promise && promise.then(requestFullscreen) || setTimeout(requestFullscreen, 0.33);
      }

      fullscreen = !fullscreen;
    };

    var fullscreenchange = function fullscreenchange() {};

    var pointerover = function pointerover(left, top) {
      Sound.pointerover.play();
    };

    document.addEventListener('fullscreenchange', fullscreenchange);
    document.addEventListener('webkitfullscreenchange', fullscreenchange);
    element.domelement.addEventListener("click", click);
    element.addEventListener("pointerover", pointerover);
  }

  return FullScreen.instance || (FullScreen.instance = this);
});

var PointerEvent = /*#__PURE__*/function () {
  function PointerEvent() {
    _classCallCheck(this, PointerEvent);
  }

  _createClass(PointerEvent, null, [{
    key: "constructor",
    value: function constructor() {
      frame.addEventListener("click", _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _click3));
      frame.addEventListener("pointerdown", _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _pointerdown));
      frame.addEventListener("pointermove", _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _pointermove));
      frame.addEventListener("pointerup", _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _pointerup));
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, element, handler, active) {
      var listeners = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getListeners).call(PointerEvent, type);

      listeners.push({
        element: element,
        handler: handler,
        active: active === false ? false : true
      });
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(type, left, top) {
      var e = new Event(type);
      var frameScale = frame.scale;
      e.clientX = frame.getBoundingClientRect().left + left * frameScale.x;
      e.clientY = frame.getBoundingClientRect().top + top * frameScale.y;
      e.$dispatchEvent = true;

      switch (type) {
        case "click":
          _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _click3).call(PointerEvent, e);

          break;

        case "pointerdown":
          _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _pointerdown).call(PointerEvent, e);

          break;

        case "pointermove":
          _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _pointermove).call(PointerEvent, e);

          break;

        case "pointerup":
          _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _pointerup).call(PointerEvent, e);

          break;
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, element, handler) {
      var listeners = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getListeners).call(PointerEvent, type);

      for (var i = 0; i < listeners.length; i++) {
        if (listeners[i].element === element) {
          if (!handler || listeners[i].handler === handler) {
            listeners.splice(i, 1);
          }
        }
      }
    }
  }]);

  return PointerEvent;
}();

function _click3(e) {
  e.preventDefault();

  var _classStaticPrivateMe = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getPointerPosition).call(PointerEvent, e),
      _classStaticPrivateMe2 = _slicedToArray(_classStaticPrivateMe, 2),
      left = _classStaticPrivateMe2[0],
      top = _classStaticPrivateMe2[1];

  var dispatchEvent = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _isDispatchEvent).call(PointerEvent, e);

  var topmostDomelement = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getTopmostDomelementFromPointer).call(PointerEvent, e.clientX, e.clientY);

  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _hoveringDomelement) !== topmostDomelement) {
    return;
  }

  for (var i = 0; i < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dropListeners).length; i++) {
    if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dropListeners)[i].element.domelement === topmostDomelement) {
      return;
    }
  }

  for (var _i4 = 0; _i4 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners).length; _i4++) {
    if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners)[_i4].element.domelement === topmostDomelement) {
      _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners)[_i4].handler(left, top, dispatchEvent);
    }
  }
}

function _pointerdown(e) {
  e.preventDefault();

  var _classStaticPrivateMe3 = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getPointerPosition).call(PointerEvent, e),
      _classStaticPrivateMe4 = _slicedToArray(_classStaticPrivateMe3, 2),
      left = _classStaticPrivateMe4[0],
      top = _classStaticPrivateMe4[1];

  var dispatchEvent = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _isDispatchEvent).call(PointerEvent, e);

  var topmostDomelement = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getTopmostDomelementFromPointer).call(PointerEvent, e.clientX, e.clientY);

  _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _dispatchPointerout).call(PointerEvent, topmostDomelement, left, top, dispatchEvent);

  for (var i = 0; i < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerdownListeners).length; i++) {
    if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerdownListeners)[i].element.domelement === topmostDomelement) {
      _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _dispatchPointerover).call(PointerEvent, topmostDomelement, left, top, dispatchEvent);

      _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerdownListeners)[i].handler(left, top, dispatchEvent);

      break;
    }
  }

  (function () {
    for (var _i5 = 0; _i5 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners).length; _i5++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners)[_i5].element.domelement === topmostDomelement) {
        return;
      }
    }

    for (var _i6 = 0; _i6 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerdownListeners).length; _i6++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerdownListeners)[_i6].active === false) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerdownListeners)[_i6].handler(left, top, dispatchEvent);
      }
    }
  })();

  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger) === null) {
    for (var _i7 = 0; _i7 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragstartListeners).length; _i7++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragstartListeners)[_i7].element.domelement === topmostDomelement) {
        _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _dispatchPointerover).call(PointerEvent, topmostDomelement, left, top, dispatchEvent);

        _classStaticPrivateFieldSpecSet(PointerEvent, PointerEvent, _dragger, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragstartListeners)[_i7].handler(left, top, dispatchEvent));

        break;
      }
    }
  }

  _classStaticPrivateFieldSpecSet(PointerEvent, PointerEvent, _hoveringDomelement, topmostDomelement);
}

function _pointermove(e) {
  e.preventDefault();

  var _classStaticPrivateMe5 = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getPointerPosition).call(PointerEvent, e),
      _classStaticPrivateMe6 = _slicedToArray(_classStaticPrivateMe5, 2),
      left = _classStaticPrivateMe6[0],
      top = _classStaticPrivateMe6[1];

  var dispatchEvent = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _isDispatchEvent).call(PointerEvent, e);

  var topmostDomelement = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getTopmostDomelementFromPointer).call(PointerEvent, e.clientX, e.clientY);

  _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _dispatchPointerout).call(PointerEvent, topmostDomelement, left, top, dispatchEvent);

  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger) && _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _hoveringDomelement) !== topmostDomelement) {
    for (var i = 0; i < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoutListeners).length; i++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoutListeners)[i].element.domelement === _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _hoveringDomelement)) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoutListeners)[i].handler(left, top, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger), dispatchEvent);

        break;
      }
    }
  }

  _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _dispatchPointerover).call(PointerEvent, topmostDomelement, left, top, dispatchEvent);

  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger) && _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _hoveringDomelement) !== topmostDomelement) {
    for (var _i8 = 0; _i8 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoverListeners).length; _i8++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoverListeners)[_i8].element.domelement === topmostDomelement) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoverListeners)[_i8].handler(left, top, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger), dispatchEvent);

        break;
      }
    }
  }

  for (var _i9 = 0; _i9 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointermoveListeners).length; _i9++) {
    if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointermoveListeners)[_i9].element.domelement === topmostDomelement || _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointermoveListeners)[_i9].active === false) {
      _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointermoveListeners)[_i9].handler(left, top, dispatchEvent);
    }
  }

  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger)) {
    for (var _i10 = 0; _i10 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragmoveListeners).length; _i10++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragmoveListeners)[_i10].element.domelement === _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger).domelement) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragmoveListeners)[_i10].handler(left, top, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger), dispatchEvent);

        break;
      }
    }
  }

  _classStaticPrivateFieldSpecSet(PointerEvent, PointerEvent, _hoveringDomelement, topmostDomelement);
}

function _pointerup(e) {
  e.preventDefault();

  var _classStaticPrivateMe7 = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getPointerPosition).call(PointerEvent, e),
      _classStaticPrivateMe8 = _slicedToArray(_classStaticPrivateMe7, 2),
      left = _classStaticPrivateMe8[0],
      top = _classStaticPrivateMe8[1];

  var dispatchEvent = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _isDispatchEvent).call(PointerEvent, e);

  var topmostDomelement = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getTopmostDomelementFromPointer).call(PointerEvent, e.clientX, e.clientY);

  for (var i = 0; i < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerupListeners).length; i++) {
    if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerupListeners)[i].element.domelement === topmostDomelement) {
      _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerupListeners)[i].handler(left, top, dispatchEvent);

      break;
    }
  }

  (function () {
    for (var _i11 = 0; _i11 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners).length; _i11++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners)[_i11].element.domelement === topmostDomelement) {
        return;
      }
    }

    for (var _i12 = 0; _i12 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerupListeners).length; _i12++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerupListeners)[_i12].active === false) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerupListeners)[_i12].handler(left, top, dispatchEvent);
      }
    }
  })();

  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger)) {
    for (var _i13 = 0; _i13 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dropListeners).length; _i13++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dropListeners)[_i13].element.domelement === topmostDomelement) {
        _classStaticPrivateFieldSpecSet(PointerEvent, PointerEvent, _dragger, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dropListeners)[_i13].handler(left, top, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger), dispatchEvent));

        return;
      }
    }

    for (var _i14 = 0; _i14 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragendListeners).length; _i14++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragendListeners)[_i14].element.domelement === _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger).domelement) {
        _classStaticPrivateFieldSpecSet(PointerEvent, PointerEvent, _dragger, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragendListeners)[_i14].handler(left, top, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger), dispatchEvent));

        return;
      }
    }
  }
}

function _getListeners(type) {
  switch (type) {
    case "click":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners);

    case "dragstart":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragstartListeners);

    case "dragmove":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragmoveListeners);

    case "dragout":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoutListeners);

    case "dragover":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoverListeners);

    case "dragend":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragendListeners);

    case "drop":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dropListeners);

    case "pointerdown":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerdownListeners);

    case "pointermove":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointermoveListeners);

    case "pointerover":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroverListeners);

    case "pointerout":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroutListeners);

    case "pointerup":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerupListeners);
  }
}

function _getPointerPosition(e) {
  var frameScale = frame.scale;
  return [(e.clientX - frame.getBoundingClientRect().left) / frameScale.x, (e.clientY - frame.getBoundingClientRect().top) / frameScale.y];
}

function _isDispatchEvent(e) {
  return e.$dispatchEvent !== undefined;
}

function _getTopmostDomelementFromPointer(left, top) {
  var topmostDomelements = document.elementsFromPoint(left, top);
  var topmostDomelement = topmostDomelements[0].$parent || topmostDomelements[0];

  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger) === null) {
    return topmostDomelement;
  }

  for (var i = 0; i < topmostDomelements.length; i++) {
    topmostDomelement = topmostDomelements[i].$parent || topmostDomelements[i];

    if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger).domelement !== topmostDomelement) {
      return topmostDomelement;
    }
  }
}

function _dispatchPointerout(topmostDomelement, left, top, dispatchEvent) {
  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _hoveringDomelement) !== topmostDomelement) {
    for (var i = 0; i < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroutListeners).length; i++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroutListeners)[i].element.domelement === _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _hoveringDomelement)) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroutListeners)[i].handler(left, top, dispatchEvent);

        return;
      }
    }
  }
}

function _dispatchPointerover(topmostDomelement, left, top, dispatchEvent) {
  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _hoveringDomelement) !== topmostDomelement) {
    for (var i = 0; i < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroverListeners).length; i++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroverListeners)[i].element.domelement === topmostDomelement) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroverListeners)[i].handler(left, top, dispatchEvent);

        return;
      }
    }
  }
}

var _hoveringDomelement = {
  writable: true,
  value: null
};
var _dragger = {
  writable: true,
  value: null
};
var _clickListeners = {
  writable: true,
  value: new Array()
};
var _dragstartListeners = {
  writable: true,
  value: new Array()
};
var _dragmoveListeners = {
  writable: true,
  value: new Array()
};
var _dragoutListeners = {
  writable: true,
  value: new Array()
};
var _dragoverListeners = {
  writable: true,
  value: new Array()
};
var _dragendListeners = {
  writable: true,
  value: new Array()
};
var _dropListeners = {
  writable: true,
  value: new Array()
};
var _pointerdownListeners = {
  writable: true,
  value: new Array()
};
var _pointermoveListeners = {
  writable: true,
  value: new Array()
};
var _pointeroutListeners = {
  writable: true,
  value: new Array()
};
var _pointeroverListeners = {
  writable: true,
  value: new Array()
};
var _pointerupListeners = {
  writable: true,
  value: new Array()
};

var _button = /*#__PURE__*/new WeakMap();

var _element6 = /*#__PURE__*/new WeakMap();

var StartScreen = /*#__PURE__*/function () {
  function StartScreen(_click5) {
    var _this7 = this;

    _classCallCheck(this, StartScreen);

    _classPrivateFieldInitSpec(this, _button, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _element6, {
      writable: true,
      value: void 0
    });

    if (!StartScreen.instance) {
      _classPrivateFieldSet(this, _element6, new Element(document.querySelector(".start-screen")));

      _classPrivateFieldSet(this, _button, new Element(document.querySelector(".start-screen > .start-screen-button")));

      var handlers = {
        click: function click(left, top) {
          Sound.start.play();
          _this7.visible = false;
          _click5 && _click5();
        },
        pointerout: function pointerout(left, top) {
          _classPrivateFieldGet(_this7, _button).width = 434;
          _classPrivateFieldGet(_this7, _button).height = 155;
          _classPrivateFieldGet(_this7, _button).image = Image.StartScreen_pointerout;
          _classPrivateFieldGet(_this7, _button).transform = "translate(-50%, -50%) scale(0.8, 0.8)";
        },
        pointerover: function pointerover(left, top) {
          Sound.pointerover.play();
          _classPrivateFieldGet(_this7, _button).width = 613;
          _classPrivateFieldGet(_this7, _button).height = 211;
          _classPrivateFieldGet(_this7, _button).image = Image.StartScreen_pointerover;
          _classPrivateFieldGet(_this7, _button).transform = "translate(-50%, -50%) scale(0.8, 0.8)";
        }
      };

      _classPrivateFieldGet(this, _button).addEventListener("click", handlers.click);

      _classPrivateFieldGet(this, _button).addEventListener("pointerout", handlers.pointerout);

      _classPrivateFieldGet(this, _button).addEventListener("pointerover", handlers.pointerover);
    }

    return StartScreen.instance || (StartScreen.instance = this);
  }

  _createClass(StartScreen, [{
    key: "visible",
    get: function get() {
      return _classPrivateFieldGet(this, _element6).visible;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _element6).visible = value;
    }
  }]);

  return StartScreen;
}();

var StarCursor = /*#__PURE__*/function (_Cursor) {
  _inherits(StarCursor, _Cursor);

  var _super2 = _createSuper(StarCursor);

  function StarCursor() {
    var _this8;

    _classCallCheck(this, StarCursor);

    if (!StarCursor.instance) {
      _this8 = _super2.call(this, document.querySelector(".star-cursor"));
    }

    return _possibleConstructorReturn(_this8, StarCursor.instance || (StarCursor.instance = _assertThisInitialized(_this8)));
  }

  return _createClass(StarCursor);
}(Cursor);

var _element7 = /*#__PURE__*/new WeakMap();

var _hInterval = /*#__PURE__*/new WeakMap();

var _paused = /*#__PURE__*/new WeakMap();

var _second = /*#__PURE__*/new WeakMap();

var _timeup = /*#__PURE__*/new WeakMap();

var Timer = /*#__PURE__*/function () {
  function Timer(timeup) {
    _classCallCheck(this, Timer);

    _classPrivateFieldInitSpec(this, _element7, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _hInterval, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _paused, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _second, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _timeup, {
      writable: true,
      value: void 0
    });

    if (!Timer.instance) {
      _classPrivateFieldSet(this, _element7, new Element(document.querySelector(".timer")));

      _classPrivateFieldSet(this, _second, 0);

      _classPrivateFieldSet(this, _timeup, timeup);
    }

    return Timer.instance || (Timer.instance = this);
  }

  _createClass(Timer, [{
    key: "pause",
    value: function pause() {
      _classPrivateFieldSet(this, _paused, true);
    }
  }, {
    key: "reset",
    value: function reset() {
      _classPrivateFieldGet(this, _element7).domelement.innerHTML = "01:00";
    }
  }, {
    key: "resume",
    value: function resume() {
      _classPrivateFieldSet(this, _paused, false);
    }
  }, {
    key: "start",
    value: function start(duration) {
      var _this9 = this;

      _classPrivateFieldSet(this, _paused, false);

      _classPrivateFieldSet(this, _second, 0);

      clearInterval(_classPrivateFieldGet(this, _hInterval));

      _classPrivateFieldSet(this, _hInterval, setInterval(function () {
        if (_classPrivateFieldGet(_this9, _paused) === true) {
          return;
        }

        _classPrivateFieldSet(_this9, _second, _classPrivateFieldGet(_this9, _second) + 0.1);

        var remainingTime = duration - _classPrivateFieldGet(_this9, _second);

        if (remainingTime <= 0) {
          _classPrivateFieldGet(_this9, _element7).domelement.innerHTML = "00:00";

          _this9.stop();

          _classPrivateFieldGet(_this9, _timeup) && _classPrivateFieldGet(_this9, _timeup).call(_this9);
        } else {
          _classPrivateFieldGet(_this9, _element7).domelement.innerHTML = "00:".concat(remainingTime / 10 < 1 ? "0" : "").concat(Math.floor(remainingTime));
        }
      }, 100));
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(_classPrivateFieldGet(this, _hInterval));
    }
  }]);

  return Timer;
}();

var Utility = /*#__PURE__*/function () {
  function Utility() {
    _classCallCheck(this, Utility);
  }

  _createClass(Utility, null, [{
    key: "distance",
    value: function distance(x1, y1, x2, y2) {
      return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }
  }, {
    key: "isBaidu",
    value: function isBaidu() {
      var userAgent = navigator.userAgent.toLowerCase();
      return userAgent.indexOf("bidu") >= 0 || userAgent.indexOf("baidu") >= 0 || false;
    }
  }, {
    key: "isFirefox",
    value: function isFirefox() {
      var userAgent = navigator.userAgent.toLowerCase();
      return userAgent.indexOf("firefox") >= 0 || userAgent.indexOf("fxios/i") >= 0 || false;
    }
  }, {
    key: "intersectPoint",
    value: function intersectPoint(point, rect) {
      if (point.left > rect.left && point.left < rect.left + rect.width && point.top > rect.top && point.top < rect.top + rect.height) {
        return true;
      }

      return false;
    }
  }, {
    key: "intersectRect",
    value: function intersectRect(rect1, rect2) {
      if (Utility.intersectPoint({
        left: rect1.left,
        top: rect1.top
      }, rect2) || Utility.intersectPoint({
        left: rect1.left + rect1.width,
        top: rect1.top
      }, rect2) || Utility.intersectPoint({
        left: rect1.left,
        top: rect1.top + rect1.height
      }, rect2) || Utility.intersectPoint({
        left: rect1.left + rect1.width,
        top: rect1.top + rect1.height
      }, rect2)) {
        return true;
      }

      return false;
    }
  }, {
    key: "lerp",
    value: function lerp(start, end, t) {
      return start + (end - start) * t;
    }
  }, {
    key: "random",
    value: function random(max) {
      return Math.floor(Math.random() * max);
    }
  }, {
    key: "randoms",
    value: function randoms(max) {
      return Utility.randomSort(_toConsumableArray(Array(max).keys()));
    }
  }, {
    key: "randomSort",
    value: function randomSort(array) {
      for (var i = 0; i < array.length; i++) {
        var index = Utility.random(array.length);
        var _ref = [array[index], array[i]];
        array[i] = _ref[0];
        array[index] = _ref[1];
      }

      return array;
    }
  }, {
    key: "waitForCondition",
    value: function () {
      var _waitForCondition = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(condition) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(condition() === false)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return Utility.waitForSeconds(0);

              case 3:
                _context.next = 0;
                break;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function waitForCondition(_x) {
        return _waitForCondition.apply(this, arguments);
      }

      return waitForCondition;
    }()
  }, {
    key: "waitForSeconds",
    value: function waitForSeconds(seconds) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, seconds * 1000.0);
      });
    }
  }]);

  return Utility;
}();

window.focus();

window.ondragstart = function () {
  return false;
};

var frame = new Frame(document.getElementById("frame"));
PointerEvent.constructor();
"use strict";

var _running2 = /*#__PURE__*/new WeakMap();

var ArtificialMentalRetardation = /*#__PURE__*/function () {
  function ArtificialMentalRetardation() {
    _classCallCheck(this, ArtificialMentalRetardation);

    _classPrivateFieldInitSpec(this, _running2, {
      writable: true,
      value: void 0
    });

    if (!ArtificialMentalRetardation.instance) {}

    return ArtificialMentalRetardation.instance || (ArtificialMentalRetardation.instance = this);
  }

  _createClass(ArtificialMentalRetardation, [{
    key: "start",
    value: function () {
      var _start = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _classPrivateFieldSet(this, _running2, true);

                while (_classPrivateFieldGet(this, _running2)) {}

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "stop",
    value: function stop() {
      _classPrivateFieldSet(this, _running2, false);
    }
  }]);

  return ArtificialMentalRetardation;
}();

var Image = /*#__PURE__*/function () {
  function Image() {
    _classCallCheck(this, Image);
  }

  _createClass(Image, null, [{
    key: "EndScreen_lose",
    get: function get() {
      return "none";
    }
  }, {
    key: "EndScreen_pointerout",
    get: function get() {
      return "url(shapes/135.svg)";
    }
  }, {
    key: "EndScreen_pointerover",
    get: function get() {
      return "url(shapes/137.svg)";
    }
  }, {
    key: "EndScreen_timeup",
    get: function get() {
      return "url(shapes/111.svg)";
    }
  }, {
    key: "EndScreen_win",
    get: function get() {
      return "url(shapes/114.svg)";
    }
  }, {
    key: "StartScreen_pointerout",
    get: function get() {
      return "url(shapes/82.svg)";
    }
  }, {
    key: "StartScreen_pointerover",
    get: function get() {
      return "url(shapes/83.svg)";
    }
  }]);

  return Image;
}();

var Sound = /*#__PURE__*/function () {
  function Sound() {
    _classCallCheck(this, Sound);
  }

  _createClass(Sound, null, [{
    key: "background",
    get: function get() {
      return new Audio("sounds/1_bgmusic05.wav.mp3");
    }
  }, {
    key: "exit",
    get: function get() {
      return new Audio("sounds/74.mp3");
    }
  }, {
    key: "good",
    get: function get() {
      return null;
    }
  }, {
    key: "lose",
    get: function get() {
      return null;
    }
  }, {
    key: "pointerover",
    get: function get() {
      return new Audio("sounds/98.mp3");
    }
  }, {
    key: "right",
    get: function get() {
      return new Audio("sounds/3_pick.mp3");
    }
  }, {
    key: "start",
    get: function get() {
      return new Audio("sounds/2_開始玩.mp3");
    }
  }, {
    key: "timeup",
    get: function get() {
      return new Audio("sounds/4_lose.mp3");
    }
  }, {
    key: "win",
    get: function get() {
      return new Audio("sounds/6_win.mp3");
    }
  }, {
    key: "wrong",
    get: function get() {
      return new Audio("sounds/99.mp3");
    }
  }]);

  return Sound;
}();

var _face = /*#__PURE__*/new WeakMap();

var _eyes = /*#__PURE__*/new WeakMap();

var _message = /*#__PURE__*/new WeakMap();

var Cutie = /*#__PURE__*/function () {
  function Cutie() {
    var _this10 = this;

    _classCallCheck(this, Cutie);

    _classPrivateFieldInitSpec(this, _face, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _eyes, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _message, {
      writable: true,
      value: void 0
    });

    if (!Cutie.instance) {
      _classPrivateFieldSet(this, _face, new Element(document.querySelector(".cutie > .cutie-face")));

      _classPrivateFieldSet(this, _eyes, new Element(document.querySelector(".cutie > .cutie-eyes")));

      _classPrivateFieldSet(this, _message, new Element(document.querySelector(".cutie > .cutie-message-text")));

      this.visible = false;

      var wink = function wink(winking) {
        if (winking) {
          _classPrivateFieldGet(_this10, _eyes).image = "url(shapes/159.svg)";
          setTimeout(wink, 100.0, false);
        } else {
          _classPrivateFieldGet(_this10, _eyes).image = "url(shapes/158.svg)";
          setTimeout(wink, Math.max(0.5 * 1000, Math.random() * 1 * 1000), true);
        }
      };

      wink(true);
    }

    return Cutie.instance || (Cutie.instance = this);
  }

  _createClass(Cutie, [{
    key: "visible",
    set: function set(value) {
      _classPrivateFieldGet(this, _face).visible = value;
      _classPrivateFieldGet(this, _eyes).visible = value;
      _classPrivateFieldGet(this, _message).visible = value;
    }
  }, {
    key: "face",
    set: function set(value) {
      if (value === "smile") {
        _classPrivateFieldGet(this, _face).image = "url(shapes/157.svg)";
      } else if (value === "sad") {
        _classPrivateFieldGet(this, _face).image = "url(shapes/160.svg)";
      }
    }
  }, {
    key: "start",
    value: function () {
      var _start2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ended) {
        var audio;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.visible = true;
                audio = new Audio("sounds/15_b02-2-0001至0010.wav.mp3");
                audio.play();
                audio && audio.addEventListener("ended", function () {
                  ended && ended();
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function start(_x2) {
        return _start2.apply(this, arguments);
      }

      return start;
    }()
  }]);

  return Cutie;
}();

var _answers = /*#__PURE__*/new WeakMap();

var _clickable = /*#__PURE__*/new WeakMap();

var _index = /*#__PURE__*/new WeakMap();

var _leftImage = /*#__PURE__*/new WeakMap();

var _questions = /*#__PURE__*/new WeakMap();

var _rightImages = /*#__PURE__*/new WeakMap();

var _rightBackgrounds = /*#__PURE__*/new WeakMap();

var _rights = /*#__PURE__*/new WeakMap();

var _wrongs = /*#__PURE__*/new WeakMap();

var Question = /*#__PURE__*/function () {
  function Question(_click6, cutie) {
    var _this11 = this;

    _classCallCheck(this, Question);

    _classPrivateFieldInitSpec(this, _answers, {
      writable: true,
      value: new Array(1, 2, 3)
    });

    _classPrivateFieldInitSpec(this, _clickable, {
      writable: true,
      value: false
    });

    _classPrivateFieldInitSpec(this, _index, {
      writable: true,
      value: 0
    });

    _classPrivateFieldInitSpec(this, _leftImage, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _questions, {
      writable: true,
      value: new Array(128, 133, 138, 143, 148)
    });

    _classPrivateFieldInitSpec(this, _rightImages, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _rightBackgrounds, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _rights, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _wrongs, {
      writable: true,
      value: void 0
    });

    if (!Question.instance) {
      (function () {
        _classPrivateFieldSet(_this11, _leftImage, new Element(document.querySelector(".question > .left > .image")));

        var handlers = {
          click: function () {
            var _click7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(left, top, index) {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!(_classPrivateFieldGet(_this11, _clickable) === false)) {
                        _context4.next = 2;
                        break;
                      }

                      return _context4.abrupt("return");

                    case 2:
                      if (!(_classPrivateFieldGet(_this11, _answers)[index] == 1)) {
                        _context4.next = 10;
                        break;
                      }

                      Sound.right.play();

                      _this11.right(index);

                      _context4.next = 7;
                      return Utility.waitForCondition(function () {
                        return _classPrivateFieldGet(_this11, _clickable);
                      });

                    case 7:
                      _click6 && _click6("right");
                      _context4.next = 17;
                      break;

                    case 10:
                      Sound.wrong.play();
                      cutie.face = "sad";

                      _this11.wrong(index);

                      _context4.next = 15;
                      return Utility.waitForCondition(function () {
                        return _classPrivateFieldGet(_this11, _clickable);
                      });

                    case 15:
                      _click6 && _click6("wrong");
                      cutie.face = "smile";

                    case 17:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));

            function click(_x3, _x4, _x5) {
              return _click7.apply(this, arguments);
            }

            return click;
          }(),
          pointerout: function pointerout(left, top, index) {
            _classPrivateFieldGet(_this11, _rightBackgrounds)[index].image = "url(shapes/91.svg)";
          },
          pointerover: function pointerover(left, top, index) {
            Sound.pointerover.play();
            _classPrivateFieldGet(_this11, _rightBackgrounds)[index].image = "url(shapes/92.svg)";
          }
        };

        _classPrivateFieldSet(_this11, _rightBackgrounds, new Array(3));

        var _loop2 = function _loop2(i) {
          _classPrivateFieldGet(_this11, _rightBackgrounds)[i] = new Element(document.querySelector(".question > .right > .background-".concat(i + 1)));

          _classPrivateFieldGet(_this11, _rightBackgrounds)[i].addEventListener("click", function (left, top) {
            return handlers.click(left, top, i);
          });

          _classPrivateFieldGet(_this11, _rightBackgrounds)[i].addEventListener("pointerout", function (left, top) {
            return handlers.pointerout(left, top, i);
          });

          _classPrivateFieldGet(_this11, _rightBackgrounds)[i].addEventListener("pointerover", function (left, top) {
            return handlers.pointerover(left, top, i);
          });
        };

        for (var i = 0; i < _classPrivateFieldGet(_this11, _rightBackgrounds).length; i++) {
          _loop2(i);
        }

        _classPrivateFieldSet(_this11, _rightImages, new Array(3));

        for (var _i = 0; _i < _classPrivateFieldGet(_this11, _rightImages).length; _i++) {
          _classPrivateFieldGet(_this11, _rightImages)[_i] = new Element(document.querySelector(".question > .right > .image-".concat(_i + 1)));
        }

        _classPrivateFieldSet(_this11, _rights, new Array(3));

        for (var _i2 = 0; _i2 < _classPrivateFieldGet(_this11, _rights).length; _i2++) {
          _classPrivateFieldGet(_this11, _rights)[_i2] = new Element(document.querySelector(".question > .right > .right-".concat(_i2 + 1)));
        }

        _classPrivateFieldSet(_this11, _wrongs, new Array(3));

        for (var _i3 = 0; _i3 < _classPrivateFieldGet(_this11, _wrongs).length; _i3++) {
          _classPrivateFieldGet(_this11, _wrongs)[_i3] = new Element(document.querySelector(".question > .right > .wrong-".concat(_i3 + 1)));
        }

        _this11.reset();
      })();
    }

    return Question.instance || (Question.instance = this);
  }

  _createClass(Question, [{
    key: "clickable",
    set: function set(value) {
      _classPrivateFieldSet(this, _clickable, value);
    }
  }, {
    key: "next",
    value: function next() {
      _classPrivateFieldGet(this, _leftImage).image = "url(images/".concat(_classPrivateFieldGet(this, _questions)[_classPrivateFieldGet(this, _index)], "-1.png)");

      _classPrivateFieldSet(this, _answers, Utility.randomSort(_classPrivateFieldGet(this, _answers)));

      for (var i = 0; i < 3; i++) {
        _classPrivateFieldGet(this, _rightImages)[i].image = "url(images/".concat(_classPrivateFieldGet(this, _questions)[_classPrivateFieldGet(this, _index)], "-").concat(_classPrivateFieldGet(this, _answers)[i], ".png");
      }

      _classPrivateFieldSet(this, _index, _classPrivateFieldGet(this, _index) + 1);
    }
  }, {
    key: "reset",
    value: function reset() {
      _classPrivateFieldSet(this, _clickable, false);

      _classPrivateFieldSet(this, _index, 0);

      _classPrivateFieldSet(this, _questions, Utility.randomSort(_classPrivateFieldGet(this, _questions)));
    }
  }, {
    key: "right",
    value: function () {
      var _right = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(index) {
        var i;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _classPrivateFieldSet(this, _clickable, false);

                i = 0;

              case 2:
                if (!(i < 3)) {
                  _context5.next = 12;
                  break;
                }

                _classPrivateFieldGet(this, _rights)[index].visible = true;
                _context5.next = 6;
                return Utility.waitForSeconds(0.1);

              case 6:
                _classPrivateFieldGet(this, _rights)[index].visible = false;
                _context5.next = 9;
                return Utility.waitForSeconds(0.1);

              case 9:
                i++;
                _context5.next = 2;
                break;

              case 12:
                _classPrivateFieldGet(this, _rights)[index].visible = true;
                _context5.next = 15;
                return Utility.waitForSeconds(0.5);

              case 15:
                _classPrivateFieldGet(this, _rights)[index].visible = false;

                _classPrivateFieldSet(this, _clickable, true);

              case 17:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function right(_x6) {
        return _right.apply(this, arguments);
      }

      return right;
    }()
  }, {
    key: "wrong",
    value: function () {
      var _wrong = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(index) {
        var i;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _classPrivateFieldSet(this, _clickable, false);

                i = 0;

              case 2:
                if (!(i < 3)) {
                  _context6.next = 12;
                  break;
                }

                _classPrivateFieldGet(this, _wrongs)[index].visible = true;
                _context6.next = 6;
                return Utility.waitForSeconds(0.1);

              case 6:
                _classPrivateFieldGet(this, _wrongs)[index].visible = false;
                _context6.next = 9;
                return Utility.waitForSeconds(0.1);

              case 9:
                i++;
                _context6.next = 2;
                break;

              case 12:
                _classPrivateFieldGet(this, _wrongs)[index].visible = true;
                _context6.next = 15;
                return Utility.waitForSeconds(0.5);

              case 15:
                _classPrivateFieldGet(this, _wrongs)[index].visible = false;

                _classPrivateFieldSet(this, _clickable, true);

              case 17:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function wrong(_x7) {
        return _wrong.apply(this, arguments);
      }

      return wrong;
    }()
  }, {
    key: "visible",
    set: function set(value) {
      new Element(document.querySelector(".question")).visible = value;
    }
  }]);

  return Question;
}();

var Main = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck(this, Main);

    _defineProperty(this, "artificialMentalRetardation", void 0);

    _defineProperty(this, "autoplay", void 0);

    _defineProperty(this, "backgroundMusic", void 0);

    _defineProperty(this, "cutie", void 0);

    _defineProperty(this, "endScreen", void 0);

    _defineProperty(this, "question", void 0);

    _defineProperty(this, "running", false);

    _defineProperty(this, "score", 0);

    _defineProperty(this, "timer", void 0);

    this.click = this.click.bind(this);
    this.restart = this.restart.bind(this);
    this.start = this.start.bind(this);
    this.timeup = this.timeup.bind(this);
    new ExitButton();
    new FullScreen();
    new StartScreen(this.start);
    this.artificialMentalRetardation = new ArtificialMentalRetardation();
    this.autoplay = new AutoPlay(this.autoplay_click);
    this.backgroundMusic = new BackgroundMusic();
    this.cutie = new Cutie();
    this.endScreen = new EndScreen(this.restart);
    this.question = new Question(this.click, this.cutie);
    this.starCursor = new StarCursor();
    this.timer = new Timer(this.timeup);
    this.starCursor.visible = true;
  }

  _createClass(Main, [{
    key: "click",
    value: function click(result) {
      if (result === "right") {
        this.score += 1;
      }
    }
  }, {
    key: "gameover",
    value: function gameover(result) {
      if (result === "timeup") {
        Sound.timeup.play();
      } else if (result === "win") {
        Sound.win.play();
      }

      this.cutie.visible = false;
      this.endScreen.result = result;
      this.endScreen.visible = true;
      this.question.visible = false;
      this.timer.stop();
    }
  }, {
    key: "restart",
    value: function restart() {
      this.endScreen.visible = false;
      this.start();
    }
  }, {
    key: "start",
    value: function () {
      var _start3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var _this12 = this;

        var _loop3, _ret;

        return regeneratorRuntime.wrap(function _callee7$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.cutie.visible = true;
                this.question.reset();
                this.question.visible = true;
                this.score = 0;
                this.timer.reset();
                this.running = false;
                this.cutie.start(function () {
                  return _this12.running = true;
                });
                this.question.next();
                _context8.next = 10;
                return Utility.waitForCondition(function () {
                  return _this12.running === true;
                });

              case 10:
                this.timer.start(60);
                _loop3 = /*#__PURE__*/regeneratorRuntime.mark(function _loop3() {
                  var previousScrre;
                  return regeneratorRuntime.wrap(function _loop3$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _this12.question.clickable = true;
                          previousScrre = _this12.score;
                          _context7.next = 4;
                          return Utility.waitForCondition(function () {
                            return previousScrre < _this12.score || _this12.running === false;
                          });

                        case 4:
                          if (!(_this12.score == 5)) {
                            _context7.next = 7;
                            break;
                          }

                          _this12.gameover("win");

                          return _context7.abrupt("return", "break");

                        case 7:
                          _this12.question.next();

                        case 8:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _loop3);
                });

              case 12:
                if (!this.running) {
                  _context8.next = 19;
                  break;
                }

                return _context8.delegateYield(_loop3(), "t0", 14);

              case 14:
                _ret = _context8.t0;

                if (!(_ret === "break")) {
                  _context8.next = 17;
                  break;
                }

                return _context8.abrupt("break", 19);

              case 17:
                _context8.next = 12;
                break;

              case 19:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee7, this);
      }));

      function start() {
        return _start3.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "timeup",
    value: function timeup() {
      this.running = false;
      this.gameover("timeup");
    }
  }]);

  return Main;
}();

new Main();