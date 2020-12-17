import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
var footerData = {};


/* type HeaderProps = {
    menu: [{ name: String, component: Function},
    ]
} */

const Footer = (props: any) => {
    const [footer, setFooter] = useState("");

    useEffect(() => {
        const Footer = {
            footer: '',
    }

    Footer["footer"] = footer;
    });
    return (
        <View >
            <Text>TODO Footer </Text>
            <FloatingLabelInput
                value={footer}
                title='Footer'
                onChangeText={(text: any) => {
                    setFooter(text);
                    props.parentUser(footerData);
                }}
            />
        </View>
    );
}

/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
export default Footer;