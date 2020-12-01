import React from 'react';
import { StyleSheet, KeyboardAvoidingView, View //TouchableOpacity,
//TextInput,
, Text //Dimensions,
, Button } from 'react-native';
import GlobalStyles from './../assets/style/GlobalStyles';
import { CUSTOMON } from './../store/constants';
import FloatLabelTextInput from 'react-native-floating-label-text-input';

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
  return /*#__PURE__*/React.createElement(KeyboardAvoidingView, {
    behavior: "padding",
    style: styles.container
  }, /*#__PURE__*/React.createElement(FloatLabelTextInput, {
    placeholder: "name of field",
    value: "value of field" // onFocus={@myFocusFunction}
    // onBlur={@onBlurFunction}

  }), /*#__PURE__*/React.createElement(View, {
    style: GlobalStyles.viewButton
  }, /*#__PURE__*/React.createElement(Button, {
    color: CUSTOMON.COLOR,
    title: "Login",
    onPress: () => {}
  })), /*#__PURE__*/React.createElement(Text, {
    style: styles.text
  }, "Forgot Password?"), /*#__PURE__*/React.createElement(View, {
    style: GlobalStyles.separator
  }, " Or"), /*#__PURE__*/React.createElement(View, {
    style: GlobalStyles.viewButton
  }, /*#__PURE__*/React.createElement(Button, {
    color: CUSTOMON.COLOR,
    title: "Create Account",
    onPress: () => {}
  })));
}; //const DEVICE_WIDTH = Dimensions.get('window').width;
//const DEVICE_HEIGHT = Dimensions.get('window').height;


const styles = StyleSheet.create({
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
export default Form;
//# sourceMappingURL=Form.js.map