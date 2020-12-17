import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
var idetReqData = {};
/* type AboutUsSectionprops = {
    menu: [{ name: String, component: Function},
    ]
} */

const AboutUsSection = props => {
  const [nameReq, setNameReq] = useState("");
  useEffect(() => {
    const AboutUsSection = {
      nameReq: ''
    };
    AboutUsSection["nameReq"] = nameReq;
  });
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, null, "TODO AboutUsSection "), /*#__PURE__*/React.createElement(FloatingLabelInput, {
    value: nameReq,
    title: "Nome do requerente",
    onChangeText: text => {
      setNameReq(text);
      props.parentUser(idetReqData);
    }
  }));
};
/* AboutUsSection.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */


export default AboutUsSection;
//# sourceMappingURL=AboutUsSection.js.map