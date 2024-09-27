// import { Text, StyleSheet, View } from "react-native";

// export default function About2() {
//     return (
//         <View style={styles.principal}>
//             <View style={styles.container}>
//                 <Text>Rotinas de treino</Text>
//             </View>
//             <View style={styles.mensage}>
//                 <Text>iniciante</Text>
//             </View>

//             <View style={styles.mensage1}>
//                 <Text>Mediano</Text>
//             </View>

//             <View style={styles.mensage2}>
//                 <Text>Dificil</Text>
//             </View>

//             <View style={styles.mensage3}>
//                 <Text>Bonus</Text>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     principal: {
//         backgroundColor: "#000",
//         flex: 1,
//         padding: 16, 
//         marginLeft: "15",
//     },
//     container: {
//         backgroundColor: "#fff",
//         width: '100%', // Ajusta a largura para preencher o contêiner pai
//         height: 62,
//         borderRadius: 15,
//         justifyContent: "center",
//         alignItems: "center",
//         marginBottom: 35,
//     },
//     mensage: {
//         backgroundColor: '#24E29A',
//         width: '100%',
//         height: 100,
//         marginBottom: 10,
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: 25,
//         alignItems: "flex-start",
//         marginTop: 15,
//     },
//     mensage1: {
//         backgroundColor: '#B721FE',
//         width: '100%',
//         height: 100,
//         marginBottom: 10,
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: 25,
//         alignItems: "flex-start",
//         marginTop: 15,
//     },
//     mensage2: {
//         backgroundColor: '#E70046',
//         width: '100%',
//         height: 100,
//         marginBottom: 10,
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: 25,
//         alignItems: "flex-start",
//         marginTop: 15,
//         marginRight: "150",
//     },
//     mensage3: {
//         backgroundColor: '#FCBA2E',
//         width: '100%',
//         height: 100,
//         marginBottom: 10,
//         justifyContent: "center",
//         alignItems: "center", // Mantenha isso como "center"
//         borderRadius: 25,
//         marginTop: 15,
//         // Certifique-se de que o container tenha display flex
//         display: 'flex', // Isso é importante se ainda não estiver em um contexto flex
//     }
    
// });


import { Text, StyleSheet, View } from "react-native";

export default function About2() {
    return (
        <View style={styles.principal}>
            <View style={styles.container}>
                <Text style={styles.text}>Rotinas de treino</Text>
            </View>
            <View style={styles.mensage}>
                <Text style={styles.text}>Iniciante</Text>
            </View>
            <View style={styles.mensage1}>
                <Text style={styles.text}>Mediano</Text>
                
            </View>
            <View style={styles.mensage2}>
                <Text style={styles.text}>Difícil</Text>
            </View>
            <View style={styles.mensage3}>
                <Text style={styles.text}>Bônus</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    principal: {
        backgroundColor: "#000",
        flex: 1,
        padding: 16, 
        marginLeft: 15, // Ajuste para número
    },
    container: {
        backgroundColor: "#fff",
        width: '100%',
        height: 62,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 35,
    },
    mensage: {
        backgroundColor: '#24E29A',
        width: '100%',
        height: 100,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center", // Centraliza na horizontal
        borderRadius: 25,
        marginTop: 15,
    },
    mensage1: {
        backgroundColor: '#B721FE',
        width: '100%',
        height: 100,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginTop: 15,
    },
    mensage2: {
        backgroundColor: '#E70046',
        width: '100%',
        height: 100,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginTop: 15,
    },
    mensage3: {
        backgroundColor: '#FCBA2E',
        width: '100%',
        height: 100,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginTop: 15,
    },
    text: {
        textAlign: 'center', // Centraliza o texto
        color: '#000', // Altere para a cor que preferir
        fontSize: 18, // Ajuste o tamanho da fonte conforme necessário
    }
});