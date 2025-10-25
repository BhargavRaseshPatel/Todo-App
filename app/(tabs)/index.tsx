import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {

  const todos = useQuery(api.todos.getTodos)
  const addTodo = useMutation(api.todos.addTodo)
  const clearAllTodos = useMutation(api.todos.clearAllTodos)
  
  return (
    <View
      style={style.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }

})
