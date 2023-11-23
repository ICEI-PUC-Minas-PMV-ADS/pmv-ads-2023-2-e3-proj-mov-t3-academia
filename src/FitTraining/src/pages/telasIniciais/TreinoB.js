import React, { useEffect ,useState } from 'react';
import { List } from 'react-native-paper';
import { FlatList, Image, StyleSheet, Button } from 'react-native';
import { Table, Row } from 'react-native-table-component';

import Header from '../../components/Header';
import BodyTelasIniciais from '../../components/BodyTelasIniciais';
import ContainerTelasIniciais from '../../components/ContainerTelasIniciais';
import HeaderPagInicio from '../../components/HeaderPagInicio';
import { useNavigation } from '@react-navigation/native';

import { getExerciciosTreinoB } from '../../services/exerciciosTreinoB.services';

import { useIsFocused } from '@react-navigation/native';

const TreinoB = ({ instrutor, data }) => {
  
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [exerciciosTreinoB, setExerciciosTreinoB] = useState([]);

  useEffect(() => {
    getExerciciosTreinoB().then(dados => {
      console.log(dados);
      setExerciciosTreinoB(dados);
    });
  }, [isFocused]);

  const renderItem = ({ item  }) => (
    <List.Item
      title={item.nomeExercicioB}
      description={"Repetição:" + item.repeticoesB + " Séries:" + item.seriesB}
      right={props => <Image source={{ uri: item.imageB }}
        style={{ width: 90, height: 90 }}
      />}
      onPress={() => navigation.navigate('TelaCriarExercicioB', { item })}
    />
  );

  const tableHead = ['Instrutor:', 'Data:'];
  const tableData = [[instrutor = "Bruno", data = "03/11/2023"]];

  return (

    <ContainerTelasIniciais>
      <HeaderPagInicio title={"Treino B"}/>
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
          onPress={() => navigation.navigate('TelaCriarExercicioB')}
        />

        <FlatList
          data={exerciciosTreinoB}
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


export default TreinoB;