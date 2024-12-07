import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TaskList = ({ tasks }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  taskItem: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  taskText: {
    fontSize: 16,
  },
});

export default TaskList;
