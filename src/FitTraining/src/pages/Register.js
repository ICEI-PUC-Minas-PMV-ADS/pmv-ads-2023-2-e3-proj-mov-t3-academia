import React, { useState } from 'react';
import { StyleSheet, View, Alert, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button, Headline, Appbar } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';

import { useNavigation } from '@react-navigation/native';

import {register} from '../services/auth.services';

const Register = () => {

  const navigation = useNavigation();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {

    register({
      name: name,
      email: email,
      password: password
    }).then( res => {
      console.log(res);

      if(res){

        Alert.alert('Atenção', 'Usuário Cadastrado com sucesso!',[
          { text: "OK", onPress: () => navigation.goBack() }
        ]);

      }else{

         Alert.alert('Atenção', 'Usuário não cadastrado! Tente novamente mais tarde =D');
      }

    });
    
  }

  return (
    <Container>
        <View style={styles.container}>
    <Appbar.Header style={styles.header}>
      <Appbar.BackAction color="white"  onPress={() => navigation.navigate('Login')} />
      <Appbar.Content color="white" title="Registrar" />
    
      <Logo/>
   
    </Appbar.Header>
    
    </View>
     

      <Body>
      <Input
          label="Nome"
              style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          left={<TextInput.Icon name="account" />}
        />
        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="email" />}
        />
        <Input
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          left={<TextInput.Icon name="key" />}
        />
        <TouchableOpacity
           style={styles.buttonRegister}
          mode="contained"
          onPress={handleRegister}><Text style={styles.registerText}>
          REGISTRAR</Text>
        </TouchableOpacity>
     <TouchableOpacity
        style={styles.registerLink}
          mode="outlined"
        
          onPress={() => navigation.goBack()}>
         <Text  style={styles.cancelarText}>
          Cancelar
        </Text>
        </TouchableOpacity>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({

  header:{
    backgroundColor:'#c0ccda'

  },
    input:{
       backgroundColor:'#FFF',
    marginBottom: 8,
    marginTop:50,

    margin: 8,

  },
      buttonRegister:{
    margin:20,
    alignItems:'center',
    backgroundColor:'#73808f',
    height:45,
   display:'flex',
   justifyContent:'center',
   color:'white',
      borderRadius:19,
   



  },

  registerText:{
     fontSize: 13,
  color: 'white',
    textDecorationLine: 'none', 
       fontWeight:'500',
  },
  cancelarText: {
    fontSize: 16,
    color: 'white',
    textDecorationLine: 'none', 
       fontWeight:'500',
    
  },
    registerLink: {
    alignItems: 'center',
    marginTop: 20,
    
  },

});

export default Register;
