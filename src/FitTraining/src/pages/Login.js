import React, { useState } from 'react';
import { StyleSheet, View, Alert, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, Appbar } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';
import Header from '../components/Header';


import { useNavigation } from '@react-navigation/native';
import {useUser} from '../contexts/UserContext';

import {login} from '../services/auth.services';
const Login = () => {

  const navigation = useNavigation();
  const {setSigned, setName} = useUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const handleLogin= () => {

    login({
      email: email,
      password: password
    }).then( res => {
      console.log(res);

      if(res && res.user){
        setSigned(true);
        setName(res.user.name);
        AsyncStorage.setItem('@TOKEN_KEY', res.accessToken).then();
      }else{
         Alert.alert('Atenção', 'Usuário ou senha inválidos!');
      }

    });
    
  }

  return (
    <Container>

      
    <Appbar.Header style={styles.header}>
     
      <Appbar.Content color="white" title="Login" />
    
      <Logo/>
   
    </Appbar.Header>
    


      <Body>
        <Input
          label="Email"
             style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="account" />}
        />
        <Input
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          left={<TextInput.Icon name="key" />}
        />
         <TouchableOpacity
        style={styles.buttonLogin}
         onPress={handleLogin}
          
      >
        <Text style={styles.buttonTextLog}>LOGIN</Text>
      </TouchableOpacity>
        <TouchableOpacity
        style={styles.registerLink}
          mode="outlined"
          onPress={() => navigation.navigate('Register')}>
         <Text  style={styles.registerText}>
          Não tem Login? Registre-se.
        </Text>
        </TouchableOpacity>
      </Body>
    </Container>
  );
}; 

const styles = StyleSheet.create({

  header: {
    alignItems: 'center',
    
    
     backgroundColor:'#c0ccda',
  },
  input:{
       backgroundColor:'#FFF',
    marginBottom: 8,
    marginTop:50,

    margin: 8,

  },
    buttonLogin:{
    margin:20,
    alignItems:'center',
    backgroundColor:'#73808f',
    height:45,
   display:'flex',
   justifyContent:'center',
   borderRadius:19



  },
    buttonTextLog:{
    fontSize:14,
    color:'white',
    fontWeight:'500',
    margin:'auto',
    
   
 
   

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

export default Login;
