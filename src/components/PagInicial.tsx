import React from 'react';
import {
    View,
    Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PagInicial = () => {

    const navigation = useNavigation();
    const navigationHandler = () => {
        navigation.goBack()
    }
    return (
        <View>

            <text  >Bem-vindo, Hermes Maurício</text>
            <br>
            </br>
            <text>Faça a gestão das suas informações, da privacidade e da segurança para utilizar os serviços do Sistema da forma mais adequada para si</text>

            <Button title='Voltar'
                onPress={() => { navigationHandler() }} //PAGES.REGISTO_ARTISTICO
                />
                {/*
            <TouchableOpacity onPress={handleBackButtonClick}>
                {/*<Icons name={'arrow-back'} size={30} color='#fff' style={{ marginLeft: '3%' }} />
            </TouchableOpacity>*/}

        </View>
    );
}


export default PagInicial;