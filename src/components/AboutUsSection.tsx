import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
var aboutUsData = {};


/* type AboutUsSectionprops = {
    menu: [{ name: String, component: Function},
    ]
} */

const AboutUsSection = (props: any) => {
    const [aboutUs, setAboutUs] = useState("");

    useEffect(() => {
        const AboutUsSection = {
            aboutUs: '',
    }

    AboutUsSection["aboutUs"] = aboutUs;
    });

    return (
        <View >
            <Text>TODO AboutUsSection </Text>
            <FloatingLabelInput
                value={aboutUs}
                title='AboutUs'
                onChangeText={(text: any) => {
                    setAboutUs(text);
                    props.parentUser(aboutUsData);
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