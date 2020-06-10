import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import Item from "./component/Item";
import Input from "./component/Input";

export default function App() {
  const [itemsList, setItemsList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const onAddHandler = (itemText) => {
    
    setItemsList((currentGoal) => [
      { id: Math.random().toString(), value: itemText },
      ...currentGoal
    ]);
    setIsAddMode(false);
  };

  const onDeleteHandler = (id) => {
    setItemsList((currentList) => {
      return currentList.filter((item) => item.id !== id);
    });
  };

  const onCloseAddModal = () => {
    setIsAddMode(false);

  };
  return (
    <View style={styles.screen}>
      <Button title={"Add Item"} color={"black"} onPress={() => setIsAddMode(true)} />
      <Input onAdd={onAddHandler} isVisible={isAddMode} onClose={onCloseAddModal}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={itemsList}
        renderItem={(item) => (
          <Item
            text={item.item.value}
            onDelete={() => onDeleteHandler(item.item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
