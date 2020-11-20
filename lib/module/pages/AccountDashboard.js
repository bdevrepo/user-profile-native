import React from 'react';
import { View, Button } from 'react-native';
import User from '../components/User';
var allData = {
  user: null
};

const AccountDashboard = props => {
  const callBackUser = data => {
    //console.log('teste', data);
    allData["user"] = data;
  };

  const submitHandler = () => {
    props.parentDash(allData);
  };

  return /*#__PURE__*/React.createElement(View, {
    style: {
      backgroundColor: "white"
    }
  }, /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(User, {
    parentUser: callBackUser.bind
  })), /*#__PURE__*/React.createElement(Button, {
    title: "Gravar",
    onPress: submitHandler
  }, "Gravar"));
};

export default AccountDashboard;
//# sourceMappingURL=AccountDashboard.js.map