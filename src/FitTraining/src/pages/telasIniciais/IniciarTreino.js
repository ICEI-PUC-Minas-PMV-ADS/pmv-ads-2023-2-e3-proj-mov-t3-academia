import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import Logo from '../../components/Logo';
import { useNavigation } from '@react-navigation/native';

const IniciarTreino = () => {
  const navigation = useNavigation();
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [sets, setSets] = useState(0);

  const handleStartTimer = () => {
    setIsTimerRunning(true);
  };

  const handleStopTimer = () => {
    setIsTimerRunning(false);
  };

  const handleRestartTimer = () => {
    setTimer(0);
    setSets(0);
  };

  const handleAddSet = () => {
    setSets((prevSets) => prevSets + 1);
  };

  useEffect(() => {
    let intervalId;

    if (isTimerRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => 
    clearInterval(intervalId);
  }, [isTimerRunning]);

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction color="black" onPress={() => navigation.navigate('MenuInicialTreinos')} />
        <Logo />
      </Appbar.Header>

      <Text style={styles.text}>Barra Fixa</Text>

      {!isTimerRunning && (
        <TouchableOpacity style={styles.startButton} onPress={handleStartTimer}>
          <Text style={styles.startButtonText}>Iniciar Exercício</Text>
        </TouchableOpacity>
      )}

      {isTimerRunning && (
        <TouchableOpacity style={styles.stopButton} onPress={handleStopTimer}>
          <Text style={styles.stopButtonText}>Finalizar Exercicio</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.addSetButton} onPress={handleAddSet}>
        <Text style={styles.addSetButtonText}>Set Concluído</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.restartButton} onPress={handleRestartTimer}>
        <Text style={styles.restartButtonText}>Reiniciar</Text>
      </TouchableOpacity>

      <View style={styles.setsContainer}>
        <Text style={styles.setsText}>Sets Concluídos: {sets}</Text>
      </View>

      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{timer} segundos</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set the background color as needed
  },
  header: {
    backgroundColor: '#c0ccda',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#73808f',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  stopButton: {
    backgroundColor: '#73808f',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  stopButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  restartButton: {
    backgroundColor: '#73808f',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  restartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  timerContainer: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 10,
        marginLeft: 20,
  },
  timerText: {
    color: '#fff',
    fontSize: 18,
  },
  addSetButton: {
    backgroundColor: '#73808f',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  addSetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  setsContainer: {
    position: 'absolute',
    bottom: 70,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 10,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  setsText: {
    color: '#000',
    fontSize: 18,
    marginRight: 10,
  },
});

export default IniciarTreino;
