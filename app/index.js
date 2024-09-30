

import React from 'react';
import { Text, View, Image, Pressable, StyleSheet, Touchable } from 'react-native';
import { Link } from 'expo-router'; // Se você está usando expo-router
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Index() {

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/img1.jpg')}
        />
      </View>

      <Text style={styles.text}></Text>

    
      <Image
        style={styles.image1}
        source={require('../assets/images/image 1.png')}
      />

    {/* botão de inicio */}
      <View style={{ backgroundColor: "#fff", width: 390, height: 62, alignItems: "center", padding: 20, borderRadius: 12 }}>
        
        <Link href="/about2" style={styles.button} asChild>

          <TouchableOpacity>

            <Text style={styles.buttonText}>COMEÇAR AGORA</Text>

          </TouchableOpacity>
        </Link>

      </View>

    </View>
    

    
      // <View style={{ backgroundColor: "#fff", width: 390, height: 62, alignItems: "center", padding: 20, borderRadius: 12 }}>
        
      //   <Link href="/about3" style={styles.button} asChild>

      //     <TouchableOpacity>

      //       <Text style={styles.buttonText}>COMEÇAR AGORA</Text>

      //     </TouchableOpacity>
      //   </Link>

      // </View>

    
    
  );
}













//configurações 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E4801E',
  },
  imageContainer: {
    margin: 150,
  },
  image: {
    width: 400,
    height: 300,
  },
  image1: {
    width: 314,
    height: 85,
    marginBottom: 25
  },
  text: {
    fontFamily: 'lexend',
  },
  button: {
    // Adicione os estilos que você deseja para o botão aqui

  },
  buttonText: {
    fontWeight: "bold",

    // Adicione os estilos que você deseja para o texto do botão aqui
  },
});

