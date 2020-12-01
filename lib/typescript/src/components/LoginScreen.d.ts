/// <reference types="react" />
declare type PropsType = {
    userNameLabel: string;
    passwordLabel: string;
    handleUsernaChange: Function;
    handlePasswordChange: Function;
    loginButtonTitle: string;
    handleLoginButton: Function;
    createAccountLabel: string;
    handleCreateAccountButton: Function;
    forgotPasswordLabel: string;
    handleForgotPassword: Function;
};
declare const LoginScreen: {
    ({ userNameLabel, passwordLabel, handleUsernaChange, handlePasswordChange, loginButtonTitle, handleLoginButton, createAccountLabel, handleCreateAccountButton, forgotPasswordLabel, handleForgotPassword }: PropsType): JSX.Element;
    defaultProps: {
        userNameLabel: string;
        passwordLabel: string;
        loginButtonTitle: string;
        createAccountLabel: string;
        forgotPasswordLabel: string;
    };
};
export default LoginScreen;
