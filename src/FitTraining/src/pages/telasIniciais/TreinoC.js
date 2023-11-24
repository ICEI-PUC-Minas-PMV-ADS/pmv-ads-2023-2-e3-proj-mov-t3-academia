import React, { useEffect ,useState } from 'react';
import { List } from 'react-native-paper';
import { FlatList, Image, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useUser } from '../../contexts/UserContext'

import Header from '../../components/Header';
import BodyTelasIniciais from '../../components/BodyTelasIniciais';
import ContainerTelasIniciais from '../../components/ContainerTelasIniciais';
import HeaderPagInicio from '../../components/HeaderPagInicio';

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
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  const { name } = useUser();
  
  const tableHead = ['Aluno:', 'Data:']; // Cabeçalho da tabela
  const tableData = [[name, formattedDate]]; // Dados da tabela

  return (

    <ContainerTelasIniciais>
      <HeaderPagInicio title={"Treino C"}/>
      {/* <Header title={"Treino C"} /> */}
      <BodyTelasIniciais>

        <Table borderStyle={{ borderWidth: 1, borderColor: '#73808f' }}>
          <Row
            data={tableHead}
            style={{ height: 40, backgroundColor: '#c0ccda' }}
            textStyle={{ margin: 6, fontWeight: 'bold' }}
          />
          <Row data={tableData[0]} style={{ height: 40 }} textStyle={{ margin: 6 }} />
        </Table>

  
        <TouchableOpacity
         style={styles.criarExercicio}
          onPress={() => navigation.navigate('TelaCriarExercicioA')}>
            <Text  style={styles.criarExercicioText} >CRIAR EXERCÍCIO</Text>
            <Icon  style={styles.criarExercicioIcon} name="plus" size={15} color="white" />
          </TouchableOpacity>

        <FlatList
          data={exerciciosTreinoC}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />


<TouchableOpacity   style={styles.iniciarTreino}
onPress={() => navigation.navigate('IniciarTreino')}>
<Text  style={styles.iniciarTreinoText} >Iniciar Treino</Text>
          </TouchableOpacity>

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
  },

  iniciarTreino:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#73808f',
    width:'35%',
    alignSelf:'center',
    borderRadius:1020,
    height:40,
    marginBottom:15
  },

  iniciarTreinoText:{
    fontSize:18,
    fontWeight:'bold',
    color:'white'
  },

  criarExercicio:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#73808f',
    width:'45%',
    alignSelf:'center',
    borderRadius:20,
    height:35,
    marginTop:12,
    flexDirection:'row'
   
  },

  criarExercicioText:{
    fontSize:15,
    fontWeight:'bold',
    color:'white',
    marginRight:5,

  },

  criarExercicioIcon:{
   marginTop:2
  }
})


export default TreinoC;