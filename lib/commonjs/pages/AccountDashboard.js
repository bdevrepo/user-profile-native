"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _User = _interopRequireDefault(require("../components/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const AccountDashboard = () => {
  const submitHandler = () => {
    console.log('teste');
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Identifica\xE7\xE3o Requerente"), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_User.default
  /* parentReq={this.callBackReq.bind(this)} */
  , null)), /*#__PURE__*/_react.default.createElement(_reactNative.Button, {
    title: "Gravar",
    onPress: submitHandler
  }, "Gravar"));
};

var _default = AccountDashboard;
exports.default = _default;
//# sourceMappingURL=AccountDashboard.js.map