"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _FloatingLabelInput = _interopRequireDefault(require("./FloatingLabelInput"));

var _GlobalStyles = _interopRequireDefault(require("./../assets/style/GlobalStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//import { FloatingLabelInput, setGlobalStyles } from 'react-native-floating-label-input';
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
    style: _GlobalStyles.default.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _GlobalStyles.default.titleText
  }, "Informa\xE7\xF5es pessoais"), /*#__PURE__*/_react.default.createElement(_FloatingLabelInput.default, {
    value: nameReq,
    title: "Nome do requerente",
    onChangeText: text => {
      setNameReq(text);
      props.parentUser(idetReqData);
      console.log('nameReq: ', nameReq);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _GlobalStyles.default.baseText
  }, "Documento identifica\xE7\xE3o"), /*#__PURE__*/_react.default.createElement(_reactNative.Picker, {
    style: _GlobalStyles.default.baseInput,
    selectedValue: docTypeReq,
    onValueChange: itemValue => {
      setDocTypeReq(itemValue);
      props.parentUser(idetReqData);
    }
  }, props.listDocType.map((item, key) => /*#__PURE__*/_react.default.createElement(_reactNative.Picker.Item, {
    key: key,
    label: item.label,
    value: item.value
  }))), /*#__PURE__*/_react.default.createElement(_FloatingLabelInput.default, {
    value: emailReq,
    title: "E-mail",
    onChangeText: text => {
      setEmailReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/_react.default.createElement(_FloatingLabelInput.default, {
    value: phoneReq,
    title: "Telefone",
    onChangeText: text => {
      setPhoneReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/_react.default.createElement(_FloatingLabelInput.default, {
    value: mobileReq,
    title: "Telem\xF3vel",
    onChangeText: text => {
      setMobileReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/_react.default.createElement(_FloatingLabelInput.default, {
    value: addressReq,
    title: "Morada",
    onChangeText: text => {
      setAddressReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/_react.default.createElement(_FloatingLabelInput.default, {
    value: postalCodeReq,
    title: "Codigo Postal",
    onChangeText: text => {
      setPostalCodeReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/_react.default.createElement(_FloatingLabelInput.default, {
    value: placeReq,
    title: "Localidade",
    onChangeText: text => {
      setPlaceReq(text);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _GlobalStyles.default.baseText
  }, "Pais"), /*#__PURE__*/_react.default.createElement(_reactNative.Picker, {
    style: _GlobalStyles.default.baseInput,
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
    style: _GlobalStyles.default.checkboxLabel
  }, "O Proprio"), /*#__PURE__*/_react.default.createElement(_reactNative.CheckBox, {
    value: checkedEditor,
    onValueChange: () => {
      checkedEditor ? setCheckedEditor(false) : setCheckedEditor(true);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _GlobalStyles.default.checkboxLabel
  }, "Editor"), /*#__PURE__*/_react.default.createElement(_reactNative.CheckBox, {
    value: checkedRepre,
    onValueChange: () => {
      checkedRepre ? setCheckedRepre(false) : setCheckedRepre(true);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _GlobalStyles.default.checkboxLabel
  }, "Representante"), /*#__PURE__*/_react.default.createElement(_reactNative.CheckBox, {
    value: checkedTitular,
    onValueChange: () => {
      checkedTitular ? setCheckedTitular(false) : setCheckedTitular(true);
      props.parentUser(idetReqData);
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _GlobalStyles.default.checkboxLabel
  }, "Titular Sucessivo")));
};
/* setGlobalStyles.labelStyles = {
    color: 'black',
    fontSize:14,
    // any styles you want to generalize to your floating label
}; */

/* setGlobalStyles.inputStyles = {
    // any styles you want to generalize to your input
    color: 'black',
    borderRadius: 5,
    minHeight: 40,
    margin: 8,
    width: 350,
    padding: 4,
    fontSize: 14,
}; */


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