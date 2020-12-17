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
            <Text>TODO CountsSection </Text>
            <FloatingLabelInput
                value={countsSection}
                title='CountSection'
                onChangeText={(text: any) => {
                    setCountsSection(text);
                    props.parentUser(countsSectionData);
                }}
            />
        </View>
    );
}

/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
export default CountsSection;