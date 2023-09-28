import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, TouchableOpacity, Text, Image } from 'react-native';
import { Appbar } from 'react-native-paper';




 const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');


 const handleGoogleLogin = () => {
    // Lógica de login com o Google aqui
  };

  const handleFacebookLogin = () => {
    // Lógica de login com o Facebook aqui
  };
 


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

  };

  return (
    <View style={styles.container}>
    <Appbar.Header style={styles.header}>
      <Appbar.BackAction color="white" onPress={_goBack} />
      <Appbar.Content color="white" title="Login" />
      <Image
          source={require('../assets/fitTraining.png')}
          style={styles.logo}
        />
      
   
    </Appbar.Header>

    <View style={styles.inputContainer}>
    
     <TextInput
     
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          underlineColorAndroid="transparent" 
        />
        <TextInput
        
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          underlineColorAndroid="transparent" 
        />
        
        </View>
        <TouchableOpacity
        style={styles.buttonLogin}
        onPress={handleLogin}
      >
        <Text style={styles.buttonTextLog}>LOG IN</Text>
      </TouchableOpacity>
 <TouchableOpacity
        style={styles.registerLink}
        
      >
        <Text style={styles.registerText}>
          Não tem Login? Registre-se.
        </Text>
      </TouchableOpacity>
           

    </View>
  );
}



const styles = StyleSheet.create({

  container:{
    backgroundColor:'#303030',
    flex:1,
    

  },

  header:{
    backgroundColor:'#c0ccda'

  },

  input:{
    color:'white',
    margin: 15,
    fontSize:19,
     borderBottomWidth: 1,
    borderBottomColor: 'gray', 
      marginBottom: 16, 
   
    
  },

  inputContainer:{
    marginTop: 50,

  },

  buttonLogin:{
    margin:25,
    alignItems:'center',
    backgroundColor:'#73808f',
    height:45,
   display:'flex',
   justifyContent:'center',



  },

  buttonTextLog:{
    fontSize:16,
    color:'white',
    fontWeight:'500',
    margin:'auto',
    
   
 
   

  },

  logo:{

    width:65,
    height:55

  },

  registerLink: {
    alignItems: 'center',
    marginTop: 20,
  },

  registerText: {
    fontSize: 16,
    color: 'white',
    textDecorationLine: 'none', 
  },


});