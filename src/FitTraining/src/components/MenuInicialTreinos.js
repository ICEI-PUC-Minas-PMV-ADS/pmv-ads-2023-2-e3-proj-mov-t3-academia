import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";

import TelaInicial from "../pages/TelaInicial";
import TreinoB from "../pages/TreinoB";
import TreinoC from "../pages/TreinoC";

const MenuInicialTreinos = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'telaInicial', title: 'Treino A'},
        { key: 'treinoB', title: 'Treino B'},
        { key: 'treinoC', title: 'Treino C'}
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
                backgroundColor: '#c0ccda'
            }}
        />
    );
};
export default MenuInicialTreinos;