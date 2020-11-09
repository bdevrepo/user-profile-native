import React from 'react';
import { View, Button } from 'react-native'; //import User from '../components/User';

{
  /* <IdentificacaoRequerente/>
  <DireitosArtisticosLiterario/>
  <AutenticacaoAssinatura/> */
}

const AccountDashboard = () => {
  const submitHandler = () => {
    console.log('teste');
  };

  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Button, {
    title: "Gravar",
    onPress: submitHandler
  }, "Gravar"));
};

export default AccountDashboard;
//# sourceMappingURL=AccountDashboard.js.map