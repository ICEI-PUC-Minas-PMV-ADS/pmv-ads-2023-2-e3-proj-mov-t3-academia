import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Register from '../pages/Register';
import BemVindo from '../pages/telasIniciais/BemVindo';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (

    <Stack.Navigator initialRouteName="BemVindo">
      <Stack.Screen
        name="BemVindo"
        component={BemVindo}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />
      
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
