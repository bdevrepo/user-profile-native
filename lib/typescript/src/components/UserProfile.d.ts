/// <reference types="react" />
declare type GridProfileProps = {
    onPressFunction: Function;
    accountPage: String;
    logoutPage: String;
    userDetail: {
        name: "";
        email: "";
        avatar_url: '';
    };
};
declare const UserProfile: {
    ({ onPressFunction, accountPage, logoutPage, userDetail }: GridProfileProps): JSX.Element;
    defaultProps: {
        userDetail: {
            name: string;
            email: string;
            avatar_url: string;
        };
    };
};
export default UserProfile;
