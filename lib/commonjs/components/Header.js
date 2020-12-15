"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _native = require("@react-navigation/native");

var _stack = require("@react-navigation/stack");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { useNavigation } from '@react-navigation/native';
const Home = () => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Home!");
};

const Header = ({
  menu
}) => {
  const Stack = (0, _stack.createStackNavigator)(); //const navigation = useNavigation();

  /* const navigationHandler = () => {
      navigation.goBack()} */

  /* const dynamicFunction = () => {
      return React.createElement(type, key, reactNode)
  } */

  return /*#__PURE__*/_react.default.createElement(_native.NavigationContainer, {
    independent: true
  }, /*#__PURE__*/_react.default.createElement(Stack.Navigator, null, menu.map(m => {
    return /*#__PURE__*/_react.default.createElement(Stack.Screen, {
      name: m.name,
      component: m.component,
      options: {
        headerShown: false
      }
    });
  })));
};

Header.defaultProps = {
  menu: [{
    name: 'Angola',
    component: Home()
  }]
};
var _default = Header;
exports.default = _default;
//# sourceMappingURL=Header.js.map