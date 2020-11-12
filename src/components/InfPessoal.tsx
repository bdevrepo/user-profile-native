import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';



const InfPessoal = () => {

    const [nameReq, setNameReq] = useState('');
   


    return (
        <View>

            <Text style={styles.titleText}>Informações Pessoais</Text>
            
            <TextInput
                placeholder='Perfil'
                /* style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} */
                onChangeText={text => setNameReq(text)}
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