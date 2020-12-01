/// <reference types="react" />
declare type PropsType = {
    userNameLabel: string;
    passwordLabel: string;
    handleUsernaChange: Function;
    handlePasswordChange: Function;
    createAccountLabel: string;
    handleCreateAccountButton: Function;
    alreadyHasAccountLabel: string;
    alreadyHasAccount: Function;
};
declare const SignupScreen: {
    ({ userNameLabel, passwordLabel, handleUsernaChange, handlePasswordChange, createAccountLabel, handleCreateAccountButton, alreadyHasAccountLabel, alreadyHasAccount }: PropsType): JSX.Element;
    defaultProps: {
        userNameLabel: string;
        passwordLabel: string;
        createAccountLabel: string;
        alreadyHasAccountLabel: string;
    };
};
export default SignupScreen;
