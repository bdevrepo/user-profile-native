import React from 'react';
import { TouchableHighlight, View, FlatList, Image, StyleSheet } from 'react-native';
const list = [{
  id: 1,
  appLogo: require('../public/images/grid.svg'),
  appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  style: "styles.avatar"
}, {
  id: 2,
  appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  style: "styles.avatar"
}];

const GridRow = () => /*#__PURE__*/React.createElement(View, {
  style: styles.container
}, /*#__PURE__*/React.createElement(FlatList, {
  data: list,
  renderItem: ({
    item
  }) => /*#__PURE__*/React.createElement(TouchableHighlight, {
    activeOpacity: 0.6,
    underlayColor: "#DDDDDD",
    onPress: () => console.log('Pressed!')
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.gridRow
  }, /*#__PURE__*/React.createElement(Image, {
    style: styles.avatar,
    source: {
      uri: item.appLogo
    }
  }))),
  numColumns: 2
}));

const Profile = () => {
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(GridRow, null));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  gridIcon: {},
  gridRow: {
    flex: 1,
    flexDirection: 'column',
    margin: 15 // marginBottom: 15

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
    fontSize: 20
  }
});
export default Profile;
//# sourceMappingURL=index.js.map