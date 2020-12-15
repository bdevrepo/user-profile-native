"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _FloatingLabelInput = _interopRequireDefault(require("./FloatingLabelInput"));

var _GlobalStyles = _interopRequireDefault(require("./../assets/style/GlobalStyles"));

var _constants = require("./../store/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoginScreen = ({
  userNameLabel,
  passwordLabel,
  handleUsernameChange,
  handlePasswordChange,
  loginButtonTitle,
  handleLoginButton,
  createAccountLabel,
  handleCreateAccountButton,
  forgotPasswordLabel,
  handleForgotPassword
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
    onChangeText: value => handleUsernameChange(value)
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
    title: loginButtonTitle,
    onPress: () => handleLoginButton
  })), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: () => handleForgotPassword
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, forgotPasswordLabel)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_GlobalStyles.default.viewButton, {
      width: 350
    }]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Button, {
    color: _constants.CUSTOMON.COLOR,
    title: createAccountLabel,
    onPress: () => handleCreateAccountButton
  })));
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

LoginScreen.defaultProps = {
  userNameLabel: 'Username',
  passwordLabel: 'Password',
  loginButtonTitle: 'Login',
  createAccountLabel: 'Create account',
  forgotPasswordLabel: 'Forgot Password?'
};
var _default = LoginScreen;
exports.default = _default;
//# sourceMappingURL=LoginScreen.js.map