import React, { useState } from 'react';
import { List } from 'react-native-paper';
import { FlatList, View, StyleSheet } from 'react-native';

import Header from '../components/Header';
import BodyTelasIniciais from '../components/BodyTelasIniciais';
import ContainerTelasIniciais from '../components/ContainerTelasIniciais';

const DATA = [
  {
    id: 1,
    descricao: "Crucifixo na máquina",
    repeticoes: 12,
    series: 4,
  },
  {
    id: 1,
    descricao: "Agachamento",
    repeticoes: 10,
    series: 3,
  },
  {
    id: 1,
    descricao: "Supino reto",
    repeticoes: 12,
    series: 4,
  },
];

const TelaInicial = () => {

  const renderItem = ({ item }) => (
    <List.Item
      title={item.descricao}
      description={"Repetição:" + item.repeticoes + " Séries:" + item.series}
      right={props => <List.Icon {...props} icon="folder" />}
    />
  )

  return (

    <ContainerTelasIniciais>
      <Header title={"Treino A"} />
      <BodyTelasIniciais>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </BodyTelasIniciais>
    </ContainerTelasIniciais>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  }
})


export default TelaInicial;