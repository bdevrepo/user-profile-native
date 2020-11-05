import React, { useState } from 'react';
import { Modal, TouchableHighlight, View, FlatList, Image, StyleSheet } from 'react-native';
import UserGridMenu from './UserGridMenu';

const list = [
    {
        id: 1,
        appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        style: "styles.avatar"
    },

];

const ModalGridMenu = () => {
    return (
        <View>
            <Modal
                visible={true}
                animationType="slide"
                transparent={true}
            >
                <UserGridMenu />
            </Modal>
        </View>
    );
}
const GridRow = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>

            <FlatList
                data={list}
                renderItem={({ item }) => (
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View>
                            <View style={styles.gridRow}>
                                <Image
                                    style={styles.gridIcon}
                                    source={{ uri: item.appLogo }}
                                />
                            </View>
                            <View style={styles.gridRow}>
                                <Image
                                    style={styles.avatar}
                                    source={{ uri: item.appLogo }}
                                />
                            </View>
                        </View>
                    </TouchableHighlight>

                )}
                numColumns={2}
            />
            {modalVisible ?
                <ModalGridMenu />
                : null
            }
        </View>
    );
}
const Profile = () => {
    return (
        <View>
            <GridRow />
        </View>
    )
}
const iconWidth = 40;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    gridIcon: {
        width: iconWidth,
        height: iconWidth,
        marginBottom: 15
    },

    gridRow: {
        flex: 1,
        flexDirection: 'column',
        margin: 20,
    },
    avatar: {
        width: iconWidth,
        height: iconWidth,
        borderRadius: iconWidth / 2,
        marginBottom: 15
    },

});
export default Profile