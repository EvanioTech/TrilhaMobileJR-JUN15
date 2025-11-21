import { Tabs } from "expo-router";
import { Text, View } from "react-native";

export default function Layout() {
  return <Tabs screenOptions={{headerShown: false}}>
    <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: () => <Text>🏠</Text> }} />
    <Tabs.Screen name="settings" options={{ title: "Settings", tabBarIcon: () => <Text>⚙️</Text> }} />
  </Tabs>;
}