import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Animatable from "react-native-animatable"

const BemVindo = ({ navigation }) => {
  const irParaLogin = () => {
 
    navigation.navigate('Login');
  };

  return (

  

    <View style={styles.container}>

<View style={styles.containerLogo}>
    <Animatable.Image style={styles.logo}
    animation="flipInY"
   source={require('../../assets/fitTraining.png')}
    resizeMode='contain'
    />
</View>

<Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>

<Text style={styles.titulo}>Bem-vindo a Fit Training</Text>
<Text  style={styles.subtitulo}>Monte suas fichas de treino  da maneira que quiser!</Text>
<Text style={{color:'gray'}}>Faça o login para começar</Text>
      <TouchableOpacity  style={styles.button} title="Começar" onPress={irParaLogin}>
<Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>

</Animatable.View>
    </View>



  );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
    backgroundColor:'#c0ccda',
      alignItems: 'center',
    },
    titulo: {
      fontSize: 30,
      marginBottom: 12,
      fontWeight:'bold',
      marginTop:28
    }, 
    subtitulo:{
fontSize:23,
marginBottom: 12,
    },

    containerLogo:{
       flex:2,
       alignItems: 'center',
       justifyContent:'center'
    },
containerForm:{
flex:1,
backgroundColor:'white',
width:'100%',
borderTopLeftRadius:25,
borderTopRightRadius:25,
paddingStart:'5%',
paddingEnd:'5%'
},
    button:{
position:'absolute',
backgroundColor:'#c0ccda',
borderRadius:50,
paddingVertical:8,
width:'60%',
alignSelf:'center',
bottom:'17%',
alignItems:'center'
    },

    buttonText:{
fontSize:18,
fontWeight:'bold'
    }
  });

export default BemVindo