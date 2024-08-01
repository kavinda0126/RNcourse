import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";


function GoalInput(props) {
    const [enteredText, setEnteredText] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredText(enteredText);
      };

    const addGoalHandler=()=>{
        props.onAddGoal(enteredText);
        setEnteredText("");
       
    }
    
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Goal"
        onChangeText={goalInputHandler}
        value={enteredText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
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

})