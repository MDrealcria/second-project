// import { Text, ScrollView, StyleSheet, TouchableOpacity, View, Image } from "react-native";
// import { link } from "expo-router"
// export default function about2() {
//     return (

//         <view style={style.principal}>

//          <view style={style.container}>
//                 <text>Bem Vindo ao Nexus</text>
//          </view>
         
//          <view style={style.mensage}>
//                 <text>Bem vindo a bordo</text>
//         </view>

//         </view>
//     );
// }

// const style = StyleSheet.create({
//         principal:{
//             backgroundColor:"#E4811E",
//             flex: 1,
//         },
        
//          container: {
//          display: 'flex',
//          backgroundColor: "#fff",
//          width: "390",
//          height: "62",
//          borderRadius: 15,
//          color: '000',
//           justifyContent: "center", 
//          },

//          mensage:{
//             backgroundColor: '#000',
//             width: "100",
//             height: "100",
//             marginBottom: "10",
//             justifyContent: "center"
//          }
// });
import { Text, ScrollView, StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { link } from "expo-router";

export default function About2() {
    return (
        <View style={styles.principal}>
            <View style={styles.container}>
                <Text>Bem Vindo ao Nexus</Text>
            </View>
            <View style={styles.mensage}>
                <Text>Bem vindo a bordo</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    principal: {
        backgroundColor: "#E4811E",
        flex: 1,
        padding: 16, // Adiciona um pouco de preenchimento se necessário
    },
    container: {
        backgroundColor: "#fff",
        width: 390, // Em dispositivos com largura menor, você pode usar '100%' ou um valor fixo mais apropriado
        height: 62,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center", // Alinhe o texto ao centro
        marginBottom: 10, // Adiciona um espaço abaixo
    },
    mensage: {
        backgroundColor: '#000',
        width: '100%', // Ajusta a largura para preencher o contêiner pai
        height: 100,
        marginBottom: 10, // Ajusta o espaçamento inferior
        justifyContent: "center",
        alignItems: "center", // Alinhe o texto ao centro
    }
});


