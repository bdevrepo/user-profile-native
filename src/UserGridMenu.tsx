import React from 'react';
import { TouchableHighlight, Dimensions, View, FlatList, Text, Image, StyleSheet } from 'react-native';

const DeviceWidth = Dimensions.get('window').width;

const list = [
    {
        id: 1,
        name: 'Amy Farha',
        appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    },
    {
        id: 2,
        name: 'Chris Jackson',
        appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    },
    {
        id: 3,
        name: 'Chris Jackson',
        appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    },
    {
        id: 4,
        name: 'Chris Jackson',
        appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    },
    {
        id: 5,
        name: 'Chris Jackson',
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
                            style={styles.logo}
                            source={{ uri: item.appLogo }}
                        />
                        <Text style={styles.appTitle}>{item.name}</Text>
                    </View>
                </TouchableHighlight>

            )}
            //Setting the number of column
            numColumns={3}
        //keyExtractor={(item, index) => index}
        />
    </View>
);

const UserGridMenu = () => {
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
    logo: {
        width: DeviceWidth * 0.1,
        height: DeviceWidth * 0.1,
    },
    appTitle: {
        textAlign: "center",
        marginVertical: 5,
        fontSize: 20,
    },
});
export default UserGridMenu