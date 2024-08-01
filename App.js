import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/goalinput";

export default function App() {

  const [goalList, setGoalList] = useState([]);

  
  const addGoalHandler = (enteredText) => {
    setGoalList((currentGoals) => {
      return [
        ...currentGoals,
        { id: Math.random().toString(), text: enteredText },
      ];
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goallistContainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
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
