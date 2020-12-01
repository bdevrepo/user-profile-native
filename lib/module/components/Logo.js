import React from 'react'; //import PropTypes from 'prop-types';

import { StyleSheet, View, Image } from 'react-native'; //import logoImg from '../assets/img/BWalletV.svg';

const Logo = () => {
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
    width: 530,
    height: 180,
    marginTop: 10
  }
});
export default Logo;
//# sourceMappingURL=Logo.js.map