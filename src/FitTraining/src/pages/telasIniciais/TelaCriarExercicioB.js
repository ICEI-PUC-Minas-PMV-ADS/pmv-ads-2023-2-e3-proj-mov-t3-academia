import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

import BodyTelasIniciais from '../../components/BodyTelasIniciais';
import ContainerTelasIniciais from '../../components/ContainerTelasIniciais';
import Logo from '../../components/Logo';
import Input from '../../components/Input';


import { useNavigation } from '@react-navigation/native';

import { updateExerciciosTreinoB, insertExerciciosTreinoB, deleteExerciciosTreinoB } from '../../services/exerciciosTreinoB.services';


const TelaCriarExercicioB = ({ route }) => {

    const { item } = route.params ? route.params : {};
    const navigation = useNavigation();

    const [nomeExercicioB, setNomeExercicioB] = useState('');
    const [repeticoesB, setRepeticoesB] = useState('');
    const [seriesB, setSeriesB] = useState('');
    const [imageB, setImageB] = useState('https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-academia/b6cc0a2110c2d1172c2bafa05dacfda720a917af/docs/img/tela%20de%20fundo%20-%20imagem%20do%20exercicio.jpg');

    const handleImagePicker = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            aspect: [4, 4],
            allowsEditing: false,
            quality: 1,
        });
        if (!result.canceled) {
            setImageB(result.assets[0].uri);
        }
    };

    useEffect(() => {
        if (item) {
            setNomeExercicioB(item.nomeExercicioB);
            setRepeticoesB(item.repeticoesB.toString());
            setSeriesB(item.seriesB.toString());
            setImageB(item.imageB)
        }
    }, [item]);

    const handleSalvar = () => {
        if (item) {
            updateExerciciosTreinoB({
                nomeExercicioB: nomeExercicioB,
                repeticoesB: repeticoesB,
                seriesB: seriesB,
                imageB: imageB,
                id: item.id
            }).then(res => { navigation.goBack(); });
        }
        else {
            insertExerciciosTreinoB({
                nomeExercicioB: nomeExercicioB,
                repeticoesB: repeticoesB,
                seriesB: seriesB,
                imageB: imageB
            }).then(res => { navigation.goBack(); });
        }
    };

    const handleExcluir = () => {
        deleteExerciciosTreinoB(item.id).then(res => { navigation.goBack(); });
    };

    return (
        <ContainerTelasIniciais>
            <Appbar.Header style={styles.header}>
                <Appbar.BackAction color="black" onPress={() => navigation.navigate('MenuInicialTreinos')} />
                <Appbar.Content color="black" title="CRIAR NOVO EXERCÍCIO" />
                <Logo />
            </Appbar.Header>
            <BodyTelasIniciais>
                <Input
                    label="Nome do exercício"
                    value={nomeExercicioB}
                    onChangeText={(text) => setNomeExercicioB(text)}
                    style={styles.inpuNome}
                    theme={{
                        colors: {
                            primary: 'black',
                            underlineColor: 'black',
                        },
                    }}
                />
                <Input
                    label="Repetições"
                    value={repeticoesB}
                    onChangeText={(Number) => setRepeticoesB(Number)}
                    style={styles.inputRepeticao}
                    keyboardType='numeric'
                    theme={{
                        colors: {
                            primary: 'black',
                            underlineColor: 'black',
                        },
                    }}
                />
                <Input
                    label="Séries"
                    value={seriesB}
                    onChangeText={(Number) => setSeriesB(Number)}
                    color='black'
                    style={styles.inputSerie}
                    keyboardType='numeric'
                    theme={{
                        colors: {
                            primary: 'black',
                            underlineColor: 'black',
                        },
                    }}
                />
                <View style={styles.row}>
                    <Text variant="titleLarge" style={styles.textImage}>SELECIONE UMA IMAGEM: </Text>
                    <Button
                        color='gray'
                        mode='contained'
                        onPress={handleImagePicker}
                    >Upload de imagem</Button>
                </View>
                <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.textImage}> IMAGEM SELECIONADA:</Text>
                    <Image
                        source={{ uri: imageB || 'https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e3-proj-mov-t3-academia/b6cc0a2110c2d1172c2bafa05dacfda720a917af/docs/img/tela%20de%20fundo%20-%20imagem%20do%20exercicio.jpg' }}
                        style={{ width: 100, height: 100, marginTop: 10, alignItems: 'center' }}
                    />
                </View>
                <Button
                    color='#72d764'
                    fontWeight='bold'
                    style={styles.botaoSalvar}
                    onPress={handleSalvar}
                    mode='contained'
                >SALVAR</Button>

                {
                    item &&
                    <Button
                        color='#ff6961'
                        fontWeight='bold'
                        style={styles.botaoExcluir}
                        onPress={handleExcluir}
                        mode='contained'
                    >EXCLUIR</Button>
                }

            </BodyTelasIniciais>
        </ContainerTelasIniciais >
    );
};
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#c0ccda'
    },
    textImage: {
        marginLeft: 22,
        fontWeight: 'bold',
    },
    buttonImg: {
        color: 'green',
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 5,
    },
    inpuNome: {
        backgroundColor: '#FFF',
        marginBottom: 8,
        marginTop: 25,
        margin: 8,
        borderColor: 'black'

    },
    inputRepeticao: {
        backgroundColor: '#FFF',
        marginBottom: 8,
        marginTop: 25,
        margin: 8,
        borderColor: 'black'
    },
    inputSerie: {
        backgroundColor: '#FFF',
        marginBottom: 8,
        marginTop: 25,
        margin: 8,
        borderColor: 'black'
    },
    botaoSalvar: {
        marginTop: 50,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    botaoExcluir: {
        marginVertical: 10,
        marginHorizontal: 10,
    },

});


export default TelaCriarExercicioB;