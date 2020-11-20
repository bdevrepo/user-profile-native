import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NavProfile from './components/NavProfile';
import PagInicial from './components/PagInicial';
import InfPessoal from './components/InfPessoal'; //import { PAGES } from './store/constants';

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

const Routes = () => /*#__PURE__*/React.createElement(Stack.Navigator, {
  initialRouteName: "App"
}, /*#__PURE__*/React.createElement(Stack.Screen, {
  name: "App",
  component: NavProfile,
  options: {
    headerShown: false
  }
}), /*#__PURE__*/React.createElement(Stack.Screen, {
  name: "AccountDashboard",
  component: AccountDashboard,
  options: {
    headerShown: false
  }
}), /*#__PURE__*/React.createElement(Stack.Screen, {
  name: "Logout",
  component: Logout,
  options: {
    headerShown: false
  }
}), /*#__PURE__*/React.createElement(Stack.Screen, {
  name: "PagInicial",
  component: PagInicial,
  options: {
    headerShown: false
  }
}), /*#__PURE__*/React.createElement(Stack.Screen, {
  name: "InfPessoal",
  component: InfPessoal,
  options: {
    headerShown: false
  }
}));

export default Routes;
//# sourceMappingURL=routes.js.map