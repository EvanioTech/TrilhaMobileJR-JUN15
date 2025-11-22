import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView, Linking } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IonIcons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router"; // 
import { StatusBar } from "expo-status-bar";

const Settings = () => {
  const router = useRouter(); // Remova se não estiver usando Expo Router

  // Função para apagar tudo
  const handleClearAll = async () => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete all tasks? This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes, delete all",
          style: "destructive",
          onPress: async () => {
            try {
              await AsyncStorage.removeItem("tasks");
              Alert.alert("Success", "All tasks have been removed.");
              
            } catch (e) {
              Alert.alert("Error", "Failed to clear data.");
            }
          },
        },
      ]
    );
  };

  // Função para abrir link (opcional)
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <ScrollView style={styles.content}>
        
        {/* Seção de Dados */}
        <Text style={styles.sectionTitle}>DATA</Text>
        <View style={styles.card}>
          <TouchableOpacity style={styles.row} onPress={handleClearAll}>
            <View style={styles.rowIconText}>
              <IonIcons name="trash-outline" size={22} color="#FF6347" />
              <Text style={[styles.rowText, { color: "#FF6347" }]}>
                Delete all tasks
              </Text>
            </View>
            <IonIcons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
        </View>

        {/* Seção Sobre */}
        <Text style={styles.sectionTitle}>ABOUT</Text>
        <View style={styles.card}>
          <TouchableOpacity 
            style={styles.row} 
            onPress={() => openLink("https://github.com/seu-usuario")}
          >
            <View style={styles.rowIconText}>
              <IonIcons name="logo-github" size={22} color="#333" />
              <Text style={styles.rowText}>View on GitHub</Text>
            </View>
            <IonIcons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
          
          <View style={styles.separator} />

          <View style={styles.row}>
            <View style={styles.rowIconText}>
              <IonIcons name="information-circle-outline" size={22} color="#333" />
              <Text style={styles.rowText}>Version</Text>
            </View>
            <Text style={styles.versionText}>1.0.0</Text>
          </View>
        </View>

      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f7", // Cor estilo iOS Settings
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 13,
    color: "#666",
    marginBottom: 8,
    marginLeft: 10,
    textTransform: "uppercase",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 25,
    overflow: "hidden", // Garante que o borderRadius funcione nos filhos
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  rowIconText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  rowText: {
    fontSize: 16,
    color: "#000",
  },
  versionText: {
    fontSize: 16,
    color: "#888",
  },
  separator: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginLeft: 50, // Indentação para ficar estilo lista
  },
});