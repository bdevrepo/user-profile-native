import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
/* const listDocType = [
    {
        label: 'CNI',
        value: 'CNI'
    },
    {
        label: 'Passaporte',
        value: 'Passaporte'
    },
]; */

/* const listCountry = [
    {
        label: 'Angola',
        value: 'Angola'
    },
    {
        label: 'Moçambique',
        value: 'Moçambique'
    },
    {
        label: 'Holanda',
        value: 'Holanda'
    },
    {
        label: 'Cabo Verde',
        value: 'Cabo Verde'
    },
]; */

var idetReqData = {};

const IdentificacaoRequerente = () => {
  const [nameReq, setNameReq] = useState(''); // const [docTypeReq, setDocTypeReq] = useState('');

  const [emailReq, setEmailReq] = useState('');
  const [mobileReq, setMobileReq] = useState('');
  const [phoneReq, setPhoneReq] = useState('');
  const [addressReq, setAddressReq] = useState('');
  const [postalCodeReq, setPostalCodeReq] = useState('');
  const [placeReq, setPlaceReq] = useState(''); // const [countryReq, setCountryReq] = useState('');

  /* const [checkedProprio, setCheckedProprio] = useState(false);
  const [checkedEditor, setCheckedEditor] = useState(false);
  const [checkedTitular, setCheckedTitular] = useState(false);
  const [checkedRepre, setCheckedRepre] = useState(false); */

  useEffect(() => {
    console.log(' A editar');
    const idenReq = {
      nameReq: '',
      docTypeReq: '',
      emailReq: '',
      mobileReq: '',
      phoneReq: '',
      addressReq: '',
      postalCodeReq: '',
      placeReq: '',
      checkedProprio: '',
      checkedEditor: '',
      namecheckedTitularreq: '',
      checkedRepre: ''
    };
    idenReq["nameReq"] = nameReq; //idenReq["docTypeReq"] = docTypeReq;

    idenReq["emailReq"] = emailReq;
    idenReq["mobileReq"] = mobileReq;
    idenReq["phoneReq"] = phoneReq;
    idenReq["addressReq"] = addressReq;
    idenReq["postalCodeReq"] = postalCodeReq;
    idenReq["placeReq"] = placeReq; // TODO: get value checked

    /*  idenReq["checkedProprio"] = checkedProprio;
     idenReq["checkedEditor"] = checkedEditor;
     idenReq["namecheckedTitularreq"] = checkedTitular;
     idenReq["checkedRepre"] = checkedRepre; */

    console.log('idetReqData: ', idetReqData);
  });
  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Text, {
    style: styles.titleText
  }, "Nome do requerente"), /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "Nome do requerente"
    /* style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} */
    ,
    onChangeText: text => setNameReq(text)
  }), /*#__PURE__*/React.createElement(Text, null, "Tipo do documento de identifica\xE7\xE3o"), /*#__PURE__*/React.createElement(Text, null, "E-mail"), /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "E-mail",
    onChangeText: text => setEmailReq(text)
  }), /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "Telefone",
    onChangeText: text => setPhoneReq(text)
  }), /*#__PURE__*/React.createElement(Text, null, "Telem\xF3vel"), /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "Telem\xF3vel",
    onChangeText: text => setMobileReq(text)
  }), /*#__PURE__*/React.createElement(Text, null, "Morada"), /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "Morada",
    onChangeText: text => setAddressReq(text)
  }), /*#__PURE__*/React.createElement(Text, null, "Codigo Postal"), /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "Codigo Postal",
    onChangeText: text => setPostalCodeReq(text)
  }), /*#__PURE__*/React.createElement(Text, null, " Localidade "), /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "Localidade",
    onChangeText: text => setPlaceReq(text)
  }), /*#__PURE__*/React.createElement(Text, null, "Pais"), /*#__PURE__*/React.createElement(View, {
    style: {
      flexDirection: "row"
    }
  }));
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
export default IdentificacaoRequerente;
//# sourceMappingURL=User.js.map