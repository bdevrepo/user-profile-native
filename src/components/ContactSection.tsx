import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
var contactSectionData = {};


/* type HeaderProps = {
    menu: [{ name: String, component: Function},
    ]
} */

const ContactSection = (props: any) => {
    const [contactSection, setContactSection] = useState("");

    useEffect(() => {
        const ContactSection = {
            contactSection: '',
    }

    ContactSection["contactSection"] = contactSection;
    });


    return (
        <View >
            <Text>TODO ContactSection </Text>
            <FloatingLabelInput
                value={contactSection}
                title='ContactSection'
                onChangeText={(text: any) => {
                    setContactSection(text);
                    props.parentUser(contactSectionData);
                }}
            />
        </View>
    );
}

/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
export default ContactSection;