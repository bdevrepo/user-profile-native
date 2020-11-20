import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
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
const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default InfPessoal;