"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _native = require("@react-navigation/native");

var _stack = require("@react-navigation/stack");

var _NavProfile = _interopRequireDefault(require("../src/components/NavProfile"));

var _AccountDashboard = _interopRequireDefault(require("./pages/AccountDashboard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Logout() {
  return /*#__PURE__*/React.createElement(_reactNative.View, {
    style: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(_reactNative.Text, null, "Logout"));
}

const Stack = (0, _stack.createStackNavigator)();

const Routes = () => {
  return /*#__PURE__*/React.createElement(_reactNative.View, null, /*#__PURE__*/React.createElement(_native.NavigationContainer, null, /*#__PURE__*/React.createElement(Stack.Navigator, {
    initialRouteName: "App"
  }, /*#__PURE__*/React.createElement(Stack.Screen, {
    name: "App",
    component: _NavProfile.default
  }), /*#__PURE__*/React.createElement(Stack.Screen, {
    name: "AccoundDashboard",
    component: _AccountDashboard.default
  }), /*#__PURE__*/React.createElement(Stack.Screen, {
    name: "Logout",
    component: Logout
  }))));
};

var _default = Routes;
exports.default = _default;
//# sourceMappingURL=routes.js.map