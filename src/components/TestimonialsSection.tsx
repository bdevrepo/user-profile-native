import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
var testiSectionData = {};


/* type HeaderProps = {
    menu: [{ name: String, component: Function},
    ]
} */
    
const TestimonialsSection = (props: any) => {
    const [testiSection, settestiSection] = useState("");

    useEffect(() => {
        const TestimonialsSection = {
            testiSection: '',
    }

    TestimonialsSection["testiSection"] = testiSection;
    });

    return (
        <View >
            <Text>TODO TestimonialsSection </Text>
            <FloatingLabelInput
                value={testiSection}
                title='Testimonial Section'
                onChangeText={(text: any) => {
                    settestiSection(text);
                    props.parentUser(testiSectionData);
                }}
            />
        </View>
    );
}

/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
export default TestimonialsSection;