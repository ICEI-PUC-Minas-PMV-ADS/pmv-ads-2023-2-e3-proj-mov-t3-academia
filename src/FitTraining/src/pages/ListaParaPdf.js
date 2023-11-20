import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Print from 'expo-print';
import dbData from '../../db.json';

const PrintDBData = () => {
  const handlePrint = async () => {
    const content = generateHTMLContent(dbData.exerciciosTreinoA);

    try {
      const { uri } = await Print.printToFileAsync({
        html: content,
      });

      console.log(uri);
    } catch (error) {
      console.error(error);
    }
  };

  const generateHTMLContent = (exerciciosTreinoA) => {
    return `
      <html>
        <body>
          <h1>Lista de exercicios:</h1>
          <ul>
            ${exerciciosTreinoA.map
              (exerciciosTreinoA => `<li>${exerciciosTreinoA.nomeExercicio}: ${exerciciosTreinoA.repeticoes}: ${exerciciosTreinoA.series}</li>`).join('')}
          </ul>
        </body>
      </html>
    `;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Baixe sua ficha </Text>
      <TouchableOpacity onPress={handlePrint} style={styles.button}>
        <Text style={styles.buttonText}>Lista de treino A </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PrintDBData;