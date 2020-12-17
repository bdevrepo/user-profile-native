import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
var moreServsecData = {};

/* type HeaderProps = {
    menu: [{ name: String, component: Function},
    ]
} */

const MoreServicesSection = (props: any) => {
    const [moreServ, setMoreServ] = useState(""); 

    useEffect(() => {
        const MoreServicesSection = {
            moreServ: '',
    }

    MoreServicesSection["moreServ"] = moreServ;
    });

    return (
        <View >
            <Text>TODO MoreServicesSection </Text>
            <FloatingLabelInput
                value={moreServ}
                title='More Services Section'
                onChangeText={(text: any) => {
                    setMoreServ(text);
                    props.parentUser(moreServsecData);
                }}
            />
        </View>
    );
}

/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
export default MoreServicesSection;