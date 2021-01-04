import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
import { CUSTOMON } from './../store/constants';

//var clienteSecData = {};


/* type HeaderProps = {
    menu: [{ name: String, component: Function},
    ]
} 

const imgSource = 'https://localhost:3443/image/more-services-1.jpg;base64';

const ClientsSection = (props: any) => {
    const [clienteSec, setClienteSec] = useState("");

    useEffect(() => {
        const ClientsSection = {
            clienteSec: '',
        }

        ClientsSection["clienteSec"] = clienteSec;
    });*/

    const path = require('path');
type ClientsSection = {
    imgSource1: string,
    imgSource2: string,
    imgSource3: string

}

const ClientsSection = ({ 
    imgSource1 ,imgSource2,imgSource3}: ClientsSection) => {
        console.log('imgSource: ', imgSource1);

    return (
        <View >
            <Text>TODO ClientsSection </Text>
            <Image style={styles.image} source={{ uri: imgSource1 }} />
            <Image style={styles.image} source={{ uri: imgSource2 }} />
            <Image style={styles.image} source={{ uri: imgSource3}} />

            {/*<Image source={{ uri: clientimage1 }} style={styles.image} />*/}
        </View>
    );
}
const styles = StyleSheet.create({

    image: {
        width: 200,
        height: 200,
        justifyContent: 'center',
    },
    /* Header.defaultProps = {
        menu: [{ name: 'Angola', component: Home() },
        ]
    } */
});

ClientsSection.defaultProps = {

    imgSource1: CUSTOMON.IMAGE_SERVER + 'image/more-services-1.jpg',
    imgSource2: CUSTOMON.IMAGE_SERVER + 'image/more-services-2.jpg',
    imgSource3: CUSTOMON.IMAGE_SERVER + 'image/more-services-3.jpg'

}
export default ClientsSection; 