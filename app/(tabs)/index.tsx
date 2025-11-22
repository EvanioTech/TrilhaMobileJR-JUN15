import { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TodoCard from "../../components/TodoCard";
import { StatusBar } from "expo-status-bar";
import TaskInput from "../../components/TaskInput"; // Ajuste o caminho conforme necessário
import EmpityTasks from "../../components/EmpityTasks"; // Ajuste o caminho conforme necessário

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

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

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      title: text,
      completed: false,
    };

    const updated = [...tasks, newTask];
    setTasks(updated);
    saveTasks(updated);
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
    <View style={{ flex: 1, alignItems: "center", paddingTop: 50, backgroundColor: "#f5f5f5" }}>
      
      {/* Condicional: Se houver tarefas, mostra lista, senão mostra EmptyTasks */}
      {tasks.length > 0 ? (
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
      ) : (
        <EmpityTasks />
      )}

      {/* Botão flutuante abre o Modal */}
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      {/* Componente do Modal controlado por props */}
      <TaskInput 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
        onAddTask={addTask} 
      />

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
    borderRadius: 30, // Deixa totalmente redondo
    position: "absolute",
    right: 20,
    bottom: 30,
    elevation: 5, // Sombra no Android
    shadowColor: "#000", // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 26,
    marginTop: -2
  },
});