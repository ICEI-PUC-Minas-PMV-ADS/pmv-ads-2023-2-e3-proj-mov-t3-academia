import React, { useCallback } from 'react';
import { Button } from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

import dbData from '../../db.json';

export const ListaParaPdf = () => {
const handlePrint = useCallback(async () => {
    try {
      const exercicios = dbData.exerciciosTreinoA;

      let htmlContent = '<h1>Lista de Exercícios</h1>';
      exercicios.forEach((exercicio) => {
        htmlContent += `
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
          
          <ul>
        <li>${exercicio.nomeExercicio}: ${exercicio.repeticoes} repetições, ${exercicio.series} séries</li>
        </ul>
        </body>
      </html>
        `;
      });

      // Gere o arquivo PDF
      const file = await Print.printToFileAsync({ html: htmlContent, base64: false });
      await shareAsync(file.uri);

      console.log(uri);
    } catch (error) {
      console.error('Erro ao gerar o PDF:', error);
    }
  }, []);

  return <Button title="Gerar PDF" onPress={handlePrint} />;
};
    export default ListaParaPdf;