import { View, Text, TouchableOpacity } from "react-native";

interface TodoCardProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TodoCard({
  title,
  completed,
  onToggle,
  onDelete,
}: TodoCardProps) {
  return (
    <View
      style={{
        padding: 15,
        backgroundColor: "#222",
        borderRadius: 10,
        marginVertical: 8,
        width: "90%",
      }}
    >
      <TouchableOpacity onPress={onToggle}>
        <Text
          style={{
            fontSize: 18,
            color: completed ? "#999" : "#fff",
            textDecorationLine: completed ? "line-through" : "none",
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onDelete}>
        <Text style={{ color: "red", marginTop: 10 }}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}
