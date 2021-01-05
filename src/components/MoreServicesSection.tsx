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
          < h5>Lobira Duno</h5>
            <Text>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua</Text>
            <h5>Read More</h5>
            < h5>Limere Radses</h5>
            <Text>Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.</Text>
            <Text> Read More</Text>
            <h5> Nive Lodo</h5>
            <Text>Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.</Text>
            <h5> Pale Treda </h5>
            <Text>Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem</Text>
            <h5> Read More </h5>
        </View>
    );
}

/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
export default MoreServicesSection;