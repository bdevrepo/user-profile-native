"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _GlobalStyles = _interopRequireDefault(require("./../assets/style/GlobalStyles"));

var _constants = require("./../store/constants");

var _reactNativeFloatingLabelTextInput = _interopRequireDefault(require("react-native-floating-label-text-input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Form = () => {
  //const [birthday, setBirthday] = useState('');

  /* const _updateMasterState = () => {
    //this.setState({ [attrName]: value });
    setUsername('');
    //setPassword('');
  } */
  //const [username, setUsername] = useState('');
  //const [password, setPassword] = useState('');

  /* constructor(props) {
    super(props);
    this.state = {
      showPass: true,
      press: false,
    };
    this.showPass = this.showPass.bind(this);
  } */

  /* showPass() {
    this.state.press === false
      ? this.setState({showPass: false, press: true})
      : this.setState({showPass: true, press: false});
  } */
  return /*#__PURE__*/_react.default.createElement(_reactNative.KeyboardAvoidingView, {
    behavior: "padding",
    style: styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNativeFloatingLabelTextInput.default, {
    placeholder: "name of field",
    value: "value of field" // onFocus={@myFocusFunction}
    // onBlur={@onBlurFunction}

  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _GlobalStyles.default.viewButton
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Button, {
    color: _constants.CUSTOMON.COLOR,
    title: "Login",
    onPress: () => {}
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.text
  }, "Forgot Password?"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _GlobalStyles.default.separator
  }, " Or"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _GlobalStyles.default.viewButton
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Button, {
    color: _constants.CUSTOMON.COLOR,
    title: "Create Account",
    onPress: () => {}
  })));
}; //const DEVICE_WIDTH = Dimensions.get('window').width;
//const DEVICE_HEIGHT = Dimensions.get('window').height;


const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    //padding: 10,
    justifyContent: 'center',
    alignItems: 'center' //backgroundColor: 'white', 

  },
  text: {
    margin: 20
  },
  labelInput: {
    color: '#673AB7'
  },
  formInput: {
    borderBottomWidth: 1.5,
    marginLeft: 20,
    borderColor: '#333'
  },
  input: {
    borderWidth: 0
  }
});

var _default = Form;
exports.default = _default;
//# sourceMappingURL=Form.js.map