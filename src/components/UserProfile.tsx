import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Separator = () => (
    <View style={styles.separator} />
);

type GridProfileProps = {
    onPressFunction:Function,
    accountPage:String,
    logoutPage:String,
    userDetail: {
        name: "",
        email: "",
        avatar_url: ''
    }
}
const UserProfile = ({onPressFunction,accountPage,logoutPage,userDetail}:GridProfileProps) => {
    const navigation = useNavigation();
    const onPressGoToPage = (page:any) => {
        navigation.navigate(page)
        onPressFunction();
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
                        onPress={() => {onPressGoToPage(accountPage)}}
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
                    onPress={() => {onPressGoToPage(logoutPage)}}
                    title="Sair"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //borderWidth: 2,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        //padding: 20

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

UserProfile.defaultProps = {
    userDetail: {
        name: "Angelo Correia",
        email: "angelocorreia27@hotmail.com",
        avatar_url: 'data:image/png;base64,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'
    }
};
export default UserProfile