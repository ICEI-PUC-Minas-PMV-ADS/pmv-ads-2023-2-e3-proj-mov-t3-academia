import * as React from "react";
import { BottomNavigation, Text, List } from "react-native-paper";
import Ionicons from '@expo/vector-icons/Ionicons';

import TelaInicial from "../pages/telasIniciais/TelaInicial";
import TreinoB from "../pages/telasIniciais/TreinoB";
import TreinoC from "../pages/telasIniciais/TreinoC";

const MenuInicialTreinos = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'telaInicial', title: 'Treino A', icon: 'dumbbell'},
        { key: 'treinoB', title: 'Treino B', icon: 'dumbbell'},
        { key: 'treinoC', title: 'Treino C', icon: 'dumbbell'}
    ]);

    const renderScene = BottomNavigation.SceneMap({
        telaInicial: TelaInicial,
        treinoB: TreinoB,
        treinoC: TreinoC
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            barStyle={{
                position: 'relative',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#73808f'
            }}
        />
    );
};
export default MenuInicialTreinos;