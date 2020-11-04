import React from 'react';
import { TouchableHighlight, View, FlatList, Image, StyleSheet } from 'react-native';

const list = [
    {
        id: 1,
        appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    },
    {
        id: 2,
        appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    },
];
const GridRow = () => (
    <View style={styles.container}>
        <FlatList
            data={list}
            renderItem={({ item }) => (
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => console.log('Pressed!')}>
                    <View
                        style={styles.gridRow}>
                        <Image
                            style={styles.avatar}
                            source={{ uri: item.appLogo }}
                        />
                    </View>
                </TouchableHighlight>

            )}
            //Setting the number of column
            numColumns={2}
        //keyExtractor={(item, index) => index}
        />
    </View>
);

const Profile = () => {
    return (
        <View>
            <GridRow />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    gridRow: {
        flex: 1,
        flexDirection: 'column',
        margin: 15,
       // marginBottom: 15
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        marginBottom: 15
    },
    appTitle: {
        textAlign: "center",
        marginVertical: 5,
        fontSize: 20,
    },
});
export default Profile