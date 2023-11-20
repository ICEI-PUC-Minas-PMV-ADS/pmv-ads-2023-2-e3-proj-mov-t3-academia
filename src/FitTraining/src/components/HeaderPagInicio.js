import React from 'react';
import { Appbar } from 'react-native-paper';
import {Image, StyleSheet, View} from 'react-native';

const HeaderPagInicio = ({ goBack, children, title}) => {
  return (


    <Appbar.Header style={styles.header}>
    
   
      <Appbar.Content color='black' title={title} />
      {children}

    </Appbar.Header>

  );
};

const styles = StyleSheet.create({


header: {
    backgroundColor:'#c0ccda',
    height:30,
    paddingLeft:140,
},


});

export default HeaderPagInicio;
