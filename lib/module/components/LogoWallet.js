import React from 'react'; //import PropTypes from 'prop-types';

import { StyleSheet, View, Image } from 'react-native'; //import logoImg from '../assets/img/BWalletV.svg';

const LogoWallet = () => {
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Image, {
    source: require('../assets/img/BWalletH.svg'),
    style: styles.image
  }));
};

const styles = StyleSheet.create({
  container: {
    //flex: 3,
    alignItems: 'center',
    justifyContent: 'center' //backgroundColor:'#79a5f2'

  },
  image: {
    width: 100,
    height: 30,
    marginTop: 40
  }
});
export default LogoWallet;
//# sourceMappingURL=LogoWallet.js.map