import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, FlatList } from 'react-native';
var footerData = {};


type Footer = {
    onPressFunction: Function
    listMenu: [{ id: 0, name: '' }]
}
const Footer = ({ listMenu }: Footer) => {

    return (
        <View >
                <Text>© Copyright <strong> Vesperr. </strong> All Rights Reserved  </Text>
                <Text>Designed by <strong>BootstrapMade</strong> </Text>
            <FlatList 
                data={listMenu}
                renderItem={({ item }) => (
                    <Text  style={styles.container}>{item.name}</Text>
                )}
                //Setting the number of column
                numColumns={4}
            //keyExtractor={(item, index) => index}
            />
        </View>
    );
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
      //  width: 50,
      //  height: 45,
        margin: 15,
      //  flexDirection: "col",
     //   marginHorizontal: 50,
      
    },

});
/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
Footer.navigationOptions = {
    title: 'Another Test Screen',

};
Footer.defaultProps = {
    listMenu: [{
        id: 1,
        name: 'Home'
    },
    {
        id: 2,
        name: 'About '
    },
    {
        id: 3,
        name: 'Privacy Policy '
    },
    {
        id: 4,
        name: 'Term of Use'
    },
    ]
}
export default Footer;