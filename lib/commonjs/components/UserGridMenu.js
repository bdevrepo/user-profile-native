"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _native = require("@react-navigation/native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DeviceWidth = _reactNative.Dimensions.get('window').width;

const list = [{
  id: 1,
  name: 'Sua conta',
  appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
}, {
  id: 2,
  name: 'Propriedade intelectual ',
  appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
}, {
  id: 3,
  name: 'bDev Carteira',
  appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
}];

const UserGridMenu = ({
  onPressFunction
}) => {
  const navigation = (0, _native.useNavigation)();

  const handlerPress = () => {
    //console.log('Pressed: ', onPress)
    // TODO: open page
    navigation.navigate('AccoundDashboard');
    onPressFunction();
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
    data: list,
    renderItem: ({
      item
    }) => /*#__PURE__*/_react.default.createElement(_reactNative.TouchableHighlight, {
      activeOpacity: 0.6,
      underlayColor: "#DDDDDD",
      onPress: () => handlerPress()
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.gridRow
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      style: styles.logo,
      source: {
        uri: item.appLogo
      }
    }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: styles.appTitle
    }, item.name))) //Setting the number of column
    ,
    numColumns: 3 //keyExtractor={(item, index) => index}

  }));
};

const styles = _reactNative.StyleSheet.create({
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

UserGridMenu.navigationOptions = {
  title: 'Another Test Screen'
};
var _default = UserGridMenu;
exports.default = _default;
//# sourceMappingURL=UserGridMenu.js.map