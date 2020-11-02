"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* export default {
  multiply(a: number, b: number) {
    return Promise.resolve(a * b);
  },
};
 */
//import { Avatar } from "react-native-elements";
//import { ListItem } from 'react-native-elements';
//import { Text } from 'react-native-elements';
//import { Button } from 'react-native-elements';
//import { Divider } from 'react-native-elements';
const userDetail = {
  name: "Angelo Correia",
  email: "angelocorreia27@hotmail.com"
};
/* const avatar_url = 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg';
//const name = "teste";
//const role = "test role";

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

const Profile = () => {
  const onPressLearnMore = () => {
    console.log('teste');
  };

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, userDetail.name), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, userDetail.email), /*#__PURE__*/_react.default.createElement(_reactNative.Button, {
    onPress: onPressLearnMore,
    title: "Gerir conta" //type="outline"

  })), /*#__PURE__*/_react.default.createElement(_reactNative.Button, {
    onPress: onPressLearnMore,
    title: "Sair" //type="outline"

  }));
};

var _default = Profile;
exports.default = _default;
//# sourceMappingURL=index.js.map