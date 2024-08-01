import { StyleSheet } from "react-native";
import { View, Text } from "react-native";


function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.viewText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;


const styles= StyleSheet.create({
    goalItem: {
        borderRadius: 6,
        backgroundColor: "#5E0acc",
        padding: 10,
        margin: 8,
        borderColor: "blue",
        color: "white",
      },
      viewText: {
        color: "white",
      },


});