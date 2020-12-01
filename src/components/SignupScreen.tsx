import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Button
} from 'react-native';
import GlobalStyles from '../assets/style/GlobalStyles';
import FloatingLabelInput from './FloatingLabelInput';
import { CUSTOMON } from '../store/constants';

 type PropsType = {
  userNameLabel: string,
  passwordLabel: string,
  handleUsernaChange:Function,
  handlePasswordChange:Function,
  createAccountLabel:string,
  handleCreateAccountButton:Function,
  alreadyHasAccountLabel:string,
  alreadyHasAccount:Function
} 

const SignupScreen = ({
  userNameLabel,
  passwordLabel,
  handleUsernaChange,
  handlePasswordChange,
  createAccountLabel,
  handleCreateAccountButton,
  alreadyHasAccountLabel,
  alreadyHasAccount}:PropsType) => {
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
            title={createAccountLabel}
            onPress={() => handleCreateAccountButton}
          />
        </View>

        <TouchableOpacity 
        onPress={() => alreadyHasAccount}
        >
        <Text >{alreadyHasAccountLabel}</Text>
        </TouchableOpacity>
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

SignupScreen.defaultProps = {
  userNameLabel: 'Username',
  passwordLabel: 'Password',
  createAccountLabel:'Create account',
  alreadyHasAccountLabel:'Already have account?',
} 
export default SignupScreen;