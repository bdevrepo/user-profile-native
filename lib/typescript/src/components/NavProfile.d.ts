/// <reference types="react" />
declare type NavProfileProps = {
    accountPage: String;
    logoutPage: String;
};
declare const NavProfile: ({ accountPage, logoutPage }: NavProfileProps) => JSX.Element;
export default NavProfile;
