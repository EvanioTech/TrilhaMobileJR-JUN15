import { useEffect, useState } from "react";
import { View, TextInput, Button, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TodoCard from "../../components/TodoCard";
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
        placeholderTextColor="#888"
        value={text}
        onChangeText={setText}
        style={{
          width: "90%",
          padding: 10,
          borderColor: "#555",
          borderWidth: 1,
          borderRadius: 10,
          marginBottom: 10,
          color: "#fff",
        }}
      />

      <Button title="Adicionar" onPress={addTask} />

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
    </View>
  );
}
