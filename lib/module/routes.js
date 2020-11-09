import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavProfile from '../src/components/NavProfile';
import AccountDashboard from './pages/AccountDashboard';

function Logout() {
  return /*#__PURE__*/React.createElement(View, {
    style: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Text, null, "Logout"));
}

const Stack = createStackNavigator();

const Routes = () => {
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(NavigationContainer, null, /*#__PURE__*/React.createElement(Stack.Navigator, {
    initialRouteName: "App"
  }, /*#__PURE__*/React.createElement(Stack.Screen, {
    name: "App",
    component: NavProfile
  }), /*#__PURE__*/React.createElement(Stack.Screen, {
    name: "AccoundDashboard",
    component: AccountDashboard
  }), /*#__PURE__*/React.createElement(Stack.Screen, {
    name: "Logout",
    component: Logout
  }))));
};

export default Routes;
//# sourceMappingURL=routes.js.map