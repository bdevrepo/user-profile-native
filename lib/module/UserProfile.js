import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
const userDetail = {
  name: "Angelo Correia",
  email: "angelocorreia27@hotmail.com",
  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
};

const Separator = () => /*#__PURE__*/React.createElement(View, {
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

  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Image, {
    style: styles.avatar,
    source: {
      uri: userDetail.avatar_url
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: {
      fontSize: 20,
      fontWeight: "bold"
    }
  }, userDetail.name), /*#__PURE__*/React.createElement(Text, {
    style: {
      marginBottom: 15
    }
  }, userDetail.email), /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Button, {
    onPress: onPressLearnMore,
    title: "Gerir conta"
  }))), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Button, {
    onPress: onPressLearnMore,
    title: "Sair"
  })));
};

const styles = StyleSheet.create({
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
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
export default UserProfile;
//# sourceMappingURL=UserProfile.js.map