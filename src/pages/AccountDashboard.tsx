import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { PAGES } from '../store/constants';


const AccountDashboard = () => {
    const navigation = useNavigation();
    const navigationHandler =(page:any) => {
        navigation.navigate(page);
        console.log('teste');
    }
        return (
            <View>
                     <Button title='Página Inicial' 
                            onPress={() => { navigationHandler(PAGES.PAGINA_INICIAL) }} //PAGES.PAGINA_INICIAL
                        />
                          <Button title='Informações Pessoais' 
                            onPress={() => { navigationHandler(PAGES.INFORMACOES_PESSOAL) }} //INFORMAÇÕES_PESSOAL
                        />
                       
            </View>
        );
        
}

export default AccountDashboard;