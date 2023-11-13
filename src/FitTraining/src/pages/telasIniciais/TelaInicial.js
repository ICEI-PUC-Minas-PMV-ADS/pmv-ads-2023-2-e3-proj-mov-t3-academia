import React, { useEffect, useState } from 'react';
import { List } from 'react-native-paper';
import { FlatList, Image, StyleSheet, Button } from 'react-native';
import { Table, Row } from 'react-native-table-component';

import Header from '../../components/Header';
import BodyTelasIniciais from '../../components/BodyTelasIniciais';
import ContainerTelasIniciais from '../../components/ContainerTelasIniciais';

import { useNavigation } from '@react-navigation/native';

import { getExerciciosTreinoA } from '../../services/exerciciosTreinoA.services';

import { useIsFocused } from '@react-navigation/native';


const TelaInicial = ({ instrutor, data }) => {

  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [exerciciosTreinoA, setExerciciosTreinoA] = useState([]);

  useEffect(() => {
    getExerciciosTreinoA().then(dados => {
      console.log(dados);
      setExerciciosTreinoA(dados);
    });
  }, [isFocused]);

  const renderItem = ({ item }) => (
    <List.Item
      title={item.nomeExercicio}
      description={"Repetição:" + item.repeticoes + " Séries:" + item.series}
      right={props => <Image source={{ uri: item.image }}
        style={{ width: 90, height: 90 }}
      />}
      onPress={() => navigation.navigate('TelaCriarExercicioA', { item })}
    />
  );

  const tableHead = ['Instrutor:', 'Data:']; // Cabeçalho da tabela
  const tableData = [[instrutor = "Roger", data = "01/11/2023"]]; // Dados da tabela

  return (

    <ContainerTelasIniciais>
      <Header title={"Treino A"} />
      <BodyTelasIniciais>

        <Table borderStyle={{ borderWidth: 1, borderColor: '#73808f' }}>
          <Row
            data={tableHead}
            style={{ height: 40, backgroundColor: '#c0ccda' }}
            textStyle={{ margin: 6, fontWeight: 'bold' }}
          />
          <Row data={tableData[0]} style={{ height: 40 }} textStyle={{ margin: 6 }} />
        </Table>

        <Button
          color='#73808f'
          title={"CRIAR NOVO EXERCÍCIO"}
          onPress={() => navigation.navigate('TelaCriarExercicioA')}
        />

        <FlatList
          data={exerciciosTreinoA}
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