import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuInicialTreinos from '../components/MenuInicialTreinos';
import TelaCriarExercicioA from '../pages/telasIniciais/TelaCriarExercicioA';
import TelaCriarExercicioB from '../pages/telasIniciais/TelaCriarExercicioB';
import TelaCriarExercicioC from '../pages/telasIniciais/TelaCriarExercicioC';
import TreinoB from '../pages/telasIniciais/TreinoB';
import TreinoC from '../pages/telasIniciais/TreinoC';
import IniciarTreino from '../pages/telasIniciais/IniciarTreino';
import TelaInicial from '../pages/telasIniciais/TelaInicial';

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
      <Stack.Screen
        name="TelaCriarExercicioA"
        component={TelaCriarExercicioA}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="TelaCriarExercicioB"
        component={TelaCriarExercicioB}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="TelaCriarExercicioC"
        component={TelaCriarExercicioC}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="TreinoB"
        component={TreinoB}
        options={{
          header: () => null,
        }}
      />
            <Stack.Screen
        name="TreinoC"
        component={TreinoC}
        options={{
          header: () => null,
        }}
        />
        <Stack.Screen
        name="IniciarTreino"
        component={IniciarTreino}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
