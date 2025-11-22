import { useEffect, useState, useCallback } from "react";
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TodoCard from "../../components/TodoCard";
import { StatusBar } from "expo-status-bar";
import TaskInput from "../../components/TaskInput";
import EmpityTasks from "../../components/EmpityTasks";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect } from '@react-navigation/native';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  // Carrega as tarefas inicialmente
  useEffect(() => {
    loadTasks();
  }, []);

  // Recarrega as tarefas sempre que a tela ganhar foco (útil ao voltar das Configurações)
  useFocusEffect(
    useCallback(() => {
      loadTasks();
    }, [])
  );

  const loadTasks = async () => {
    const data = await AsyncStorage.getItem("tasks");
    if (data) {
      const parsed: Task[] = JSON.parse(data);
      setTasks(parsed);
    } else {
      setTasks([]); // Garante que zera se não tiver nada
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
    <LinearGradient
      colors={["#1E90FF", "#87CEEB", "#f5f5f5"]}
      style={{ flex: 1, alignItems: "center", paddingTop: 50 }}
    >
      {tasks.length > 0 ? (
        <ScrollView 
          style={{ width: "100%", marginTop: 20 }}
          contentContainerStyle={{ alignItems: "center", paddingBottom: 100 }}
        >
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

      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      <TaskInput 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
        onAddTask={addTask} 
      />

      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: "#fff",
    padding: 15,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    position: "absolute",
    right: 20,
    bottom: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  addButtonText: {
    color: "#1E90FF",
    fontSize: 26,
    marginTop: -2
  },
});