import React, { useContext, useState } from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext, themes } from '../context/theme';

type Props = {
  setTheme: () => void,
}

export function Header({setTheme}: Props) {
  const theme = useContext(ThemeContext)
  const [textTheme, setTextTheme] = useState('dark')
  function handleChangeTheme() {
    setTheme()
    textTheme == 'light' ? setTextTheme('dark') : setTextTheme('light')
  }
  return (
      <View style={{    backgroundColor: theme.backgroundHeader,}}>
        <View style={styles.header}>
          <View style={styles.content}>
            <Text style={styles.headerText}>to.</Text>
            <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold'}]}>do</Text>
          </View>
          <View style={styles.content2}>
            <View style={[styles.buttonTheme, {backgroundColor: theme.button}]}>
              <TouchableOpacity
                onPress={handleChangeTheme}
              >
                <Text style={{color: themes.dark
                  .textTask}}>
                  Tema {textTheme}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

  )
}

const styles = StyleSheet.create({
  header: {

    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    width: '80%'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  buttonTheme: {
    borderRadius: 5,
    height: 30,
    width: "80%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: "flex-end"
  },
  content2: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: "flex-end"
  }
});
