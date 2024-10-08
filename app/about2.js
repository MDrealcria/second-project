import { Text, StyleSheet, View, ScrollView, Link } from "react-native";


export default function About2() {
    return (
        <View style={styles.principal}>
            <View style={styles.container}>
                <Text style={styles.text}>Rotinas de treino</Text>
                source
            </View>

            <View style={styles.mensage}>
                <Link href="/about3" style={styles.button} asChild>
                <Text style={styles.text}>Iniciante</Text>
                </Link>
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
    container: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        padding: 16, // Adicione algum padding se necessário
    },
        

    container: {
        backgroundColor: "#fff",
        width: '100%',
        height: 62,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 35,
        flexDirection: 'row',
    },
    mensage: {
        backgroundColor: '#24E29A',
        width: '100%',
        height: 100,
        marginLeft: 20 ,
        // marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginTop: 25,
    },
    mensage1: {
        backgroundColor: '#B721FE',
        width: '100%',
        height: 100,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginTop: 30,
    },
    mensage2: {
        backgroundColor: '#E70046',
        width: '100%',
        height: 100,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginTop: 25,
    },
    mensage3: {
        backgroundColor: '#FCBA2E',
        width: '100%',
        height: 100,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginTop: 25,
    },
    text: {
        textAlign: 'center',
        color: '#000',
        fontSize: 18,
    },
    button: {
        // Adicione os estilos que você deseja para o botão aqui
    },
});
