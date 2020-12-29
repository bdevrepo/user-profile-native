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
            <Text>TODO TeamSection </Text>
            <FloatingLabelInput
                value={teamSec}
                title='Team Section'
                onChangeText={(text: any) => {
                    setTeamSec(text);
                    props.parentUser(teamSecData);
                }}
            />
        </View>
    );
}

/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
export default TeamSection;