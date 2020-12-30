import { Link } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FloatingLabelInput from './FloatingLabelInput';

var aboutUsData = {};


/* type AboutUsSectionprops = {
    menu: [{ name: String, component: Function},
    ]
} */

const AboutUsSection = (props: any) => {
  const [aboutUs, setAboutUs] = useState("");

  useEffect(() => {
    const AboutUsSection = {
      aboutUs: '',
    }

    AboutUsSection["aboutUs"] = aboutUs;
  });

  return (
    <View >
      <View >
        <h2>About Us</h2>
      </View >
      <View  >
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <br></br>
      </View>
      <View >
        <Text>*Ullamco laboris nisi ut aliquip ex ea commodo consequat</Text>
        <Text>*Duis aute irure dolor in reprehenderit in voluptate velit</Text>
        <Text >*Ullamco laboris nisi ut aliquip ex ea commodo consequa</Text>
        <br></br>
      </View>
      <View >
        <Text> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View>
    </View >
  );
};
const styles = StyleSheet.create({

  h1: {
    color: '#000000',
    fontSize: 20,
  },

  h2: {
    color: '#FAE042',
    fontSize: 10,
    marginTop: 4,
  },

  image: {
    width: 200,
    height: 150,
    justifyContent: 'center',
  },
  container: {
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  item: {
    width: '50%' // is 50% of container width
  }

});

/* AboutUsSection.defaultProps = {
    menu: [{ name: 'Angola', component: Home() },
    ]
} */
export default AboutUsSection;