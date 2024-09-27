import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function Products() {
    return (
        <ScrollView style={styles.container}>
            <Text>
                Product 1
            </Text>

        </ ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContente: 'center',
        alignItems: 'center',
    },
});