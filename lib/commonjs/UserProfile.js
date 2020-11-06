"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userDetail = {
  name: "Angelo Correia",
  email: "angelocorreia27@hotmail.com",
  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
};

const Separator = () => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
  style: styles.separator
});
/*
const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
]; */


const UserProfile = ({
  onPress
}) => {
  const onPressLearnMore = () => {
    onPress();
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: styles.avatar,
    source: {
      uri: userDetail.avatar_url
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: {
      fontSize: 20,
      fontWeight: "bold"
    }
  }, userDetail.name), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: {
      marginBottom: 15
    }
  }, userDetail.email), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Button, {
    onPress: onPressLearnMore,
    title: "Gerir conta"
  }))), /*#__PURE__*/_react.default.createElement(Separator, null), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Button, {
    onPress: onPressLearnMore,
    title: "Sair"
  })));
};

const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    marginBottom: 15
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: _reactNative.StyleSheet.hairlineWidth
  }
});

var _default = UserProfile;
exports.default = _default;
//# sourceMappingURL=UserProfile.js.map