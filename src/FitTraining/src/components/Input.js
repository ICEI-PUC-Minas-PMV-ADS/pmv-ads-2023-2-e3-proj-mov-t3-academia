import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const Input = (props) => {
  return (
      <TextInput 
        style={styles.input} 
    
        {...props}      
      />)
    ;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor:'#FFF',
    marginBottom: 8,
    margin: 8,
    marginRight: 20,
    marginLeft:20,
  },
});

export default Input;
