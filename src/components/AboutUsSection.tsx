import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
var idetReqData = {};


/* type AboutUsSectionprops = {
    menu: [{ name: String, component: Function},
    ]
} */

const AboutUsSection = (props: any) => {
    const [nameReq, setNameReq] = useState("");

    useEffect(() => {
        const AboutUsSection = {
            nameReq: '',
    }

    AboutUsSection["nameReq"] = nameReq;
    });

    return (
        <View >
            <Text>TODO AboutUsSection </Text>
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

/* AboutUsSection.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
export default AboutUsSection;