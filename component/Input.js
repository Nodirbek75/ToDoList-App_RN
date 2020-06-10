import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const input = (props) => {
  const [toDoItem, setToDoitem] = useState("");
  const onChangeHandler = (inputText) => {
    setToDoitem(inputText);
  };

  const onAddItemHandler = () => {
    props.onAdd(toDoItem);
    setToDoitem("");
  };

  return (
    <Modal visible={props.isVisible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"To Do List"}
          style={styles.input}
          onChangeText={onChangeHandler}
          value={toDoItem}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="Add" onPress={onAddItemHandler} />
          </View>
          <View style={styles.btn}>
            <Button title="Cancel" color={"red"} onPress={props.onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default input;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  btnContainer: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-evenly",
  },
  btn: {
    width: "40%",
  },
});
