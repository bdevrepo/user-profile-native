/*import * as React from 'react';
import {
  NavProfile,
  AccountDashboard,
  SignupScreen
} from '@bdevrepo/user-profile-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

function Profile() {
  return (
    <NavProfile accountPage='AccountDashboard' logoutPage='Logout' />
  );
}

function AccountDash() {
  const callBackAllData = (data: any) => {
    console.log('teste', data);
  }
  return (
    <AccountDashboard parentDash={callBackAllData.bind} />
  );
}

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen name="Login" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="App" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Logout" component={NavProfile} options={{ headerShown: false }} />
        <Stack.Screen name="AccountDashboard" component={AccountDash} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App; */