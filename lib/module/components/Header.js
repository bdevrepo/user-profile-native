import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; //import { useNavigation } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const Home = () => {
  return /*#__PURE__*/React.createElement(Text, null, "Home!");
};

const Header = ({
  menu
}) => {
  const Stack = createStackNavigator(); //const navigation = useNavigation();

  /* const navigationHandler = () => {
      navigation.goBack()} */

  /* const dynamicFunction = () => {
      return React.createElement(type, key, reactNode)
  } */

  return /*#__PURE__*/React.createElement(NavigationContainer, {
    independent: true
  }, /*#__PURE__*/React.createElement(Stack.Navigator, null, menu.map(m => {
    return /*#__PURE__*/React.createElement(Stack.Screen, {
      name: m.name,
      component: m.component,
      options: {
        headerShown: false
      }
    });
  })));
};

Header.defaultProps = {
  menu: [{
    name: 'Angola',
    component: Home()
  }]
};
export default Header;
//# sourceMappingURL=Header.js.map