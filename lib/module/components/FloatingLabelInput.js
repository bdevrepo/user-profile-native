function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// https://medium.com/@farid12ansari7/floating-title-or-placeholder-text-input-field-react-native-5fb5932669d

/*
These four props are required:
1- attrName: state variable name where value of input is stored.
2- title: floating Text(title)
3- value: value to be shown in input field
4- updateMasterState: function to update value upon entering in input field.
*/
import React, { useState } from 'react';
import { View, Animated, StyleSheet, TextInput } from 'react-native';
import GlobalStyles from './../assets/style/GlobalStyles';

const FloatingLabelInput = ({
  title,
  value,
  onChangeText,
  keyboardType,
  titleActiveSize,
  // to control size of title when field is active
  titleInActiveSize,
  // to control size of title when field is inactive
  titleActiveColor,
  // to control color of title when field is active
  titleInactiveColor,
  // to control color of title when field is active
  textInputStyles,
  otherTextInputProps
}) => {
  const [isFieldActive, setIsFieldActive] = useState(false);
  const position = new Animated.Value(value ? 1 : 0);
  /* constructor(props) {
    super(props);
    const { value } = this.props;
    this.position = new Animated.Value(value ? 1 : 0);
    this.state = {
      isFieldActive: false,
    }
  } */

  const _handleFocus = () => {
    if (!isFieldActive) {
      setIsFieldActive(true);
      Animated.timing(position, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true
      }).start();
    }
  };

  const _handleBlur = () => {
    if (isFieldActive && !value) {
      setIsFieldActive(false);
      Animated.timing(position, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true
      }).start();
    }
  };
  /* const _onChangeText = (updatedValue:any) => {
    //const { attrName, updateMasterState } = propTypes; 
    updateMasterState(attrName, updatedValue);
  } */


  const _returnAnimatedTitleStyles = () => {
    // const { isFieldActive } = this.state;

    /*  const {
       titleActiveColor, titleInactiveColor, titleActiveSize, titleInActiveSize
     } = props; */
    return {
      top: position.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 0]
      }),
      fontSize: isFieldActive ? titleActiveSize : titleInActiveSize,
      color: isFieldActive ? titleActiveColor : titleInactiveColor
    };
  };

  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Animated.Text, {
    style: [Styles.titleStyles, _returnAnimatedTitleStyles()]
  }, title), /*#__PURE__*/React.createElement(TextInput, _extends({
    value: value,
    style: [GlobalStyles.baseInput, textInputStyles],
    underlineColorAndroid: "transparent",
    onFocus: _handleFocus,
    onBlur: _handleBlur,
    onChangeText: text => {
      onChangeText(text);
    },
    keyboardType: keyboardType
  }, otherTextInputProps)));
};

const Styles = StyleSheet.create({
  titleStyles: {
    fontFamily: 'Avenir-Medium',
    left: 4
  }
});
FloatingLabelInput.defaultProps = {
  keyboardType: 'default',
  titleActiveSize: 11.5,
  titleInActiveSize: 15,
  titleActiveColor: 'black',
  titleInactiveColor: 'dimgrey',
  textInputStyles: {},
  otherTextInputProps: {}
};
export default FloatingLabelInput;
//# sourceMappingURL=FloatingLabelInput.js.map