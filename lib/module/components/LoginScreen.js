import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Button } from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
import GlobalStyles from './../assets/style/GlobalStyles';
import { CUSTOMON } from './../store/constants';

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
  return /*#__PURE__*/React.createElement(ScrollView, {
    keyboardShouldPersistTaps: "handled",
    contentContainerStyle: styles.container
  }, /*#__PURE__*/React.createElement(FloatingLabelInput, {
    title: userNameLabel,
    value: username //blurOnSubmit={false}
    //maxLength={100}
    ,
    onChangeText: value => handleUsernameChange(value)
  }), /*#__PURE__*/React.createElement(FloatingLabelInput, {
    title: passwordLabel,
    value: password //blurOnSubmit={false}
    //maxLength={100}
    ,
    onChangeText: value => handlePasswordChange(value)
  }), /*#__PURE__*/React.createElement(View, {
    style: [GlobalStyles.viewButton, {
      width: 350
    }]
  }, /*#__PURE__*/React.createElement(Button, {
    color: CUSTOMON.COLOR,
    title: loginButtonTitle,
    onPress: () => handleLoginButton
  })), /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: () => handleForgotPassword
  }, /*#__PURE__*/React.createElement(Text, null, forgotPasswordLabel)), /*#__PURE__*/React.createElement(View, {
    style: [GlobalStyles.viewButton, {
      width: 350
    }]
  }, /*#__PURE__*/React.createElement(Button, {
    color: CUSTOMON.COLOR,
    title: createAccountLabel,
    onPress: () => handleCreateAccountButton
  })));
};

const styles = StyleSheet.create({
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
export default LoginScreen;
//# sourceMappingURL=LoginScreen.js.map