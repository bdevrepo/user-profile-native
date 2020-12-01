"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Logo = _interopRequireDefault(require("./Logo"));

var _Form = _interopRequireDefault(require("./Form"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from 'prop-types';
//import Wallpaper from './Wallpaper';
const LoginScreen = () => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_Logo.default, null), /*#__PURE__*/_react.default.createElement(_Form.default, null));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    //width: null,
    //height: null,
    resizeMode: 'cover',
    backgroundColor: 'white'
  }
});

var _default = LoginScreen;
exports.default = _default;
//# sourceMappingURL=LoginScreen.js.map