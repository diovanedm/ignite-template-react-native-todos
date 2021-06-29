import React, { useEffect, useState, } from 'react';
import { View } from 'react-native';
import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import { ThemeContext, themes } from '../context/theme'
interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [theme, setTheme] = useState(themes.light);

  function handleChangeTheme() {
    setTheme(theme == themes.light ? themes.dark : themes.light)
  }

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    const newTask = {
      id: Number(new Date()),
      title: newTaskTitle,
      done: false
    }

    setTasks([...tasks, newTask])
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const taskChanged = tasks.map(task => task.id === id ? {
      ...task,
      done: !task.done
    } : task);

    setTasks(taskChanged);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const removeTask = tasks.filter(task => task.id != id);
    setTasks(removeTask);
  } 

  return (
  
    <View style={{backgroundColor: theme.background, height: '100%'}}>
      <ThemeContext.Provider value={theme}>
        <Header setTheme={handleChangeTheme}/>
        
        <TodoInput addTask={handleAddTask} />

        <MyTasksList 
          tasks={tasks} 
          onPress={handleMarkTaskAsDone} 
          onLongPress={handleRemoveTask} 
        />
      </ThemeContext.Provider>
    </View>
  )
}