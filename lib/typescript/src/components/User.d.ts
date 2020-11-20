/// <reference types="react" />
declare const User: {
    (props: any): JSX.Element;
    defaultProps: {
        listDocType: {
            label: string;
            value: string;
        }[];
        listCountry: {
            label: string;
            value: string;
        }[];
    };
};
export default User;
