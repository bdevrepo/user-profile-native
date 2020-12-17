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
            <Text>TODO FeaturesSection </Text>
            <FloatingLabelInput
                value={featSection}
                title='Features Section'
                onChangeText={(text: any) => {
                    setFeatSection(text);
                    props.parentUser(featSectionData);
                }}
            />
        </View>
    );
}

/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
export default FeaturesSection;