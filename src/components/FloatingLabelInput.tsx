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

type propTypes = {
    title: string,
    value: any,
    onChangeText: Function,
    keyboardType: any,
    titleActiveSize: number, // to control size of title when field is active
    titleInActiveSize: number, // to control size of title when field is inactive
    titleActiveColor: string, // to control color of title when field is active
    titleInactiveColor: string, // to control color of title when field is active
    textInputStyles: object,
    otherTextInputProps: object
  }

const FloatingLabelInput= ({
    title,
    value,
    onChangeText,
    keyboardType,
    titleActiveSize, // to control size of title when field is active
    titleInActiveSize, // to control size of title when field is inactive
    titleActiveColor, // to control color of title when field is active
    titleInactiveColor, // to control color of title when field is active
    textInputStyles ,
    otherTextInputProps
  }:propTypes) => {

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
      setIsFieldActive(true );
      Animated.timing(position, {
        toValue: 1,
        duration: 150,
        useNativeDriver:true
      }).start();
    }
  }

  const _handleBlur = () => {
    if (isFieldActive && !value) {
        setIsFieldActive( false );
      Animated.timing(position, {
        toValue: 0,
        duration: 150,
        useNativeDriver:true
      }).start();
    }
  }

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
        outputRange: [14, 0],
      }),
      fontSize: isFieldActive ? titleActiveSize : titleInActiveSize,
      color: isFieldActive ? titleActiveColor : titleInactiveColor,
    }
  }

    return (
      <View >
        <Animated.Text
          style = {[Styles.titleStyles, _returnAnimatedTitleStyles()]}
        >
          {title}
        </Animated.Text>
        <TextInput
          value = {value}
          style = {[GlobalStyles.baseInput, textInputStyles]}
          underlineColorAndroid = 'transparent'
          onFocus = {_handleFocus}
          onBlur = {_handleBlur}
          onChangeText = {(text) => {onChangeText(text)}}
          keyboardType = {keyboardType}
          {...otherTextInputProps}
        />
      </View>
    )
  
}

const Styles = StyleSheet.create({
  titleStyles: {
    fontFamily: 'Avenir-Medium',
    left: 4,
  }
})

FloatingLabelInput.defaultProps = {
    keyboardType: 'default',
    titleActiveSize: 11.5,
    titleInActiveSize: 15,
    titleActiveColor: 'black',
    titleInactiveColor: 'dimgrey',
    textInputStyles: {}, 
    otherTextInputProps: {},
  }

export default FloatingLabelInput;