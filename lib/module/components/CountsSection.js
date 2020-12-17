import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
var idetReqData = {};
/* type HeaderProps = {
    menu: [{ name: String, component: Function},
    ]
} */

const CountsSection = props => {
  const [nameReq, setNameReq] = useState("");
  useEffect(() => {
    const CountsSection = {
      nameReq: ''
    };
    CountsSection["nameReq"] = nameReq;
  });
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, null, "TODO CountsSection "), /*#__PURE__*/React.createElement(FloatingLabelInput, {
    value: nameReq,
    title: "Nome do requerente",
    onChangeText: text => {
      setNameReq(text);
      props.parentUser(idetReqData);
    }
  }));
};
/* Header.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */


export default CountsSection;
//# sourceMappingURL=CountsSection.js.map