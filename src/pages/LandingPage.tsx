import React from 'react';
import { View,  Alert } from 'react-native';
//import Header from '../components/Header';
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
        buttonPressFuncion: function () { () => Alert },
        imgSource: '../assets/img/BWalletH.svg'
    } 

    /* const callBackUser =(data:any) => {
        //console.log('teste', data);
        allData["user"]=data;
    } */
    /* const submitHandler =() => {
        props.parentDash(allData);
    } */
    return (<View >
        <View >
            {/* <Header menu={menu} /> */}
        </View>
        <View >
             <HeroSection   title={heroSection.title} //Comentar caso nao funcionar title ate imgsource
                subtitle={heroSection.subtitle}
                buttonTitle={heroSection.buttonTitle}
                buttonPressFuncion={heroSection.buttonPressFuncion}
                imgSource={heroSection.imgSource}  
            /> 
        </View>
        <View >
            <ClientsSection />
        </View>
        <View >
            <AboutUsSection />
        </View>
        <View >
            <CountsSection />
        </View>
        <View >
            <ServicesSection />
        </View>
        <View >
            <MoreServicesSection />
        </View>
        <View >
            <FeaturesSection />
        </View>
        <View >
            <TestimonialsSection />
        </View>
        <View >
            <PortfolioSection />
        </View>
        <View >
            <TeamSection />
        </View>
        <View >
            <PricingSection />
        </View>
        <View >
            <FAQSection />
        </View>
        <View >
            <ContactSection />
        </View>
        <View >
            <Footer />
        </View>
    </View>
    );
}

export default LandingPage;












