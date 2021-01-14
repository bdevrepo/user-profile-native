import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
var featSectionData = {};


/* type HeaderProps = {
    menu: [{ name: String, component: Function},
    ]
} */

const FeaturesSection = (props: any) => {
    const [featSection, setFeatSection] = useState(""); 

    useEffect(() => {
        const FeaturesSection = {
            featSection: '',
    }

    FeaturesSection["featSection"] = featSection;
    });
    return (
        <View >
            <h2>Features</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
            <Text> <strong>Lorem Ipsum</strong></Text>
            <h3>Dolor Sitema</h3>
            <h3>Sed perspiciatis</h3>
            <h3>Magni Dolores</h3>
            <h3>Nemo Enim</h3>
            <h3>Eiusmod Tempor</h3>
            <h3>Pira Neve</h3>
            <h3>Dirada Pack</h3>
            <h3>Moton Ideal </h3>
            <h3>Verdo Park</h3>
            <h3> Flavor Nivelanda</h3>

        </View>
    );
}

/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
export default FeaturesSection;