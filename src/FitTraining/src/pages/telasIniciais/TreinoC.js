import React, { useEffect ,useState } from 'react';
import { List } from 'react-native-paper';
import { FlatList, Image, StyleSheet, Button } from 'react-native';
import { Table, Row } from 'react-native-table-component';

import Header from '../../components/Header';
import BodyTelasIniciais from '../../components/BodyTelasIniciais';
import ContainerTelasIniciais from '../../components/ContainerTelasIniciais';

import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

import { getExerciciosTreinoC } from '../../services/exerciciosTreinoC.services';



const TreinoC = ({ instrutor, data }) => {
  
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [exerciciosTreinoC, setExerciciosTreinoC] = useState([]);

  useEffect(() => {
    getExerciciosTreinoC().then(dados => {
      console.log(dados);
      setExerciciosTreinoC(dados);
    });
  }, [isFocused]);

  const renderItem = ({ item }) => (
    <List.Item
      title={item.nomeExercicioC}
      description={"Repetição:" + item.repeticoesC + " Séries:" + item.seriesC}
      right={props => <Image source={{ uri: item.imageC }}
        style={{ width: 90, height: 90 }}
      />}
      onPress={() => navigation.navigate('TelaCriarExercicioC', { item })}
    />
  );

  const tableHead = ['Instrutor:', 'Data:']; // Cabeçalho da tabela
  const tableData = [[instrutor = "Luciana", data = "09/11/2023"]]; // Dados da tabela

  return (

    <ContainerTelasIniciais>
      <Header title={"Treino C"} />
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
          onPress={() => navigation.navigate('TelaCriarExercicioC')}
        />

        <FlatList
          data={exerciciosTreinoC}
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


export default TreinoC;