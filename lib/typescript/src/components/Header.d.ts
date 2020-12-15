/// <reference types="react" />
declare type HeaderProps = {
    menu: [{
        name: String;
        component: Function;
    }];
};
declare const Header: {
    ({ menu }: HeaderProps): JSX.Element;
    defaultProps: {
        menu: {
            name: string;
            component: JSX.Element;
        }[];
    };
};
export default Header;
