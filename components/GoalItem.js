import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";

function GoalItem(props) {
  const onDeleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteHandler}
        android_ripple={{ color: "#dddddd" }}
        style={({pressed})=>pressed && styles.pressedItem

        }
      >
        <Text style={styles.viewText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 6,
    backgroundColor: "#5E0acc",
    margin: 8,
    borderColor: "blue",
    color: "white",
  },
  viewText: {
    color: "white",
    padding: 8,
  },
  pressedItem:{
    opacity:0.5
  }
});
