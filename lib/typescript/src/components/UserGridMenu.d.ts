/// <reference types="react" />
declare type GridMenuProps = {
    onPressFunction: Function;
};
declare const UserGridMenu: {
    ({ onPressFunction }: GridMenuProps): JSX.Element;
    navigationOptions: {
        title: string;
    };
};
export default UserGridMenu;
