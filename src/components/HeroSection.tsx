import React from 'react';
import { View, Text, Image, TouchableHighlight, Alert } from 'react-native';
const path = require('path');
type HeroSectionProps = {
    title: string,
    subtitle: string,
    buttonTitle: string,
    buttonPressFuncion: Function,
    imgSource: string
}

const HeroSection = ({ title,
    subtitle,
    buttonTitle,
    imgSource,
    buttonPressFuncion }: HeroSectionProps) => {
        console.log('path: ', path);

    return (
        <View >
            <View >
                <Text>{title}</Text>
                <Text>{subtitle}</Text>
                <TouchableHighlight
                    onPress={buttonPressFuncion()}
                >
                    <Text>{buttonTitle}</Text>
                </TouchableHighlight>
            </View>
            <View><Image source={{uri:imgSource}} />
            </View>
        </View>
    );
}

HeroSection.defaultProps = {
    title: 'Grow your business',
    subtitle: 'We are team of talanted',
    buttonTitle: 'Get Started',
    buttonPressFuncion: function () { () => Alert },
    imgSource: 'https://localhost:19006/assets/img/BWalletH.svg'
}
export default HeroSection;