import { Text, ScrollView,StyleSheet,Pressable, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Link } from "expo-router";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E4801E",
      }}
    >
      <div style={{
        maxWidth: "auto",
        maxHeight: "auto",
        margin: 150,
      }}>
        <Image
          style={{
            maxWidth: 400,
            maxHeight: 300,

            // borderRadius: 300
          }}
          source={require('../assets/images/img1.jpg')}
        />
      </div>


      <Text style={{ fontFamily: "lexend" }}>Edit app/index.tsx to edit this screen.</Text>
      <link href="/about2" style={style.button} asChild>
        <Pressable style={StyleSheet.button}>
          <text style={StyleSheet.buttonText}> acesse ai</text>


        </Pressable>


      </link>

    </View>
  );
}
