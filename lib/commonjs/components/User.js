"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var idetReqData = {};

const User = props => {
  const [docTypeReq, setDocTypeReq] = (0, _react.useState)("CNI");
  const [nameReq, setNameReq] = (0, _react.useState)('');
  const [emailReq, setEmailReq] = (0, _react.useState)('');
  const [mobileReq, setMobileReq] = (0, _react.useState)('');
  const [phoneReq, setPhoneReq] = (0, _react.useState)('');
  const [addressReq, setAddressReq] = (0, _react.useState)('');
  const [postalCodeReq, setPostalCodeReq] = (0, _react.useState)('');
  const [placeReq, setPlaceReq] = (0, _react.useState)('');
  const [countryReq, setCountryReq] = (0, _react.useState)('');
  const [checkedProprio, setCheckedProprio] = (0, _react.useState)(false);
  const [checkedEditor, setCheckedEditor] = (0, _react.useState)(false);
  const [checkedTitular, setCheckedTitular] = (0, _react.useState)(false);
  const [checkedRepre, setCheckedRepre] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
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
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.titleText
  }, "Informa\xE7\xF5es pessoais"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.baseText
  }, "Nome do requerente"), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    style: styles.baseInput,
    placeholder: "Nome do requerente",
    onChangeText: text => {
      setNameReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.baseText
  }, "Tipo do documento de identifica\xE7\xE3o"), /*#__PURE__*/_react.default.createElement(_reactNative.Picker, {
    style: styles.baseInput,
    selectedValue: docTypeReq,
    onValueChange: itemValue => {
      setDocTypeReq(itemValue);
      props.parentUser(idetReqData);
    }
  }, props.listDocType.map((item, key) => /*#__PURE__*/_react.default.createElement(_reactNative.Picker.Item, {
    key: key,
    label: item.label,
    value: item.value
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.baseText
  }, "E-mail"), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    style: styles.baseInput,
    placeholder: "E-mail",
    onChangeText: text => {
      setEmailReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.baseText
  }, "Telefone"), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    style: styles.baseInput,
    placeholder: "Telefone",
    onChangeText: text => {
      setPhoneReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.baseText
  }, "Telem\xF3vel"), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    style: styles.baseInput,
    placeholder: "Telem\xF3vel",
    onChangeText: text => {
      setMobileReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.baseText
  }, "Morada"), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    style: styles.baseInput,
    placeholder: "Morada",
    onChangeText: text => {
      setAddressReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.baseText
  }, "Codigo Postal"), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    style: styles.baseInput,
    placeholder: "Codigo Postal",
    onChangeText: text => {
      setPostalCodeReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.baseText
  }, " Localidade "), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    style: styles.baseInput,
    placeholder: "Localidade",
    onChangeText: text => {
      setPlaceReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.baseText
  }, "Pais"), /*#__PURE__*/_react.default.createElement(_reactNative.Picker, {
    style: styles.baseInput,
    selectedValue: countryReq,
    onValueChange: itemValue => {
      setCountryReq(itemValue);
      props.parentUser(idetReqData);
    }
  }, props.listCountry.map((item, key) => /*#__PURE__*/_react.default.createElement(_reactNative.Picker.Item, {
    key: key,
    label: item.label,
    value: item.value
  }))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "row",
      margin: 10,
      alignSelf: "center"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.CheckBox, {
    value: checkedProprio,
    onValueChange: () => {
      checkedProprio ? setCheckedProprio(false) : setCheckedProprio(true);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.checkboxLabel
  }, "O Proprio"), /*#__PURE__*/_react.default.createElement(_reactNative.CheckBox, {
    value: checkedEditor,
    onValueChange: () => {
      checkedEditor ? setCheckedEditor(false) : setCheckedEditor(true);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.checkboxLabel
  }, "Editor"), /*#__PURE__*/_react.default.createElement(_reactNative.CheckBox, {
    value: checkedRepre,
    onValueChange: () => {
      checkedRepre ? setCheckedRepre(false) : setCheckedRepre(true);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.checkboxLabel
  }, "Representante"), /*#__PURE__*/_react.default.createElement(_reactNative.CheckBox, {
    value: checkedTitular,
    onValueChange: () => {
      checkedTitular ? setCheckedTitular(false) : setCheckedTitular(true);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.checkboxLabel
  }, "Titular Sucessivo")));
};

const styles = _reactNative.StyleSheet.create({
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
var _default = User;
exports.default = _default;
//# sourceMappingURL=User.js.map