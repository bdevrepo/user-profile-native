import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NavProfile from './components/NavProfile';
import PagInicial from './components/PagInicial';
import InfPessoal from './components/InfPessoal';
//import { PAGES } from './store/constants';


import AccountDashboard from './pages/AccountDashboard';

function Logout() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Logout</Text>
    </View>
  );
}
const Stack = createStackNavigator();

const Routes = () =>  (
          <Stack.Navigator initialRouteName="App">
            <Stack.Screen name="App" component={NavProfile} options={{headerShown: false}}/>
            <Stack.Screen name="AccountDashboard" component={AccountDashboard} options={{headerShown: false}}/>
            <Stack.Screen name="Logout" component={Logout} options={{headerShown: false}}/>
            <Stack.Screen name="PagInicial" component={PagInicial} options={{headerShown: false}}/>
            <Stack.Screen name="InfPessoal" component={InfPessoal} options={{headerShown: false}}/>

          </Stack.Navigator>
    );

export default Routes;

