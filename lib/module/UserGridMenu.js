import React from 'react';
import { TouchableHighlight, Dimensions, View, FlatList, Text, Image, StyleSheet } from 'react-native';
const DeviceWidth = Dimensions.get('window').width;
const list = [{
  id: 1,
  name: 'Amy Farha',
  appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
}, {
  id: 2,
  name: 'Chris Jackson',
  appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
}, {
  id: 3,
  name: 'Chris Jackson',
  appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
}, {
  id: 4,
  name: 'Chris Jackson',
  appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
}, {
  id: 5,
  name: 'Chris Jackson',
  appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
}];

const handlerPress = () => {
  console.log('Pressed!');
};

const GridRow = () => /*#__PURE__*/React.createElement(View, {
  style: styles.container
}, /*#__PURE__*/React.createElement(FlatList, {
  data: list,
  renderItem: ({
    item
  }) => /*#__PURE__*/React.createElement(TouchableHighlight, {
    activeOpacity: 0.6,
    underlayColor: "#DDDDDD",
    onPress: () => handlerPress()
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.gridRow
  }, /*#__PURE__*/React.createElement(Image, {
    style: styles.logo,
    source: {
      uri: item.appLogo
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.appTitle
  }, item.name))) //Setting the number of column
  ,
  numColumns: 3 //keyExtractor={(item, index) => index}

}));

const UserGridMenu = () => {
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(GridRow, null));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  gridRow: {
    flex: 1,
    flexDirection: 'column',
    margin: 15 // marginBottom: 15

  },
  logo: {
    width: DeviceWidth * 0.1,
    height: DeviceWidth * 0.1
  },
  appTitle: {
    textAlign: "center",
    marginVertical: 5,
    fontSize: 20
  }
});
export default UserGridMenu;
//# sourceMappingURL=UserGridMenu.js.map