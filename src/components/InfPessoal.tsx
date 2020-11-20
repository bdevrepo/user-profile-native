import React from 'react';
import {
    View,
    Button
} from 'react-native';
import User from './User';
import { useNavigation } from '@react-navigation/native';



const InfPessoal = () => {

    const navigation = useNavigation();
    const navigationHandler = () => {
        navigation.goBack()}


    return (
        <View>
           < User />
           <Button title='Voltar'
                onPress={() => { navigationHandler() }} 
                />
        </View>
    );
}
export default InfPessoal;