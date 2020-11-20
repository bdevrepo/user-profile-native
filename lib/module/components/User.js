import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Picker, CheckBox } from 'react-native';
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
    style: styles.container
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.titleText
  }, "Informa\xE7\xF5es pessoais"), /*#__PURE__*/React.createElement(Text, {
    style: styles.baseText
  }, "Nome do requerente"), /*#__PURE__*/React.createElement(TextInput, {
    style: styles.baseInput,
    placeholder: "Nome do requerente",
    onChangeText: text => {
      setNameReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.baseText
  }, "Tipo do documento de identifica\xE7\xE3o"), /*#__PURE__*/React.createElement(Picker, {
    style: styles.baseInput,
    selectedValue: docTypeReq,
    onValueChange: itemValue => {
      setDocTypeReq(itemValue);
      props.parentUser(idetReqData);
    }
  }, props.listDocType.map((item, key) => /*#__PURE__*/React.createElement(Picker.Item, {
    key: key,
    label: item.label,
    value: item.value
  }))), /*#__PURE__*/React.createElement(Text, {
    style: styles.baseText
  }, "E-mail"), /*#__PURE__*/React.createElement(TextInput, {
    style: styles.baseInput,
    placeholder: "E-mail",
    onChangeText: text => {
      setEmailReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.baseText
  }, "Telefone"), /*#__PURE__*/React.createElement(TextInput, {
    style: styles.baseInput,
    placeholder: "Telefone",
    onChangeText: text => {
      setPhoneReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.baseText
  }, "Telem\xF3vel"), /*#__PURE__*/React.createElement(TextInput, {
    style: styles.baseInput,
    placeholder: "Telem\xF3vel",
    onChangeText: text => {
      setMobileReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.baseText
  }, "Morada"), /*#__PURE__*/React.createElement(TextInput, {
    style: styles.baseInput,
    placeholder: "Morada",
    onChangeText: text => {
      setAddressReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.baseText
  }, "Codigo Postal"), /*#__PURE__*/React.createElement(TextInput, {
    style: styles.baseInput,
    placeholder: "Codigo Postal",
    onChangeText: text => {
      setPostalCodeReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.baseText
  }, " Localidade "), /*#__PURE__*/React.createElement(TextInput, {
    style: styles.baseInput,
    placeholder: "Localidade",
    onChangeText: text => {
      setPlaceReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.baseText
  }, "Pais"), /*#__PURE__*/React.createElement(Picker, {
    style: styles.baseInput,
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
    style: styles.checkboxLabel
  }, "O Proprio"), /*#__PURE__*/React.createElement(CheckBox, {
    value: checkedEditor,
    onValueChange: () => {
      checkedEditor ? setCheckedEditor(false) : setCheckedEditor(true);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.checkboxLabel
  }, "Editor"), /*#__PURE__*/React.createElement(CheckBox, {
    value: checkedRepre,
    onValueChange: () => {
      checkedRepre ? setCheckedRepre(false) : setCheckedRepre(true);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.checkboxLabel
  }, "Representante"), /*#__PURE__*/React.createElement(CheckBox, {
    value: checkedTitular,
    onValueChange: () => {
      checkedTitular ? setCheckedTitular(false) : setCheckedTitular(true);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.checkboxLabel
  }, "Titular Sucessivo")));
};

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  baseText: {
    backgroundColor: "white",
    //fontFamily: "Cochin",
    marginTop: 10
  },
  titleText: {
    textAlign: "center",
    backgroundColor: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10 //marginBottom:10

  },
  baseInput: {
    backgroundColor: "white",
    height: 40,
    borderWidth: 0,
    // alignItems: "stretch",
    borderBottomWidth: 1
  },
  checkboxLabel: {
    margin: 8 //fontFamily: "Cochin",

  }
});
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