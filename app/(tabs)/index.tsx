import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme, { ColorScheme } from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient'
import Header from "@/components/Header";

export default function Index() {
  const { colors } = useTheme()

  const addTodo = useMutation(api.todos.addTodo)
  const clearAllTodos = useMutation(api.todos.clearAllTodos)
  const homeStyle = createHomeStyles(colors)

  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyle.container}>
      <Header />
      <StatusBar barStyle={colors.statusBarStyle}/>
      <SafeAreaView
        style={homeStyle.safeArea}>
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </SafeAreaView>
    </LinearGradient >
  );
}


const createStyles = (colors: ColorScheme) => {
  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
      backgroundColor: colors.bg
    }
  })

  return style
}