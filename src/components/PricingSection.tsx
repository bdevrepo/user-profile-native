import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
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
            <h2>Pricing</h2>
            <p>Sit sint consectetur velit nemo qui impedit suscipit alias ea</p>
            <h3>Free</h3>
            <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li >Pharetra massa</li>
                <li >Massa ultricies mi</li>
            </ul>
            <h3>Business</h3>
            <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li >Massa ultricies mi</li>
            </ul>
            <h3>Developer</h3>
            <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
            </ul>

        </View>
    );
}

/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
export default PricingSection;