import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const item = (props) => (
  <TouchableOpacity onPress={props.onDelete}>
    <View style={styles.listItem}>
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

export default item;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderColor: "#000",
  },
});
