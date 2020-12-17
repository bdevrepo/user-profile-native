"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _HeroSection = _interopRequireDefault(require("../components/HeroSection"));

var _ClientsSection = _interopRequireDefault(require("../components/ClientsSection"));

var _AboutUsSection = _interopRequireDefault(require("../components/AboutUsSection"));

var _CountsSection = _interopRequireDefault(require("../components/CountsSection"));

var _ServicesSection = _interopRequireDefault(require("../components/ServicesSection"));

var _MoreServicesSection = _interopRequireDefault(require("../components/MoreServicesSection"));

var _FeaturesSection = _interopRequireDefault(require("../components/FeaturesSection"));

var _TestimonialsSection = _interopRequireDefault(require("../components/TestimonialsSection"));

var _PortfolioSection = _interopRequireDefault(require("../components/PortfolioSection"));

var _TeamSection = _interopRequireDefault(require("../components/TeamSection"));

var _PricingSection = _interopRequireDefault(require("../components/PricingSection"));

var _FAQSection = _interopRequireDefault(require("../components/FAQSection"));

var _ContactSection = _interopRequireDefault(require("../components/ContactSection"));

var _Footer = _interopRequireDefault(require("../components/Footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import Header from '../components/Header';

/*const Home = () => {
    return (<Text>Home!</Text>);
}*/
//var menu: [{ name: 'Angelo', component: Home },];
const LandingPage = () => {
  //  Header
  //menu[0].name = 'Angelo';
  //menu[0].component = Home;
  // HeroSection
  const heroSection = {
    title: 'Grow your business',
    subtitle: 'We are team of talanted',
    buttonTitle: 'Get Started',
    buttonPressFuncion: function () {
      () => _reactNative.Alert;
    },
    imgSource: '../assets/img/BWalletH.svg'
  };
  /* const callBackUser =(data:any) => {
      //console.log('teste', data);
      allData["user"]=data;
  } */

  /* const submitHandler =() => {
      props.parentDash(allData);
  } */

  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, null), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_HeroSection.default, {
    title: heroSection.title //Comentar caso nao funcionar title ate imgsource
    ,
    subtitle: heroSection.subtitle,
    buttonTitle: heroSection.buttonTitle,
    buttonPressFuncion: heroSection.buttonPressFuncion,
    imgSource: heroSection.imgSource
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_ClientsSection.default, null)), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_AboutUsSection.default, null)), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_CountsSection.default, null)), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_ServicesSection.default, null)), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_MoreServicesSection.default, null)), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_FeaturesSection.default, null)), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_TestimonialsSection.default, null)), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_PortfolioSection.default, null)), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_TeamSection.default, null)), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_PricingSection.default, null)), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_FAQSection.default, null)), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_ContactSection.default, null)), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_Footer.default, null)));
};

var _default = LandingPage;
exports.default = _default;
//# sourceMappingURL=LandingPage.js.map