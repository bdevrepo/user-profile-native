/// <reference types="react" />
declare type GridMenuProps = {
    onPressFunction: Function;
    listApp: [{
        id: 0;
        name: '';
        appLogo: '';
        appUrl: '';
    }];
};
declare const UserGridMenu: {
    ({ onPressFunction, listApp }: GridMenuProps): JSX.Element;
    navigationOptions: {
        title: string;
    };
    defaultProps: {
        listApp: {
            id: number;
            name: string;
            appLogo: string;
            appUrl: string;
        }[];
    };
};
export default UserGridMenu;
