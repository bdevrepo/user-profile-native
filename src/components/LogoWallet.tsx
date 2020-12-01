import React from 'react';
//import PropTypes from 'prop-types';
import {StyleSheet, 
  View, 
  Image
} from 'react-native';

//import logoImg from '../assets/img/BWalletV.svg';

const LogoWallet = () => {
    return (
      <View style={styles.container}>
         <Image source={require('../assets/img/BWalletH.svg')} style={styles.image} />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    //flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor:'#79a5f2'
  },
  image: {
    width: 100,
    height: 30,
    marginTop:40
  },

});

export default LogoWallet;