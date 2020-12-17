import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
var idetReqData = {};

/* type HeaderProps = {
    menu: [{ name: String, component: Function},
    ]
} */

const ServicesSection = (props: any) => {
    const [nameReq, setNameReq] = useState("");

    useEffect(() => {
        const ServicesSection = {
            nameReq: '',
    }

    ServicesSection["nameReq"] = nameReq;
    });


    return (
        <View >
            <Text>TODO ServicesSection </Text>
            <FloatingLabelInput
                value={nameReq}
                title='Nome do requerente'
                onChangeText={(text: any) => {
                    setNameReq(text);
                    props.parentUser(idetReqData);
                }}
            />
        </View>
    );
}

/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
export default ServicesSection;