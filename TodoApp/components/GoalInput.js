import React, {useState} from 'react'
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native'

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }


    return (
        <Modal visible={props.visible} animationType = 'slide'>
        <View style={styles.top}>
        <TextInput 
          placeholder = "Type here" 
          style={styles.textbox}
          onChangeText={goalInputHandler}
          value = {enteredGoal}
          />
        <View style={styles.buttons}>
        <Button title="ADD" onPress={addGoalHandler}/>
        <Button title="CANCEL" color='red' onPress = {props.onCancel}/>
        </View>

 
      </View>
      </Modal>);
};

const styles = StyleSheet.create({
    top : {
        justifyContent:'center',
        alignItems:'center',
        flex:1,
      },
      textbox: {
        borderWidth:1,
        padding:15,
        width:'80%',
        marginBottom:10,
      },
    buttons: {
        flexDirection:'row',
        justifyContent:'space-between',
        width:'50%'
    }
});


export default GoalInput