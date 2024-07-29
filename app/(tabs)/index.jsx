import { ScrollView, View, Text, StyleSheet, KeyboardAvoidingView, Keyboard, Platform, TextInput, TouchableOpacity, Key } from 'react-native';
import React, { useState } from "react"
import Task from '../../components/Task';

export default function HomeScreen() {
  const [task, setTask] = useState(); // Initialize task with a default value
  const [taskItems, setTaskItems] = useState([]); // Storing the items

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);

  }

  return (
    <View style={styles.container} >
      {/* Today's Task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}> Today's Task </Text>
          <View style={styles.taskListContainer}>
        <ScrollView showsVerticalScrollIndicator={false} style = {styles.taskList} contentContainerStyle = {styles.taskListContent}>
            {/* This is where the tasl will go  */}
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task style= {styles.finalTask} text={item}> </Task>
                  </TouchableOpacity>
                )
              })
            }

        </ScrollView>
          </View>
      </View>

      {/* Write a task  */}

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardWrapper}>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={(text) => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.plusBtn}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",

  },
  taskWrapper: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,


  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,

  },
  taskListContainer: {
    flex: 1, 
    maxHeight: '60%',
  },
  taskList: {
    flex: 1,
  },
  taskListContent: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  keyboardWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',

  },
  input: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    width: 300,
    marginLeft: 10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    fontSize: 18,


  },
  addWrapper: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 30,
    borderColor: '#C0C0C0',
    borderWidth: 1,

  },
  plusBtn: {
    fontSize: 26,
    color: 'green'
  },
  finalTask: {
  Width: '100%',
  flexWrap: 'wrap',

  }

});
