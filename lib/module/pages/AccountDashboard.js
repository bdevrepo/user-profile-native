import React from 'react';
import { View, Text, Button } from 'react-native';
import User from '../components/User';

const AccountDashboard = () => {
  const submitHandler = () => {
    console.log('teste');
  };

  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, null, "Identifica\xE7\xE3o Requerente"), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(User
  /* parentReq={this.callBackReq.bind(this)} */
  , null)), /*#__PURE__*/React.createElement(Button, {
    title: "Gravar",
    onPress: submitHandler
  }, "Gravar"));
};

export default AccountDashboard;
//# sourceMappingURL=AccountDashboard.js.map