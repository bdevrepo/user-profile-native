import * as React from 'react';
//import { Text } from 'react-native';
import {
  NavProfile,
  AccountDashboard,
  SignupScreen,
  LandingPage
  // Deve ficar @bdevrepo/user-profile-native. É o mesmo 
  // name do package.json
} from '@bdevrepo/user-profile-native'; //@bdevrepo
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Profile() {
  return (
    <NavProfile accountPage='AccountDashboard' logoutPage='Logout' />
  );
}
function LandingPageScreem() {
  //const Stack = createStackNavigator();
  //const Tab = createBottomTabNavigator();

  /* const Home = () => {
    return (<Text>Home!</Text>);
  } */
  //Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    isExpanded: false,
    menu: 'home',
    screen:'AccountDashboard',
     submenu: [], 
  },
  {
    isExpanded: false,
    menu: 'about',
    submenu: [
      {id: 4, val: 'Sub Cat 4', screen:'AccountDashboard'},
      {id: 5, val: 'Sub Cat 5', screen:'App'},
    ],
  },
  {
    isExpanded: false,
    menu: 'services',
    submenu: [
      {id: 7, val: 'Sub Cat 7', screen:'App'},
      {id: 9, val: 'Sub Cat 9', screen:'App'},
    ],
  },
  {
    isExpanded: false,
    menu: 'portfolio',
    submenu: [
      {id: 10, val: 'Sub Cat 10', screen:'App'},
      {id: 12, val: 'Sub Cat 2', screen:'App'},
    ],
  },
  {
    isExpanded: false,
    menu: 'team',
    submenu: [
      {id: 13, val: 'Sub Cat 13', screen:'App'},
      {id: 15, val: 'Sub Cat 5', screen:'App'},
    ],
  },
  {
    isExpanded: false,
    menu: 'contact',
    submenu: [
      {id: 17, val: 'Sub Cat 17', screen:'App'},
      {id: 18, val: 'Sub Cat 8', screen:'App'},
    ],
  },
  
];
  return (
    <LandingPage menu={CONTENT} />
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
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="Login" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="App" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Logout" component={NavProfile} options={{ headerShown: false }} />
        <Stack.Screen name="AccountDashboard" component={AccountDash} options={{ headerShown: false }} />
        <Stack.Screen name="LandingPage" component={LandingPageScreem} options={{ headerShown: false }} />

      </Stack.Navigator>


    </NavigationContainer>
  );
}
export default App; 