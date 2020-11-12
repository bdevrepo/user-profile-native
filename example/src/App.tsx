import * as React from 'react';
//import { View } from 'react-native';
import { NavProfile,AccountDashboard,PagInicial,InfPessoal } from '@bdevrepo/user-profile-native';

//import PagInicial from './components/PagInicial;
//import InfPessoal from './components/InfPessoal';

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
      <Stack.Screen name="PagInicial" component={PagInicial} options={{ headerShown: false }} />
      <Stack.Screen name="InfPessoal" component={InfPessoal} options={{ headerShown: false }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
