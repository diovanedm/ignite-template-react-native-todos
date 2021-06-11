import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

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
    tasks.map(task => {
      if(task.id == id){
        task.done = !task.done        
      }
    })
    setTasks(tasks)
    console.log(tasks);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const removeTask = tasks.filter(task => task.id != id);
    setTasks(removeTask);
  } 

  return (
    <>
      <Header />
      
      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}