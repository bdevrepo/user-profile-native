import * as React from 'react';
//import { View } from 'react-native';
import { NavProfile,AccountDashboard } from '@bdevrepo/user-profile-native';
//import Dashboard from './DashboardCard';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

function AccountDash () {
  return (
    <NavProfile accountPage='AccountDashboard'logoutPage='Logout'/>
  );
}
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="App">
      <Stack.Screen name="App" component={AccountDash} options={{ headerShown: false }} />
      <Stack.Screen name="Logout" component={NavProfile} options={{ headerShown: false }} />
      <Stack.Screen name="AccountDashboard" component={AccountDashboard} options={{ headerShown: false }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
