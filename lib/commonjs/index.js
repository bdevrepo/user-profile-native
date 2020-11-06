"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _UserGridMenu = _interopRequireDefault(require("./UserGridMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const list = [{
  id: 1,
  appLogo: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  appUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  style: "styles.avatar"
}];

const ModalGridMenu = () => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Modal, {
    visible: true,
    animationType: "slide",
    transparent: true
  }, /*#__PURE__*/_react.default.createElement(_UserGridMenu.default, null)));
};

const GridRow = () => {
  const [modalVisible, setModalVisible] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, {
    data: list,
    renderItem: ({
      item
    }) => /*#__PURE__*/_react.default.createElement(_reactNative.TouchableHighlight, {
      activeOpacity: 0.6,
      underlayColor: "#DDDDDD",
      onPress: () => {
        setModalVisible(!modalVisible);
      }
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.gridRow
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      style: styles.gridIcon,
      source: {
        uri: item.appLogo
      }
    })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: styles.gridRow
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      style: styles.avatar,
      source: {
        uri: item.appLogo
      }
    })))),
    numColumns: 2
  }), modalVisible ? /*#__PURE__*/_react.default.createElement(ModalGridMenu, null) : null);
};

const Profile = () => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(GridRow, null));
};

const iconWidth = 40;

const styles = _reactNative.StyleSheet.create({
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

var _default = Profile;
exports.default = _default;
//# sourceMappingURL=index.js.map