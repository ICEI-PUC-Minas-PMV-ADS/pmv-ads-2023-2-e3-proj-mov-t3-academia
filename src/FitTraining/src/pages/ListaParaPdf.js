import React, { useCallback } from 'react';
import { Button, View } from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

import dbData from '../../db.json';

export const ListaParaPdf = () => {
const handlePrint = useCallback(async () => {
    try {
      const exercicios = dbData.exerciciosTreinoA;

      let htmlContent = '<h1>Lista de Exercícios (ficha A)</h1>';
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

      const file = await Print.printToFileAsync({ html: htmlContent, base64: false });
      await shareAsync(file.uri);

      console.log(uri);
    } catch (error) {
      console.error('Erro ao gerar o PDF:', error);
    }
  }, []);

  const handlePrintb = useCallback(async () => {
    try {
      const exerciciosb = dbData.exerciciosTreinoB;


      let htmlContent = '<h1>Lista de Exercícios (ficha B)</h1>';
      exerciciosb.forEach((exercicio) => {
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
        <li>${exercicio.nomeExercicioB}: ${exercicio.repeticoesB} repetições, ${exercicio.seriesB} séries</li>
        </ul>
        </body>
      </html>
        `;
      });

      const file = await Print.printToFileAsync({ html: htmlContent, base64: false });
      await shareAsync(file.uri);

      console.log(uri);
    } catch (error) {
      console.error('Erro ao gerar o PDF:', error);
    }
  }, []);

  const handlePrintc = useCallback(async () => {
    try {
      const exerciciosc = dbData.exerciciosTreinoC;


      let htmlContent = '<h1>Lista de Exercícios (ficha C)</h1>';
      exerciciosc.forEach((exercicio) => {
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
        <li>${exercicio.nomeExercicioC}: ${exercicio.repeticoesC} repetições, ${exercicio.seriesC} séries</li>
        </ul>
        </body>
      </html>
        `;
      });

      const file = await Print.printToFileAsync({ html: htmlContent, base64: false });
      await shareAsync(file.uri);

      console.log(uri);
    } catch (error) {
      console.error('Erro ao gerar o PDF:', error);
    }
  }, []);

  return ( 
    <View style={{alignItems:'center', alignContent:'center', flex:1, justifyContent:'space-evenly',}}>
  <Button color="#5660A7" title="Gerar PDF (ficha A)" onPress={handlePrint}/>
  <Button color="#5660A7" title="Gerar PDF (ficha B)" onPress={handlePrintb}/>
  <Button color="#5660A7" title="Gerar PDF (ficha C)" onPress={handlePrintc}/>
  </View>
  )
          
};


    export default ListaParaPdf;