import { Text, View, Image } from "react-native";

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


      <Text style={{fontFamily: "lexend"}}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
