"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _User = _interopRequireDefault(require("../components/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allData = {
  user: null
};

const AccountDashboard = props => {
  const callBackUser = data => {
    //console.log('teste', data);
    allData["user"] = data;
  };

  const submitHandler = () => {
    props.parentDash(allData);
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      backgroundColor: "white"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_User.default, {
    parentUser: callBackUser.bind
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Button, {
    title: "Gravar",
    onPress: submitHandler
  }, "Gravar"));
};

var _default = AccountDashboard;
exports.default = _default;
//# sourceMappingURL=AccountDashboard.js.map