"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _User = _interopRequireDefault(require("./User"));

var _native = require("@react-navigation/native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const InfPessoal = () => {
  const navigation = (0, _native.useNavigation)();

  const navigationHandler = () => {
    navigation.goBack();
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_User.default, null), /*#__PURE__*/_react.default.createElement(_reactNative.Button, {
    title: "Voltar",
    onPress: () => {
      navigationHandler();
    }
  }));
};

var _default = InfPessoal;
exports.default = _default;
//# sourceMappingURL=InfPessoal.js.map