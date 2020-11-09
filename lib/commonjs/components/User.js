"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  const [nameReq, setNameReq] = (0, _react.useState)(''); // const [docTypeReq, setDocTypeReq] = useState('');

  const [emailReq, setEmailReq] = (0, _react.useState)('');
  const [mobileReq, setMobileReq] = (0, _react.useState)('');
  const [phoneReq, setPhoneReq] = (0, _react.useState)('');
  const [addressReq, setAddressReq] = (0, _react.useState)('');
  const [postalCodeReq, setPostalCodeReq] = (0, _react.useState)('');
  const [placeReq, setPlaceReq] = (0, _react.useState)(''); // const [countryReq, setCountryReq] = useState('');

  /* const [checkedProprio, setCheckedProprio] = useState(false);
  const [checkedEditor, setCheckedEditor] = useState(false);
  const [checkedTitular, setCheckedTitular] = useState(false);
  const [checkedRepre, setCheckedRepre] = useState(false); */

  (0, _react.useEffect)(() => {
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
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.titleText
  }, "Nome do requerente"), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    placeholder: "Nome do requerente"
    /* style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} */
    ,
    onChangeText: text => setNameReq(text)
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Tipo do documento de identifica\xE7\xE3o"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "E-mail"), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    placeholder: "E-mail",
    onChangeText: text => setEmailReq(text)
  }), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    placeholder: "Telefone",
    onChangeText: text => setPhoneReq(text)
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Telem\xF3vel"), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    placeholder: "Telem\xF3vel",
    onChangeText: text => setMobileReq(text)
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Morada"), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    placeholder: "Morada",
    onChangeText: text => setAddressReq(text)
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Codigo Postal"), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    placeholder: "Codigo Postal",
    onChangeText: text => setPostalCodeReq(text)
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, " Localidade "), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    placeholder: "Localidade",
    onChangeText: text => setPlaceReq(text)
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Pais"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      flexDirection: "row"
    }
  }));
};

const styles = _reactNative.StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

var _default = IdentificacaoRequerente;
exports.default = _default;
//# sourceMappingURL=User.js.map