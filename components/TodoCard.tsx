import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import IonIcons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

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
    <LinearGradient
          colors={["#73f062", "#83f4f8", "#f5f5f5"]} // Ex: Azul forte -> Azul claro -> Cinza
          style={{ flex: 1, alignItems: "center", paddingTop: 10, marginBottom: 10, borderRadius: 10 }}
        >
    <View
      style={{
        padding: 15,
        
        borderRadius: 10,
        marginVertical: 8,
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      {/* Envolvemos o ícone e o texto para ambos serem clicáveis */}
      <TouchableOpacity 
        onPress={onToggle} 
        style={{ flexDirection: "row", alignItems: "center", flex: 1 }}
      >
        <IonIcons 
          name={completed ? "checkbox" : "square-outline"} 
          size={24} 
          color={completed ? "#32CD32" : "#333"} // Verde quando completo, branco quando não
        />
        
        <Text
          style={{
            fontSize: 18,
            color: completed ? "#999" : "#333",
            textDecorationLine: completed ? "line-through" : "none",
            marginLeft: 10, // Espaçamento entre o check e o texto
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onDelete}>
        <IonIcons name="trash-outline" size={24} color="#FF6347" />
      </TouchableOpacity>
    </View>
    </LinearGradient>
  );
}