import { Stack } from "expo-router";
import { Text, ScrollView,StyleSheet, TouchableOpacity, View, Image } from "react-native";


export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle:{
        backgroundColor: "#703b10",
        borderBottonWidth: 0,
      },
      headerTintColor: "#fff",
      headerTitleStyle:{
        fontWeight: "bold",
      },
      headerTitleAlign: "center",
    }}>
      <Stack.Screen name="index"  options={{title: "Nexus"}}/>
      <Stack.Screen name="about2"  options={{title: "Nexus2"}}/>

    </Stack>
  );
}
