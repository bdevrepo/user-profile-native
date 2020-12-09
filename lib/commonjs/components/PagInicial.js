"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _native = require("@react-navigation/native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PagInicial = () => {
  const navigation = (0, _native.useNavigation)();

  const navigationHandler = () => {
    navigation.goBack();
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement("text", null, "Bem-vindo, Hermes Maur\xEDcio"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("text", null, "Fa\xE7a a gest\xE3o das suas informa\xE7\xF5es, da privacidade e da seguran\xE7a para utilizar os servi\xE7os do Sistema da forma mais adequada para si"), /*#__PURE__*/_react.default.createElement(_reactNative.Button, {
    title: "Voltar",
    onPress: () => {
      navigationHandler();
    } //PAGES.REGISTO_ARTISTICO

  }));
};

var _default = PagInicial;
exports.default = _default;
//# sourceMappingURL=PagInicial.js.map