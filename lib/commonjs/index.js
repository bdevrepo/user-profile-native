"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _routes = _interopRequireDefault(require("./routes"));

var _native = require("@react-navigation/native");

require("react-native-gesture-handler");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Profile extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement(_native.NavigationContainer, {
      independent: true
    }, /*#__PURE__*/_react.default.createElement(_routes.default, null));
  }

}

exports.default = Profile;
//# sourceMappingURL=index.js.map