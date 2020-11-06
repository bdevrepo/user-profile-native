import React, { useState } from 'react';
import { Modal, TouchableHighlight, View, FlatList, Image, StyleSheet } from 'react-native';
import UserGridMenu from './UserGridMenu';
const list = [{
  id: 1,
  appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  style: "styles.avatar"
}];

const ModalGridMenu = () => {
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Modal, {
    visible: true,
    animationType: "slide",
    transparent: true
  }, /*#__PURE__*/React.createElement(UserGridMenu, null)));
};

const GridRow = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(FlatList, {
    data: list,
    renderItem: ({
      item
    }) => /*#__PURE__*/React.createElement(TouchableHighlight, {
      activeOpacity: 0.6,
      underlayColor: "#DDDDDD",
      onPress: () => {
        setModalVisible(!modalVisible);
      }
    }, /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(View, {
      style: styles.gridRow
    }, /*#__PURE__*/React.createElement(Image, {
      style: styles.gridIcon,
      source: {
        uri: item.appLogo
      }
    })), /*#__PURE__*/React.createElement(View, {
      style: styles.gridRow
    }, /*#__PURE__*/React.createElement(Image, {
      style: styles.avatar,
      source: {
        uri: item.appLogo
      }
    })))),
    numColumns: 2
  }), modalVisible ? /*#__PURE__*/React.createElement(ModalGridMenu, null) : null);
};

const Profile = () => {
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(GridRow, null));
};

const iconWidth = 40;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  gridIcon: {
    width: iconWidth,
    height: iconWidth,
    marginBottom: 15
  },
  gridRow: {
    flex: 1,
    flexDirection: 'column',
    margin: 20
  },
  avatar: {
    width: iconWidth,
    height: iconWidth,
    borderRadius: iconWidth / 2,
    marginBottom: 15
  }
});
export default Profile;
//# sourceMappingURL=index.js.map