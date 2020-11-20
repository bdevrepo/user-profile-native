import React from 'react';
import { View, Button } from 'react-native';
import User from './User';
import { useNavigation } from '@react-navigation/native';

const InfPessoal = () => {
  const navigation = useNavigation();

  const navigationHandler = () => {
    navigation.goBack();
  };

  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(User, null), /*#__PURE__*/React.createElement(Button, {
    title: "Voltar",
    onPress: () => {
      navigationHandler();
    }
  }));
};

export default InfPessoal;
//# sourceMappingURL=InfPessoal.js.map