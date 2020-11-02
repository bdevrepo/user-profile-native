/* export default {
  multiply(a: number, b: number) {
    return Promise.resolve(a * b);
  },
};
 */
import React from 'react';
import { View, Text, Button } from 'react-native'; //import { Avatar } from "react-native-elements";
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

  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(View, {
    style: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Text, null, userDetail.name), /*#__PURE__*/React.createElement(Text, null, userDetail.email), /*#__PURE__*/React.createElement(Button, {
    onPress: onPressLearnMore,
    title: "Gerir conta" //type="outline"

  })), /*#__PURE__*/React.createElement(Button, {
    onPress: onPressLearnMore,
    title: "Sair" //type="outline"

  }));
};

export default Profile;
//# sourceMappingURL=index.js.map