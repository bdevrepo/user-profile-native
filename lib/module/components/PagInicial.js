import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PagInicial = () => {
  const navigation = useNavigation();

  const navigationHandler = () => {
    navigation.goBack();
  };

  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement("text", null, "Bem-vindo, Hermes Maur\xEDcio"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("text", null, "Fa\xE7a a gest\xE3o das suas informa\xE7\xF5es, da privacidade e da seguran\xE7a para utilizar os servi\xE7os do Sistema da forma mais adequada para si"), /*#__PURE__*/React.createElement(Button, {
    title: "Voltar",
    onPress: () => {
      navigationHandler();
    } //PAGES.REGISTO_ARTISTICO

  }));
};

export default PagInicial;
//# sourceMappingURL=PagInicial.js.map