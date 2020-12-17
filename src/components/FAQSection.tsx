import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
var faqSectionData = {};
 


/* type HeaderProps = {
    menu: [{ name: String, component: Function},
    ]
} */

const FAQSection = (props: any) => {
    const [faqSection, setFaqSection] = useState("");

    useEffect(() => {
        const FAQSection = {
            faqSection: '',
    }

    FAQSection["faqSection"] = faqSection;
    });

    return (
        <View >
            <Text>TODO FAQSection </Text>
            <FloatingLabelInput
                value={faqSection}
                title='FAQ Section'
                onChangeText={(text: any) => {
                    setFaqSection(text);
                    props.parentUser(faqSectionData);
                }}
            />
        </View>
    );
}

/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
export default FAQSection;