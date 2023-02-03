"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _lodash = _interopRequireDefault(require("lodash.throttle"));
var _exenv = require("exenv");
var _Portal = _interopRequireDefault(require("./Portal"));
var _excluded = ["component", "top", "left", "right", "fullWidth", "componentClass", "zIndex"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var listeners = {};
function fireListeners() {
  Object.keys(listeners).forEach(function (key) {
    return listeners[key]();
  });
}
function getPageOffset() {
  return {
    x: window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
    y: window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
  };
}
function initDOMListener() {
  document.body.addEventListener('wheel', (0, _lodash["default"])(fireListeners, 100, {
    leading: true,
    trailing: true
  }));
  window.addEventListener('resize', (0, _lodash["default"])(fireListeners, 50, {
    leading: true,
    trailing: true
  }));
}
if (_exenv.canUseDOM) {
  if (document.body) {
    initDOMListener();
  } else {
    document.addEventListener('DOMContentLoaded', initDOMListener);
  }
}
var listenerIdCounter = 0;
function subscribe(fn) {
  listenerIdCounter += 1;
  var id = listenerIdCounter;
  listeners[id] = fn;
  return function () {
    return delete listeners[id];
  };
}
var RelativePortal = /*#__PURE__*/function (_React$Component) {
  _inherits(RelativePortal, _React$Component);
  var _super = _createSuper(RelativePortal);
  function RelativePortal() {
    var _this;
    _classCallCheck(this, RelativePortal);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      right: 0,
      left: 0,
      top: 0
    });
    return _this;
  }
  _createClass(RelativePortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      this.handleScroll = function () {
        if (_this2.element) {
          var rect = _this2.element.getBoundingClientRect();
          var pageOffset = getPageOffset();
          var top = pageOffset.y + rect.top;
          var right = document.documentElement.clientWidth - rect.right - pageOffset.x;
          var left = pageOffset.x + rect.left;
          if (top !== _this2.state.top || left !== _this2.state.left || right !== _this2.state.right) {
            _this2.setState({
              left: left,
              top: top,
              right: right
            });
          }
        }
      };
      this.unsubscribe = subscribe(this.handleScroll);
      this.handleScroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // this.handleScroll();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props = this.props,
        Comp = _this$props.component,
        top = _this$props.top,
        left = _this$props.left,
        right = _this$props.right,
        fullWidth = _this$props.fullWidth,
        componentClass = _this$props.componentClass,
        zIndex = _this$props.zIndex,
        props = _objectWithoutProperties(_this$props, _excluded);
      var fromLeftOrRight = right !== undefined ? {
        right: this.state.right + right
      } : {
        left: this.state.left + left
      };
      var horizontalPosition = fullWidth ? {
        right: this.state.right + right,
        left: this.state.left + left
      } : fromLeftOrRight;
      return /*#__PURE__*/_react["default"].createElement(Comp, {
        className: componentClass,
        ref: function ref(element) {
          _this3.element = element;
        }
      }, /*#__PURE__*/_react["default"].createElement(_Portal["default"], props, /*#__PURE__*/_react["default"].createElement("div", {
        style: _objectSpread({
          position: 'absolute',
          top: this.state.top + top,
          zIndex: zIndex
        }, horizontalPosition)
      }, this.props.children)));
    }
  }]);
  return RelativePortal;
}(_react["default"].Component);
exports["default"] = RelativePortal;
_defineProperty(RelativePortal, "propTypes", {
  right: _propTypes["default"].number,
  left: _propTypes["default"].number,
  fullWidth: _propTypes["default"].bool,
  top: _propTypes["default"].number,
  children: _propTypes["default"].any,
  onOutClick: _propTypes["default"].func,
  component: _propTypes["default"].string.isRequired,
  componentClass: _propTypes["default"].string
});
_defineProperty(RelativePortal, "defaultProps", {
  left: 0,
  top: 0,
  component: 'span'
});

