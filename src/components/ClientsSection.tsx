import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
var clienteSecData = {};


/* type HeaderProps = {
    menu: [{ name: String, component: Function},
    ]
} */

const clientimage1 = '/Cliente.png;base64';

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

            <Image source={{ uri: clientimage1 }} style={styles.image} />

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
export default ClientsSection;