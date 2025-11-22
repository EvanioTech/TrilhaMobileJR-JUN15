import { useEffect, useState } from "react";
import { View, TextInput, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TodoCard from "../../components/TodoCard";
import { StatusBar } from "expo-status-bar";
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await AsyncStorage.getItem("tasks");
    if (data) {
      const parsed: Task[] = JSON.parse(data);
      setTasks(parsed);
    }
  };

  const saveTasks = async (tasksToSave: Task[]) => {
    await AsyncStorage.setItem("tasks", JSON.stringify(tasksToSave));
  };

  const addTask = () => {
    console.log("Tarefa adicionada");
    if (text === "") alert("Por favor, insira uma tarefa.");
    if (!text.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: text,
      completed: false,
    };

    const updated = [...tasks, newTask];
    setTasks(updated);
    saveTasks(updated);
    setText("");
    
  };

  const toggleTask = (id: number) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
    saveTasks(updated);
  };

  const deleteTask = (id: number) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
    saveTasks(updated);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", paddingTop: 50 }}>
      <TextInput
        placeholder="Digite uma tarefa..."
        placeholderTextColor="#333"
        value={text}
        onChangeText={setText}
        style={{
          width: "90%",
          padding: 10,
          borderColor: "#555",
          borderWidth: 1,
          borderRadius: 10,
          marginBottom: 10,
          color: "#333",
        }}
      />

      

      <ScrollView style={{ width: "100%", marginTop: 20 }}>
        {tasks.map((task) => (
          <TodoCard
            key={task.id}
            title={task.title}
            completed={task.completed}
            onToggle={() => toggleTask(task.id)}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </ScrollView>
      <TouchableOpacity onPress={addTask} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: "#1E90FF",
    padding: 15,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    position: "absolute",
    right: 20,
    bottom: 10,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 26,
  },
});
