import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

type HeaderProps = {
    menu: [{ name: String, component: Function },
    ]
}

const Home = () => {
    return (<Text>Home!</Text>);
}
const Header = ({ menu }: HeaderProps) => {
    const Stack = createStackNavigator();
    //const navigation = useNavigation();
    /* const navigationHandler = () => {
        navigation.goBack()} */

    /* const dynamicFunction = () => {
        return React.createElement(type, key, reactNode)
    } */
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                {menu.map((m: any) => {
                    return <Stack.Screen name={m.name} component={m.component} options={{ headerShown: false }} />
                })}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
}
export default Header;