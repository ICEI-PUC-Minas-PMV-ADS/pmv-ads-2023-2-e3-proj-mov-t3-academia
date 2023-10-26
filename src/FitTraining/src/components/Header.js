import React from 'react';
import { Appbar } from 'react-native-paper';
import {Image, StyleSheet, View} from 'react-native';
import Logo from './Logo';

const Header = ({ goBack, children, title}) => {
  return (


    <Appbar.Header style={styles.header}>
    
   
      <Appbar.Content color='black' title={title} />
      {children}

      <Logo/>
    </Appbar.Header>

  );
};

const styles = StyleSheet.create({


header: {

   backgroundColor:'#c0ccda',
  

},


});

export default Header;
