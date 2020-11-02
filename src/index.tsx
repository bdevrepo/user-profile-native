/* export default {
  multiply(a: number, b: number) {
    return Promise.resolve(a * b);
  },
};
 */

import React from 'react';
import { View,Text, Button } from 'react-native';
//import { Avatar } from "react-native-elements";
//import { ListItem } from 'react-native-elements';
//import { Text } from 'react-native-elements';
//import { Button } from 'react-native-elements';
//import { Divider } from 'react-native-elements';

const userDetail = {
    name: "Angelo Correia",
    email: "angelocorreia27@hotmail.com"
}
/* const avatar_url = 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg';
//const name = "teste";
//const role = "test role";

const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
]; */
const Profile = () => {
    const onPressLearnMore = () => {
      console.log('teste');
    }
    return (
        <View>
            {/* Standard Avatar with accessory - Change photo...*/}
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                {/* <Avatar
                    size="xlarge"
                    source={{
                        uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    }}
                >
                </Avatar> */}
                <Text >{userDetail.name}</Text>
                <Text >{userDetail.email}</Text>
                <Button
                onPress={onPressLearnMore}
                    title="Gerir conta"
                    //type="outline"
                />
            </View>
            {/* <Divider style={{ backgroundColor: 'blue' }} /> */}

            {/***List App wich user can use */}

            {/*
                list.map((l, i) => (
                    <ListItem key={i} bottomDivider>
                        <Avatar source={{ uri: l.avatar_url }} />
                        <ListItem.Content>
                            <ListItem.Title>{l.name}</ListItem.Title>
                            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))*/
            }
            <Button
            onPress={onPressLearnMore}
                    title="Sair"
                    //type="outline"
                />
        </View>
    )
}
export default Profile