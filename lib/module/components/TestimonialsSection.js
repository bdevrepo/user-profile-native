import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';
var idetReqData = {};
/* type HeaderProps = {
    menu: [{ name: String, component: Function},
    ]
} */

const TestimonialsSection = props => {
  const [nameReq, setNameReq] = useState("");
  useEffect(() => {
    const TestimonialsSection = {
      nameReq: ''
    };
    TestimonialsSection["nameReq"] = nameReq;
  });
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, null, "TODO TestimonialsSection "), /*#__PURE__*/React.createElement(FloatingLabelInput, {
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


export default TestimonialsSection;
//# sourceMappingURL=TestimonialsSection.js.map