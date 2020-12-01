import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Button
} from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
import GlobalStyles from './../assets/style/GlobalStyles';import { CUSTOMON } from './../store/constants';

 type PropsType = {
  userNameLabel: string,
  passwordLabel: string,
  handleUsernaChange:Function,
  handlePasswordChange:Function,
  loginButtonTitle:string,
  handleLoginButton:Function,
  createAccountLabel:string,
  handleCreateAccountButton:Function,
  forgotPasswordLabel:string,
  handleForgotPassword:Function
} 

const LoginScreen = ({userNameLabel,
  passwordLabel,
  handleUsernaChange,
  handlePasswordChange,
  loginButtonTitle,
  handleLoginButton,
  createAccountLabel,
  handleCreateAccountButton,
  forgotPasswordLabel,
  handleForgotPassword}:PropsType) => {
 // const [username, setUsername] = useState('');
 // const [password, setPassword] = useState('');
 const username = '';
 const password = '';
  return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}
      >
        <FloatingLabelInput
          title={userNameLabel}
          value={username}
          //blurOnSubmit={false}
          //maxLength={100}
          onChangeText={(value: any) => handleUsernaChange(value)}
        />

        <FloatingLabelInput
          title={passwordLabel}
          value={password}
          //blurOnSubmit={false}
          //maxLength={100}
          onChangeText={(value: any) => handlePasswordChange(value)}
        />
        <View style={[GlobalStyles.viewButton, { width: 350 }]}>
          <Button
            color={CUSTOMON.COLOR}
            title={loginButtonTitle}
            onPress={() => handleLoginButton}
          />
        </View>
        <TouchableOpacity 
        onPress={() => handleForgotPassword}
        >
        <Text >{forgotPasswordLabel}</Text>
        </TouchableOpacity>

        <View style={[GlobalStyles.viewButton, { width: 350 }]}>
          <Button
            color={CUSTOMON.COLOR}
            title={createAccountLabel}
            onPress={() => handleCreateAccountButton}
          />
        </View>
      </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    resizeMode: 'cover',
    backgroundColor: 'white',
  },

});

LoginScreen.defaultProps = {
  userNameLabel: 'Username',
  passwordLabel: 'Password',
  loginButtonTitle:'Login',
  createAccountLabel:'Create account',
  forgotPasswordLabel:'Forgot Password?',
} 
export default LoginScreen;