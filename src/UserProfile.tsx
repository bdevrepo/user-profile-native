import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const userDetail = {
    name: "Angelo Correia",
    email: "angelocorreia27@hotmail.com",
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
}

const Separator = () => (
    <View style={styles.separator} />
);

/*
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
const UserProfile = () => {
    const onPressLearnMore = () => {
        console.log('teste');
    }
    return (
        <View>
            {/* Standard Avatar with accessory - Change photo...*/}
            <View style={styles.container}>
                <Image
                    style={styles.avatar}
                    source={{ uri: userDetail.avatar_url }}
                />
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>{userDetail.name}</Text>
                <Text style={{ marginBottom: 15 }}>{userDetail.email}</Text>
                <View style={styles.container}>
                    <Button
                        onPress={onPressLearnMore}
                        title="Gerir conta" />
                </View>
            </View>
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
            <Separator />
            <View style={styles.container}>
                <Button
                    onPress={onPressLearnMore}
                    title="Sair"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        marginBottom: 15
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
export default UserProfile