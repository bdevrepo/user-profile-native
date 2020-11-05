"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

const GridRow = () => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
  style: styles.container
}, /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
  data: list,
  renderItem: ({
    item
  }) => /*#__PURE__*/_react.default.createElement(_reactNative.TouchableHighlight, {
    activeOpacity: 0.6,
    underlayColor: "#DDDDDD",
    onPress: () => console.log('Pressed!')
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.gridRow
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: styles.avatar,
    source: {
      uri: item.appLogo
    }
  }))),
  numColumns: 2
}));

const Profile = () => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(GridRow, null));
};

const styles = _reactNative.StyleSheet.create({
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

var _default = Profile;
exports.default = _default;
//# sourceMappingURL=index.js.map