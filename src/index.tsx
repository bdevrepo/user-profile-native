import React from 'react';
import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';

export default class Profile extends React.Component {
    render(){
        return (
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        )
    }
    
}
