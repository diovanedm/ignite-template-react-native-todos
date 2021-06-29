import React, {
  createContext,
} from 'react';

export const themes = {
  dark: {
    background: "#191D3A",
    backgroundHeader: "#282B5A",
    backgroundInput: "#413A6F",
    placeholder: "#E1E1E6",
    button: "#9347CA",
    titleTasks: '#E1E1E6',
    textTask: "#E1E1E6",
    textDone: "rgba(225, 225, 230, 0.6)",
    backgroundDone: "rgba(65, 58, 111, 0.5)",
    circle: "#9347CA",
    circleLine: "#9347CA" 
  },
  light: {
    background: "#FFFFFF",
    backgroundHeader: "#273FAD",
    backgroundInput: "#F5F4F8",
    placeholder: "#A09CB1",
    button: "#3FAD27",
    titleTasks: '#3D3D4D',
    textTask: "#3D3D4D",
    textDone: "#A09CB1",
    backgroundDone: "rgba(25, 61, 223, 0.1)",
    circle: "#273FAD",
    circleLine: "#3D3D4D"
  }
}

export const ThemeContext = createContext(themes.light)