import React, { useContext, useEffect } from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';
import { ThemeContext } from '../context/theme';
function FlatListHeaderComponent() {
  const theme = useContext(ThemeContext)
  console.log(theme)

  return (
    <View>
      <Text style={[styles.header, {color: theme.titleTasks}]}>Minhas tasks</Text>
    </View>
  )
}

interface MyTasksListProps  {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
}

export function MyTasksList({ tasks, onLongPress, onPress }: MyTasksListProps) {
  const theme = useContext(ThemeContext)
  return (
    
      <FlatList
        data={tasks}
        keyExtractor={item => String(item.id)}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              testID={`button-${index}`}
              activeOpacity={0.1}
              //TODO - use onPress, onLongPress and style props
              style={
                item.done 
                ? [styles.taskButtonDone, {backgroundColor: theme.backgroundDone}] 
                : styles.taskButton
              }

              onPress={() => onPress(item.id)}
              onLongPress={() => onLongPress(item.id)}
            >
              <View 
                testID={`marker-${index}`}
                //TODO - use style prop 
                style={
                  item.done 
                  ? [styles.taskMarkerDone, {backgroundColor: theme.circle}] 
                  : [styles.taskMarker, {borderColor: theme.circleLine}]
                }
              />
              <Text 
                //TODO - use style prop
                style={
                  item.done 
                  ? [styles.taskTextDone, {color: theme.textDone}] 
                  : {color: theme.textTask}
                }
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )
        }}
        ListHeaderComponent={<FlatListHeaderComponent />}
        ListHeaderComponentStyle={{
          marginBottom: 20
        }}
        style={{
          marginHorizontal: 24,
          marginTop: 32,
        }}
      />

  )
}

const styles = StyleSheet.create({
  header: {
    color: '#3D3D4D',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 10
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginRight: 10
  },
  taskTextDone: {
    textDecorationLine: 'line-through'
  }
})