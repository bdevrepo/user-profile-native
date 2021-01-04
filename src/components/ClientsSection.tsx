import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
import {CUSTOMON} from './../store/constants';

//var clienteSecData = {};


/* type HeaderProps = {
    menu: [{ name: String, component: Function},
    ]
} */

const imgSource = 'https://localhost:3443/image/more-services-1.jpg;base64';

const ClientsSection = (props: any) => {
    const [clienteSec, setClienteSec] = useState("");

    useEffect(() => {
        const ClientsSection = {
            clienteSec: '',
        }

        ClientsSection["clienteSec"] = clienteSec;
    });

    return (
        <View >
                        <Text>TODO ClientsSection </Text>

            {/*<Image source={{ uri: clientimage1 }} style={styles.image} />*/}
            <Image style={{width:10, height:10}}  source={{uri:imgSource}} />
      
         {/*   <FloatingLabelInput
                value={clienteSec}
                title='ClienteSection'
                onChangeText={(text: any) => {
                    setClienteSec(text);
                    props.parentUser(clienteSecData);
                }}
            />*/}
        </View>
    );
}
const styles = StyleSheet.create({

    image: {
        width: 20,
        height: 15,
        justifyContent: 'center',
    },
    /* Header.defaultProps = {
        menu: [{ name: 'Angola', component: Home() },
        ]
    } */
});

ClientsSection.defaultProps = {
    
    imgSource:CUSTOMON.IMAGE_SERVER + 'image/BWalletH.svg'
}
export default ClientsSection;