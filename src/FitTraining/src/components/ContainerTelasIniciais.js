import React from 'react';
import {StyleSheet, View} from 'react-native';

const ContainerTelasIniciais = ({children}) =>{
  return <View style={styles.container}>{children}</View>
};

const styles = StyleSheet.create({
 container:{
    flex:1,
   backgroundColor:'#ffffff',
  },
});

export default ContainerTelasIniciais;