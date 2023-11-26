import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { useUser } from '../contexts/UserContext'
import { useNavigation } from '@react-navigation/native';

const Profile = ({navigation}) => {
  const { name } = useUser();
  const [userName, setUserName] = useState(name);
  const [userImage, setUserImage] = useState();
  const [newUserName, setNewUserName] = useState('');

  const changeUserName = () => {
    setUserName(newUserName);
    setNewUserName('');
  };

  const changeUserImage = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
          aspect: [4, 4],
          allowsEditing: false,
          quality: 1,
      });
      if (!result.canceled) {
            setUserImage(result.assets[0].uri);
        }
  };

  const salvarPerfil = () => {
    navigation.navigate('Main', {
      newUserName,
      userImage,
    });
  };


  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 45 }}>
      
      <TouchableOpacity onPress={changeUserImage}>
      <Image 
        source={{uri:userImage}} style={{ width: 170, height: 170, 
        borderRadius: 85, borderWidth:2 , borderColor: "black" }} 
      />

      <View style={{
        position: 'absolute',
        bottom: 0,
        right: 10,
        zIndex: 9999
      }}>
        <MaterialIcons
          name="photo-camera"
          size={32}
          color="black"
        ></MaterialIcons>
      </View>
      </TouchableOpacity>

      <Text style={{fontSize:30, fontWeight:'bold', marginTop: 20}}>{userName}</Text>

    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30}}>
      <TextInput style={{width: 170, height: 35, borderWidth:1,  
      borderColor: "black", textAlign:'center', }}
        placeholder="Novo Nome"
        value={newUserName}
        onChangeText={(text) => setNewUserName(text)}
      />

      <Button color={'#909aa6'} title="Mudar nome"
        onPress={changeUserName}
        style={{marginLeft:30, }}></Button>

    </View>
      
    </View>
  );
};

export default Profile;