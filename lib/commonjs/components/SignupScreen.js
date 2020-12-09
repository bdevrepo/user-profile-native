"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _GlobalStyles = _interopRequireDefault(require("../assets/style/GlobalStyles"));

var _FloatingLabelInput = _interopRequireDefault(require("./FloatingLabelInput"));

var _constants = require("../store/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SignupScreen = ({
  userNameLabel,
  passwordLabel,
  handleUsernaChange,
  handlePasswordChange,
  createAccountLabel,
  handleCreateAccountButton,
  alreadyHasAccountLabel,
  alreadyHasAccount
}) => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const username = '';
  const password = '';
  return /*#__PURE__*/_react.default.createElement(_reactNative.ScrollView, {
    keyboardShouldPersistTaps: "handled",
    contentContainerStyle: styles.container
  }, /*#__PURE__*/_react.default.createElement(_FloatingLabelInput.default, {
    title: userNameLabel,
    value: username //blurOnSubmit={false}
    //maxLength={100}
    ,
    onChangeText: value => handleUsernaChange(value)
  }), /*#__PURE__*/_react.default.createElement(_FloatingLabelInput.default, {
    title: passwordLabel,
    value: password //blurOnSubmit={false}
    //maxLength={100}
    ,
    onChangeText: value => handlePasswordChange(value)
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_GlobalStyles.default.viewButton, {
      width: 350
    }]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Button, {
    color: _constants.CUSTOMON.COLOR,
    title: createAccountLabel,
    onPress: () => handleCreateAccountButton
  })), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: () => alreadyHasAccount
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, alreadyHasAccountLabel)));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    resizeMode: 'cover',
    backgroundColor: 'white'
  }
});

SignupScreen.defaultProps = {
  userNameLabel: 'Username',
  passwordLabel: 'Password',
  createAccountLabel: 'Create account',
  alreadyHasAccountLabel: 'Already have account?'
};
var _default = SignupScreen;
exports.default = _default;
//# sourceMappingURL=SignupScreen.js.map