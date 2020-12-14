import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, Button } from 'react-native';
import GlobalStyles from '../assets/style/GlobalStyles';
import FloatingLabelInput from './FloatingLabelInput';
import { CUSTOMON } from '../store/constants';

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
  return /*#__PURE__*/React.createElement(ScrollView, {
    keyboardShouldPersistTaps: "handled",
    contentContainerStyle: styles.container
  }, /*#__PURE__*/React.createElement(FloatingLabelInput, {
    title: userNameLabel,
    value: username //blurOnSubmit={false}
    //maxLength={100}
    ,
    onChangeText: value => handleUsernaChange(value)
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
    title: createAccountLabel,
    onPress: () => handleCreateAccountButton
  })), /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: () => alreadyHasAccount
  }, /*#__PURE__*/React.createElement(Text, null, alreadyHasAccountLabel)));
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
SignupScreen.defaultProps = {
  userNameLabel: 'Username',
  passwordLabel: 'Password',
  createAccountLabel: 'Create account',
  alreadyHasAccountLabel: 'Already have account?'
};
export default SignupScreen;
//# sourceMappingURL=SignupScreen.js.map