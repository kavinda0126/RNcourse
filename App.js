import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import GoalInput from "./components/goalinput";
import GoalItem from "./components/GoalItem";

export default function App() {

  const [goalList, setGoalList] = useState([]);
  const [modalIsVisible,setModalIsVisible]=useState(false);


  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function closeAddGoalHandler(){
    setModalIsVisible(false);
  }
  
  const addGoalHandler = (enteredText) => {
    setGoalList((currentGoals) => {
      return [
        ...currentGoals,
        { id: Math.random().toString(), text: enteredText },
      ];
    });
  };

  function deleteGoalHandler(id) {
    setGoalList((currentGoals)=>{
      return currentGoals.filter((goal)=>goal.id!==id);
    })
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler}/>
      <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible}/>
      <View style={styles.goallistContainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} onDelete={deleteGoalHandler} id={itemData.item.id}/>;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },

  goallistContainer: {
    flex: 6,
    border: 1,
    borderColor: "#cccccc",
  },
});
