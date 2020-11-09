import React from 'react';
import { TouchableHighlight, Dimensions, View, FlatList, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DeviceWidth = Dimensions.get('window').width;

const list = [
    {
        id: 1,
        name: 'Sua conta',
        appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    },
    {
        id: 2,
        name: 'Propriedade intelectual ',
        appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    },
    {
        id: 3,
        name: 'bDev Carteira',
        appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
    },
];


type GridMenuProps = {
    onPressFunction:Function
}

const UserGridMenu = ({onPressFunction}:GridMenuProps) => {
    const navigation = useNavigation();
    const handlerPress =() =>{
        //console.log('Pressed: ', onPress)
        // TODO: open page
        navigation.navigate('AccoundDashboard')
        onPressFunction();
    }
    return (
        <View style={styles.container}>
        <FlatList
            data={list}
            renderItem={({ item }) => (
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => handlerPress()}>
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

UserGridMenu.navigationOptions = {
    title: 'Another Test Screen',
    
  };
export default UserGridMenu