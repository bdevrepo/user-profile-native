/// <reference types="react" />
declare type propTypes = {
    title: string;
    value: any;
    onChangeText: Function;
    keyboardType: any;
    titleActiveSize: number;
    titleInActiveSize: number;
    titleActiveColor: string;
    titleInactiveColor: string;
    textInputStyles: object;
    otherTextInputProps: object;
};
declare const FloatingLabelInput: {
    ({ title, value, onChangeText, keyboardType, titleActiveSize, titleInActiveSize, titleActiveColor, titleInactiveColor, textInputStyles, otherTextInputProps }: propTypes): JSX.Element;
    defaultProps: {
        keyboardType: string;
        titleActiveSize: number;
        titleInActiveSize: number;
        titleActiveColor: string;
        titleInactiveColor: string;
        textInputStyles: {};
        otherTextInputProps: {};
    };
};
export default FloatingLabelInput;
