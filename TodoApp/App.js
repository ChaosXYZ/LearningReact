import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, SetisAddMode] = useState(false);



  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    SetisAddMode(false);
  };

  const removeGoalHandler = goalID => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalID)
    });
  };

  
  const cancelGoal = () => {
    SetisAddMode(false);  
  }


  return (
    <View style = {styles.screen}>


      <Button title="Add new goal" onPress={() => SetisAddMode(true)}/>
      <GoalInput visible = {isAddMode} onAddGoal = {addGoalHandler} onCancel = {cancelGoal}/>
      <FlatList data={courseGoals} renderItem = {itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>}/>
        


    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:45,
    backgroundColor:'#e6fcfc',
    flex:1,
  },



});
