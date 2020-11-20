/// <reference types="react" />
declare type GridProfileProps = {
    onPressFunction: Function;
    accountPage: String;
    logoutPage: String;
};
declare const UserProfile: ({ onPressFunction, accountPage, logoutPage }: GridProfileProps) => JSX.Element;
export default UserProfile;
