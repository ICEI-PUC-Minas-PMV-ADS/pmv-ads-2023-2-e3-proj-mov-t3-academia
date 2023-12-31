import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { DrawerItemList, createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useUser } from '../contexts/UserContext'
import {
    SimpleLineIcons,
} from "@expo/vector-icons";

import StackNavigator from '../navigations/StackNavigator';
import { userImage } from '../pages/Profile'
import MenuInicialTreinos from '../components/MenuInicialTreinos';
import Profile from '../pages/Profile';
import ListaParaPdf from '../pages/ListaParaPdf';
import Login, { login } from '../pages/Login';
import BemVindo from '../pages/telasIniciais/BemVindo';

import Logout from '../pages/Logout';



const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ route, navigation }) => {

    const { name } = useUser();

  return (
    <Drawer.Navigator
        drawerContent={
            (props) => {
               
                return (
                    
                    <SafeAreaView>
                        <View style={{
                            height: 240,
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            borderBottomColor: "#2b3b45",
                            borderBottomWidth: 1,
                            paddingTop: 15
                        }}
                        >
        
                            <Image
                              source={{
                                uri: 'https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg' }}
                              style={{
                                height: 130,
                                width:130,
                                borderRadius:65,
                              }}
                            />
                            <View>
                            <Text 
                             style={{
                                fontSize: 22,
                                marginVertical: 6,
                                fontWeight: "bold",
                                color: "#fff"
                             }}
                             >

                            <Text>{name}</Text>
                              
                            </Text>
                            </View>
                            <Text
                             style={{
                                fontSize: 16,
                                color: "#fff",
                                paddingBottom: 10
                             }} 
                             >Aluno
                            </Text>
                        </View>

                        
                        <DrawerItemList {...props}/>
                    </SafeAreaView>
                )
            }
        }

        screenOptions={{
            drawerStyle: {
                backgroundColor: "#354650",
                width: 250,

            },
            headerStyle: {
                backgroundColor: "#4D6371",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            },
            drawerActiveTintColor: "blue",
            drawerLabelStyle: {
                color: "#fff"
            }
        }}
        >

            <Drawer.Screen
                name='TelaInicial'
                options={{
                    drawerLabel: "Tela Inicial",
                    title: "Tela Inicial",
                    drawerIcon: () => (
                        <SimpleLineIcons name="home" size={20} color="#fff"/>
                    )
                }}
                component={StackNavigator}
            />

            <Drawer.Screen
                name='Profile'
                options={{
                    drawerLabel: "Perfil",
                    title: "Perfil",
                    drawerIcon: () => (
                        <SimpleLineIcons name="people" size={20} color="#fff"/>
                    )
                }}
                component={Profile}
            />

            <Drawer.Screen
                name='TreinoPdf'
                options={{
                    drawerLabel: "Compartilhar ficha",
                    title: "Compartilhe seu treino",
                    drawerIcon: () => (
                        <SimpleLineIcons name="share" size={20} color="#fff"/>
                    )
                }}
                component={ListaParaPdf}
            />
            
            <Drawer.Screen 
                name='Logout'
                options={{
                    drawerLabel: "Sair",
                    title: "Sair",
                    drawerIcon: () => (
                        <SimpleLineIcons name="logout" size={20} color="#fff"/>
                    )
                }}
                component={Logout}
            />
        
            <Drawer.Screen
            name="Login"
            component={Login}
            options={{
                drawerItemStyle: { height: 0 },
                drawerLabel: "Login",
                 headerShown: false, 
            }}
            />

            </Drawer.Navigator>

    )
  };
    

export default DrawerNavigator;
