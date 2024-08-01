import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goalList, setGoalList] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredText(enteredText);
  };

  const addGoalHandler = () => {
    setGoalList((currentGoals) => {
      return [...currentGoals, enteredText];
    });
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goallistContainer}>
        {goalList.map((goal) => (
          <View style={styles.goalItem}  key={goal}>
          <Text style={styles.viewText} >
            {goal}
          </Text>
          </View>
        ))}
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
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "76%",
    marginRight: 8,
  },
  goallistContainer: {
    flex: 6,
    border: 1,
    borderColor: "#cccccc",
  },
  goalItem: {
    borderRadius: 6,
    backgroundColor: "#5E0acc",
    padding: 10,
    margin: 8,
    borderColor: "blue",
    color: "white",
  },
  viewText:{
    color: "white",
  }
});
