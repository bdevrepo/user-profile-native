/// <reference types="react" />
declare type HeroSectionProps = {
    title: string;
    subtitle: string;
    buttonTitle: string;
    buttonPressFuncion: Function;
    imgSource: string;
};
declare const HeroSection: {
    ({ title, subtitle, buttonTitle, imgSource, buttonPressFuncion }: HeroSectionProps): JSX.Element;
    defaultProps: {
        title: string;
        subtitle: string;
        buttonTitle: string;
        buttonPressFuncion: () => void;
        imgSource: string;
    };
};
export default HeroSection;
