import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
var clienteSecData = {}; 


/* type HeaderProps = {
    menu: [{ name: String, component: Function},
    ]
} */


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
            <FloatingLabelInput
                value={clienteSec}
                title='ClienteSection'
                onChangeText={(text: any) => {
                    setClienteSec(text);
                    props.parentUser(clienteSecData);
                }}
            />
        </View>
    );
}

/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
export default ClientsSection;