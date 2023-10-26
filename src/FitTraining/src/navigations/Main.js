import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuInicialTreinos from '../components/MenuInicialTreinos';


const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="MenuInicialTreinos">
      <Stack.Screen
        name="MenuInicialTreinos"
        component={MenuInicialTreinos}
        options={{
          header: () => null,
        }}
      />
      
    </Stack.Navigator>
  );
};

export default Main;
