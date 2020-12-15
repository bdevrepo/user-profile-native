import React from 'react';
import { View, Text, Image, TouchableHighlight, Alert } from 'react-native';

const path = require('path');

const HeroSection = ({
  title,
  subtitle,
  buttonTitle,
  imgSource,
  buttonPressFuncion
}) => {
  console.log('path: ', path);
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, null, title), /*#__PURE__*/React.createElement(Text, null, subtitle), /*#__PURE__*/React.createElement(TouchableHighlight, {
    onPress: buttonPressFuncion()
  }, /*#__PURE__*/React.createElement(Text, null, buttonTitle))), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Image, {
    source: {
      uri: imgSource
    }
  })));
};

HeroSection.defaultProps = {
  title: 'Grow your business',
  subtitle: 'We are team of talanted',
  buttonTitle: 'Get Started',
  buttonPressFuncion: function () {
    () => Alert;
  },
  imgSource: 'https://localhost:19006/assets/img/BWalletH.svg'
};
export default HeroSection;
//# sourceMappingURL=HeroSection.js.map