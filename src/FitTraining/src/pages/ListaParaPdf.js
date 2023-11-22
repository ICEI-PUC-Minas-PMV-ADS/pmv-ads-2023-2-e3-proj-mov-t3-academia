import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Print from 'expo-print';
import dbData from '../../db.json';
import * as FileSystem from 'expo-file-system';

const PrintDBData = () => {
  const handlePrint = async () => {
    const content = generateHTMLContent(dbData.exerciciosTreinoA);
    const localUri = FileSystem.cacheDirectory + 'exercicio.pdf';

    try {
      await FileSystem.writeAsStringAsync(localUri, content, {
        encoding: FileSystem.EncodingType.UTF8,
      });

      // Abre o arquivo localmente
      await Print.printAsync({ uri: localUri, name: 'Exercicio.pdf' });
    } catch (error) {
      console.error(error);
    }
  };

  const generateHTMLContent = (exerciciosTreinoA) => {
    return `
      <html>
        <head>
          <style>
            h1 {
              color: #333;
              text-align: center;
            }
            li {
              margin-bottom: 10px;
            }
          </style>
        </head>
        <body>
          <h1>Lista de exercicios:</h1>
          <ul>
            ${exerciciosTreinoA.map(
              (exercicio) => `<li>${exercicio.nomeExercicio}: Repetições - ${exercicio.repeticoes}, Séries - ${exercicio.series}</li>`
            ).join('')}
          </ul>
        </body>
      </html>
    `;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePrint} style={styles.button}>
        <Text style={styles.buttonText}>Imprimir</Text>
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
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PrintDBData;