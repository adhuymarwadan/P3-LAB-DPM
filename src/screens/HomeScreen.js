import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TaskList from '../components/TaskList';
import TaskInput from '../components/TaskInput';
import { storeData, getData } from '../utils/storage';

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const savedTasks = await getData('tasks');
      if (savedTasks) setTasks(savedTasks);
    };

    loadTasks();
  }, []);

  useEffect(() => {
    storeData('tasks', tasks);
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Tugas Harian</Text>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default HomeScreen;
