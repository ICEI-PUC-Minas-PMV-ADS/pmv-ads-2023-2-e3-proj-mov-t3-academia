// Em MainScreen.js ou onde quer que você tenha a funcionalidade principal após o login
import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reset } from '../navigations/navigationUtils';
import { Login } from '../pages/Login';

const MainScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('@TOKEN_KEY');
      reset(navigation, 'Login');
      navigation.navigate('Login'); 
    } catch (error) {
      console.error('Erro durante o logout:', error);
    }
  };

  return (
    <View style={{alignItems:'center', alignContent:'center', flex:1, justifyContent:'space-evenly',}}>
      <Button color="#73808f" title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default MainScreen;