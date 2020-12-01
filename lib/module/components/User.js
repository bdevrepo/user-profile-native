import React, { useState, useEffect } from 'react';
import { View, Text, Picker, CheckBox } from 'react-native';
import { FloatingLabelInput, setGlobalStyles } from 'react-native-floating-label-input';
import GlobalStyles from './../assets/style/GlobalStyles';
var idetReqData = {};

const User = props => {
  const [docTypeReq, setDocTypeReq] = useState("CNI");
  const [nameReq, setNameReq] = useState('');
  const [emailReq, setEmailReq] = useState('');
  const [mobileReq, setMobileReq] = useState('');
  const [phoneReq, setPhoneReq] = useState('');
  const [addressReq, setAddressReq] = useState('');
  const [postalCodeReq, setPostalCodeReq] = useState('');
  const [placeReq, setPlaceReq] = useState('');
  const [countryReq, setCountryReq] = useState('');
  const [checkedProprio, setCheckedProprio] = useState(false);
  const [checkedEditor, setCheckedEditor] = useState(false);
  const [checkedTitular, setCheckedTitular] = useState(false);
  const [checkedRepre, setCheckedRepre] = useState(false);
  useEffect(() => {
    const user = {
      nameReq: '',
      docTypeReq: '',
      emailReq: '',
      mobileReq: '',
      phoneReq: '',
      addressReq: '',
      postalCodeReq: '',
      placeReq: '',
      checkedProprio: false,
      checkedEditor: false,
      namecheckedTitularreq: false,
      checkedRepre: false
    };
    user["nameReq"] = nameReq;
    user["docTypeReq"] = docTypeReq;
    user["emailReq"] = emailReq;
    user["mobileReq"] = mobileReq;
    user["phoneReq"] = phoneReq;
    user["addressReq"] = addressReq;
    user["postalCodeReq"] = postalCodeReq;
    user["placeReq"] = placeReq; // TODO: get value checked

    user["checkedProprio"] = checkedProprio;
    user["checkedEditor"] = checkedEditor;
    user["namecheckedTitularreq"] = checkedTitular;
    user["checkedRepre"] = checkedRepre;
    idetReqData = user; //console.log(' A editar', idetReqData);
  });
  return /*#__PURE__*/React.createElement(View, {
    style: GlobalStyles.container
  }, /*#__PURE__*/React.createElement(Text, {
    style: GlobalStyles.titleText
  }, "Informa\xE7\xF5es pessoais"), /*#__PURE__*/React.createElement(FloatingLabelInput, {
    label: "Nome do requerente",
    onChangeText: text => {
      setNameReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: GlobalStyles.baseText
  }, "Documento identifica\xE7\xE3o"), /*#__PURE__*/React.createElement(Picker, {
    style: GlobalStyles.baseInput,
    selectedValue: docTypeReq,
    onValueChange: itemValue => {
      setDocTypeReq(itemValue);
      props.parentUser(idetReqData);
    }
  }, props.listDocType.map((item, key) => /*#__PURE__*/React.createElement(Picker.Item, {
    key: key,
    label: item.label,
    value: item.value
  }))), /*#__PURE__*/React.createElement(FloatingLabelInput, {
    label: "E-mail",
    onChangeText: text => {
      setEmailReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/React.createElement(FloatingLabelInput, {
    label: "Telefone",
    onChangeText: text => {
      setPhoneReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/React.createElement(FloatingLabelInput, {
    label: "Telem\xF3vel",
    onChangeText: text => {
      setMobileReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/React.createElement(FloatingLabelInput, {
    label: "Morada",
    onChangeText: text => {
      setAddressReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/React.createElement(FloatingLabelInput, {
    label: "Codigo Postal",
    onChangeText: text => {
      setPostalCodeReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/React.createElement(FloatingLabelInput, {
    label: "Localidade",
    onChangeText: text => {
      setPlaceReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: GlobalStyles.baseText
  }, "Pais"), /*#__PURE__*/React.createElement(Picker, {
    style: GlobalStyles.baseInput,
    selectedValue: countryReq,
    onValueChange: itemValue => {
      setCountryReq(itemValue);
      props.parentUser(idetReqData);
    }
  }, props.listCountry.map((item, key) => /*#__PURE__*/React.createElement(Picker.Item, {
    key: key,
    label: item.label,
    value: item.value
  }))), /*#__PURE__*/React.createElement(View, {
    style: {
      flexDirection: "row",
      margin: 10,
      alignSelf: "center"
    }
  }, /*#__PURE__*/React.createElement(CheckBox, {
    value: checkedProprio,
    onValueChange: () => {
      checkedProprio ? setCheckedProprio(false) : setCheckedProprio(true);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: GlobalStyles.checkboxLabel
  }, "O Proprio"), /*#__PURE__*/React.createElement(CheckBox, {
    value: checkedEditor,
    onValueChange: () => {
      checkedEditor ? setCheckedEditor(false) : setCheckedEditor(true);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: GlobalStyles.checkboxLabel
  }, "Editor"), /*#__PURE__*/React.createElement(CheckBox, {
    value: checkedRepre,
    onValueChange: () => {
      checkedRepre ? setCheckedRepre(false) : setCheckedRepre(true);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: GlobalStyles.checkboxLabel
  }, "Representante"), /*#__PURE__*/React.createElement(CheckBox, {
    value: checkedTitular,
    onValueChange: () => {
      checkedTitular ? setCheckedTitular(false) : setCheckedTitular(true);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: GlobalStyles.checkboxLabel
  }, "Titular Sucessivo")));
};

setGlobalStyles.labelStyles = {
  color: 'black',
  fontSize: 14 // any styles you want to generalize to your floating label

};
setGlobalStyles.inputStyles = {
  // any styles you want to generalize to your input
  color: 'black',
  borderRadius: 5,
  minHeight: 40,
  margin: 8,
  width: 350,
  padding: 4,
  fontSize: 14
};
User.defaultProps = {
  listDocType: [{
    label: 'Bilhete de Identidade',
    value: 'BI'
  }, {
    label: 'Cartão Nacional de Identificação',
    value: 'CNI'
  }, {
    label: 'Passaporte',
    value: 'Passaporte'
  }],
  listCountry: [{
    label: 'Angola',
    value: 'Angola'
  }, {
    label: 'Cabo Verde',
    value: 'Cabo Verde'
  }, {
    label: 'Moçambique',
    value: 'Moçambique'
  }, {
    label: 'Holanda',
    value: 'Holanda'
  }]
};
export default User;
//# sourceMappingURL=User.js.map