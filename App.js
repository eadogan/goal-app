import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEneteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEneteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, {id: Math.random().toString(), value: enteredGoal}]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <FlatList 
        keyExtractor={(item, index) => item.id} 
        data={courseGoals} 
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )} 
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
    },
    listItem: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1
    }
});
