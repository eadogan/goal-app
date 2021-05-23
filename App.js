import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = inputData => {
    if(inputData.length === 0) {
      return;
    }
    setCourseGoals(currentGoals => [
      ...courseGoals, 
      {id: Math.random().toString(), value: inputData}
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    console.info('To be deleted: '+goalId);
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput 
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalHandler}
      />
      <FlatList 
        keyExtractor={(item, index) => item.id} 
        data={courseGoals} 
        renderItem={itemData => <GoalItem 
                                  id={itemData.item.id} 
                                  onDelete={removeGoalHandler} 
                                  title={itemData.item.value}
                                />
                              } 
      />
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
      padding: 50
    },
    inputContainer: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center'
    },
    input: {
      padding: 10, 
      width:'80%', 
      borderColor: 'black', 
      borderWidth: 1
    }
});
