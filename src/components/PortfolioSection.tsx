import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
var clienteSecData = {};

/* type HeaderProps = {
    menu: [{ name: String, component: Function},
    ]
} */
const PortfolioSection = (props: any) => {
    const [portfSec, setPortofSect] = useState("");

    

    useEffect(() => {
        const PortfolioSection = {
            portfSec: '',
    }

    PortfolioSection["portfSec"] = portfSec;
    });

    return (
        <View >
            <Text>TODO PortfolioSection </Text>
            <FloatingLabelInput
                value={portfSec}
                title='Portofolio Section'
                onChangeText={(text: any) => {
                    setPortofSect(text);
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
export default PortfolioSection;