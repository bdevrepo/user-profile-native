import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavProfile from '../src/components/NavProfile';
import AccountDashboard from './pages/AccountDashboard';

function Logout() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Logout</Text>
    </View>
  );
}
const Stack = createStackNavigator();

const Routes = () =>  (<View>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="App">
            <Stack.Screen name="App" component={NavProfile} />
            <Stack.Screen name="AccoundDashboard" component={AccountDashboard} />
            <Stack.Screen name="Logout" component={Logout} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );

export default Routes;

