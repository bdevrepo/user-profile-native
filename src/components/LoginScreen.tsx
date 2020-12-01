import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Button
} from 'react-native';
import GlobalStyles from './../assets/style/GlobalStyles';
import { CUSTOMON } from './../store/constants';
import { FloatingLabelInput, setGlobalStyles } from 'react-native-floating-label-input';

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

  return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}
      >
        <FloatingLabelInput
          label={userNameLabel}
         // value={username}
          blurOnSubmit={false}
          maxLength={100}
          onChangeText={(value: any) => handleUsernaChange(value)}
        />

        <FloatingLabelInput
          label={passwordLabel}
          //value={password}
          blurOnSubmit={false}
          maxLength={100}
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

/* setGlobalStyles.containerStyles = {
  backgroundColor: '#eeddee',
  // any styles you want to generalize to your input container
}; */
setGlobalStyles.labelStyles = {
  color: 'black',
  // any styles you want to generalize to your floating label
};

setGlobalStyles.inputStyles = {
  // any styles you want to generalize to your input
  color: 'black',
  borderRadius: 5,
  borderWidth: 1,
  minHeight: 40,
  margin: 8,
  width: 350,
  padding: 4
};

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