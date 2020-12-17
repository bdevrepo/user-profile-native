import React from 'react';
import { View, Alert } from 'react-native'; //import Header from '../components/Header';

import HeroSection from '../components/HeroSection';
import ClientsSection from '../components/ClientsSection';
import AboutUsSection from '../components/AboutUsSection';
import CountsSection from '../components/CountsSection';
import ServicesSection from '../components/ServicesSection';
import MoreServicesSection from '../components/MoreServicesSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PortfolioSection from '../components/PortfolioSection';
import TeamSection from '../components/TeamSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
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
      () => Alert;
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

  return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(View, null), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(HeroSection, {
    title: heroSection.title //Comentar caso nao funcionar title ate imgsource
    ,
    subtitle: heroSection.subtitle,
    buttonTitle: heroSection.buttonTitle,
    buttonPressFuncion: heroSection.buttonPressFuncion,
    imgSource: heroSection.imgSource
  })), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(ClientsSection, null)), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(AboutUsSection, null)), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(CountsSection, null)), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(ServicesSection, null)), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(MoreServicesSection, null)), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(FeaturesSection, null)), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(TestimonialsSection, null)), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(PortfolioSection, null)), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(TeamSection, null)), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(PricingSection, null)), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(FAQSection, null)), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(ContactSection, null)), /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(Footer, null)));
};

export default LandingPage;
//# sourceMappingURL=LandingPage.js.map