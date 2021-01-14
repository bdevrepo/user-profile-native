import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
var teamSecData = {}; 

/* type HeaderProps = {
    menu: [{ name: String, component: Function},
    ]
} */
const TeamSection = (props: any) => {
    const [teamSec, setTeamSec] = useState("");

    useEffect(() => {
        const TeamSection = {
            teamSec: '',
    }

    TeamSection["teamSec"] = teamSec;
    });

    return (
        <View >
            <h2>Team</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
            <h4>Walter White</h4>
            <Text>Chief Executive Officer</Text>
            <h4>Sarah Jhonson</h4>
            <Text>Product Manager</Text>
            <h4>William Anderson</h4>
            <Text>CTO</Text>
            <h4>Amanda Jepson</h4>
            <Text>Accountant</Text>

        </View>
    );
}

/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
export default TeamSection;