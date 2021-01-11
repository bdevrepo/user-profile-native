import React from 'react';
import { View, 
    Text, 
    Image, 
    TouchableHighlight,
    StyleSheet, 
    Alert } from 'react-native';
import {CUSTOMON} from './../store/constants';

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
        console.log('imgSource: ', imgSource);

    return (
        <View style={styles.container}>
            <View >
                <Text>{title}</Text>
                <Text>{subtitle}</Text>
                <TouchableHighlight
                    onPress={buttonPressFuncion()}
                >
                    <Text>{buttonTitle}</Text>
                </TouchableHighlight>
            </View>
            <View>
             <Image style={{width:200, height:200}}  source={{uri:imgSource}} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
       // justifyContent: "center",
        //alignItems: "center",
        marginBottom: 10,
        backgroundColor:'white'
    },
});

HeroSection.defaultProps = {
    title: 'Grow your business',
    subtitle: 'We are team of talanted',
    buttonTitle: 'Get Started',
    buttonPressFuncion: function () { () => Alert },
    imgSource:CUSTOMON.IMAGE_SERVER + 'image/BWalletH.svg'
}
export default HeroSection;