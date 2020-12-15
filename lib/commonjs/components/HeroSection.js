"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const path = require('path');

const HeroSection = ({
  title,
  subtitle,
  buttonTitle,
  imgSource,
  buttonPressFuncion
}) => {
  console.log('path: ', path);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, title), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, subtitle), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableHighlight, {
    onPress: buttonPressFuncion()
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, buttonTitle))), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: {
      uri: imgSource
    }
  })));
};

HeroSection.defaultProps = {
  title: 'Grow your business',
  subtitle: 'We are team of talanted',
  buttonTitle: 'Get Started',
  buttonPressFuncion: function () {
    () => _reactNative.Alert;
  },
  imgSource: 'https://localhost:19006/assets/img/BWalletH.svg'
};
var _default = HeroSection;
exports.default = _default;
//# sourceMappingURL=HeroSection.js.map