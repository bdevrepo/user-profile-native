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
            <h2>Services</h2>
            <Text>Magnam dolores commodi suscipit eius consequatur ex aliquid fug</Text>
            <h4>Lorem Ipsum</h4>
            <Text>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi </Text>
            <h4>Sed ut perspiciatis</h4>
            <Text>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore </Text>
            <h4>Magni Dolore</h4>
            <Text>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia </Text>
            <h4>Nemo Enim</h4>
            <Text>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis </Text>
            
        </View>
        
    );
}

/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
export default ServicesSection;