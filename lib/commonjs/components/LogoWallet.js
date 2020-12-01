"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from 'prop-types';
//import logoImg from '../assets/img/BWalletV.svg';
const LogoWallet = () => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: require('../assets/img/BWalletH.svg'),
    style: styles.image
  }));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    //flex: 3,
    alignItems: 'center',
    justifyContent: 'center' //backgroundColor:'#79a5f2'

  },
  image: {
    width: 100,
    height: 30,
    marginTop: 40
  }
});

var _default = LogoWallet;
exports.default = _default;
//# sourceMappingURL=LogoWallet.js.map