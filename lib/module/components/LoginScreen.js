import React from 'react'; //import PropTypes from 'prop-types';

import Logo from './Logo';
import Form from './Form'; //import Wallpaper from './Wallpaper';

import { View, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement(Form, null));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //width: null,
    //height: null,
    resizeMode: 'cover',
    backgroundColor: 'white'
  }
});
export default LoginScreen;
//# sourceMappingURL=LoginScreen.js.map