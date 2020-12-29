import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
var pricingSecData = {};

/* type HeaderProps = {
    menu: [{ name: String, component: Function},
    ]
} */

const PricingSection = (props: any) => {
    const [pricingSeq, setPricingSeq] = useState("");

    useEffect(() => {
        const PricingSection = {
            pricingSeq: '',
    }

    PricingSection["pricingSeq"] = pricingSeq;
    });

    return (
        <View >
            <Text>TODO PricingSection </Text>
            <FloatingLabelInput
                value={pricingSeq}
                title=' Pricing Section'
                onChangeText={(text: any) => {
                    setPricingSeq(text);
                    props.parentUser(pricingSecData);
                }}
            />
        </View>
    );
}

/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
export default PricingSection;