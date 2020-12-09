"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _GlobalStyles = _interopRequireDefault(require("./../assets/style/GlobalStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  const [isFieldActive, setIsFieldActive] = (0, _react.useState)(false);
  const position = new _reactNative.Animated.Value(value ? 1 : 0);
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

      _reactNative.Animated.timing(position, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true
      }).start();
    }
  };

  const _handleBlur = () => {
    if (isFieldActive && !value) {
      setIsFieldActive(false);

      _reactNative.Animated.timing(position, {
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

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Animated.Text, {
    style: [Styles.titleStyles, _returnAnimatedTitleStyles()]
  }, title), /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, _extends({
    value: value,
    style: [_GlobalStyles.default.baseInput, textInputStyles],
    underlineColorAndroid: "transparent",
    onFocus: _handleFocus,
    onBlur: _handleBlur,
    onChangeText: text => {
      onChangeText(text);
    },
    keyboardType: keyboardType
  }, otherTextInputProps)));
};

const Styles = _reactNative.StyleSheet.create({
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
var _default = FloatingLabelInput;
exports.default = _default;
//# sourceMappingURL=FloatingLabelInput.js.map