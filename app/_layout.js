import { Stack } from "expo-router";
import { Text, ScrollView,StyleSheet, TouchableOpacity, View, Image } from "react-native";


export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle:{
        backgroundColor: "#000",
        
      },
      headerTintColor: "#fff",
      headerTitleStyle:{
        fontWeight: "bold",
      },
      headerTitleAlign: "center",
    }}>
     <Stack.Screen name="index" options={{ title: "Nexus", headerStyle:{backgroundColor: '#E4801E'}, }} />
      {/* <Stack.Screen name="products"  options={{title: "Nexus2"}}/> */}
      <Stack.Screen name="gymSingle/[id]"  options={{title: "Nexus2"}}/>

    </Stack>
  );
}
