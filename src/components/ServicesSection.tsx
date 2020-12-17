import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
var servSectionData = {};


/* type HeaderProps = {
    menu: [{ name: String, component: Function},
    ]
} */

const ServicesSection = (props: any) => { 
    const [servSection, setservSection] = useState("");

    useEffect(() => {
        const ServicesSection = {
            servSection: '',
    }

    ServicesSection["servSection"] = servSection;
    });


    return (
        <View >
            <Text>TODO ServicesSection </Text>
            <FloatingLabelInput
                value={servSection}
                title='ServicesSection'
                onChangeText={(text: any) => {
                    setservSection(text);
                    props.parentUser(servSectionData);
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