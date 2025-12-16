import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const startEditing = (id, name) => {
    setEditingId(id);
    setEditingText(name);
  };

  const saveEdit = (id) => {
    setList(list.map((g) => (g.id === id ? { ...g, name: editingText } : g)));
    setEditingId(null);
    setEditingText("");
  };

  const addItem = () => {
    // Logic to add item to the list
    console.log("Add item", item);
    if (item.trim().length === 0) return;
    setList([...list, { id: Date.now().toString(), name: item }]);
    setItem("");
  };

  const removeItem = (id) => {
    // Logic to delete item from the list
    console.log("Remove item");
    setList(list.filter((g) => g.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List App</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Add item to To Do List"
          value={item}
          onChangeText={setItem}
        />
        <Button title="Add" onPress={addItem} />
      </View>
      <FlatList
        data={list}
        keyExtractor={(g) => g.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemRow}>
              {editingId === item.id ? (
                <TextInput
                  style={styles.input}
                  value={editingText}
                  onChangeText={setEditingText}
                  onSubmitEditing={() => saveEdit(item.id)}
                  autoFocus
                />
              ) : (
                <Text style={styles.itemText}>{item.name}</Text>
              )}
              <View style={{ flexDirection: "row" }}>

                {editingId === item.id ? (
                  <Pressable onPress={() => saveEdit(item.id)}>
                    <Feather name="save" size={22} color="#44ff44" style={styles.editButton} />
                    {/* <Text style={styles.editButton}>S</Text> */}
                  </Pressable>
                ) : (
                  <Pressable onPress={() => startEditing(item.id, item.name)}>
                    <Feather name="edit" size={22} color="#4444ff" style={styles.saveButton} />
                    {/* <Text style={styles.saveButton}>E</Text> */}
                  </Pressable>  
                )}

                <Pressable onPress={() => removeItem(item.id)}>
                  <Feather name="trash-2" size={22} color="#ff4444" style={styles.deleteButton} />
                  {/* <Text style={styles.deleteButton}>X</Text> */}
                </Pressable>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    //justifyContent: 'space-between',
    //alignItems: 'center',
    //width: '100%',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    flex: 1,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    //alignItems: 'center',
    padding: 20,
    //borderBottomWidth: 1,
    backgroundColor: "#eee",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    paddingRight: 20,
  },
  deleteButton: {
    fontSize: 18,
    color: "#ff4444",
    //padding: 8,
    //borderRadius: 5,
  },
  editButton: {
    fontSize: 18,
    color: "#4444ff",
    marginRight: 20,
    marginLeft: 15,
    paddingLeft: 8,
    //borderRadius: 5,
  },
  saveButton: {
    fontSize: 18,
    color: "#44ff44",
    marginRight: 20,
    //padding: 8,
    //borderRadius: 5,
  },

});
