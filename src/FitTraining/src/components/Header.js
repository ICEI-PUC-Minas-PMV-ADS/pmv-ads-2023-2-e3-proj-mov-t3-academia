import React from 'react';
import { Appbar } from 'react-native-paper';
import {StyleSheet, View, Image} from 'react-native';

const Header = ({ goBack, children}) => {
  return (
    <Appbar.Header style={styles.header}>
      {
        goBack && 
        <Appbar.BackAction color="white" onPress={goBack} />
      }
       <Image
          source={require('../assets/fitTraining.png')}
          style={styles.logo}
        />
      <Appbar.Content title={'Fit Training'} />
      {children}
    </Appbar.Header>
  );
};

export default Header;
