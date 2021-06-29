import React, { useContext, useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';
import { ThemeContext } from '../context/theme';

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');
  const theme = useContext(ThemeContext)

  function handleAddNewTask() {
    //TODO - Call addTask and clean input value 
    if( task != "")
      addTask(task)
    else
      ToastAndroid.show("Não pode ser inserido um campo vazio", ToastAndroid.LONG);
    setTask('')
  }

  return (
    <View style={[styles.inputContainer, {backgroundColor: theme.backgroundInput}, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
      <TextInput                
        style={[styles.input, {color: theme.textTask}]}   
        placeholder="Adicionar novo todo..."
        placeholderTextColor={theme.placeholder}
        returnKeyType="send"
        //TODO - use value, onChangeText and onSubmitEditing props
        onChangeText={setTask}
        value={task}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton, {backgroundColor: theme.button}]}
        //TODO - onPress prop
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});