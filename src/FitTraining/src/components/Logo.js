import React from 'react';
import {StyleSheet, Image} from 'react-native';

const Logo = () =>{
  return    <Image
          source={require('../assets/fitTraining.png')}
          style={styles.logo}
        />
}
   
   const styles = StyleSheet.create({
       logo:{

    width:65,
    height:55

  },
   })
   
  export default Logo