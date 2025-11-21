import TodoCard from "@/components/todoCard";
import { Text, View, StatusBar } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar barStyle="light-content" />
      <TodoCard />
      <TodoCard />
    </View>
  );
}
