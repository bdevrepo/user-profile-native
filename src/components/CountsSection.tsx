import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
var countsSectionData = {};


/* type HeaderProps = {
    menu: [{ name: String, component: Function},
    ]
} */

const CountsSection = (props: any) => {
    const [countsSection, setCountsSection] = useState("");

    useEffect(() => {
        const CountsSection = {
            countsSection: '',
    }

    CountsSection["countsSection"] = countsSection;
    });


    return (
        <View >
            <h2>CountsSection  </h2>
            <Text> <strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</Text>
            <Text> <strong>Projects</strong>  adipisci atque cum quia aspernatur totam laudantium et quia dere tan.</Text>
            <Text> <strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel.</Text>
            <Text> <strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der.</Text>

        
        </View>
    );
}

/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
export default CountsSection;