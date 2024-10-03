import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import list from "./products.json";

export default function Products() {
    return (
        <ScrollView style={styles.container}>
            <Text>
                Product 1
            </Text>
            {list.listProduct.map((item) => (

                <Link
                    key={item.id}
                    href={{
                        pathname: "/GymSingle/[id]",
                        params: { id: item.id }
                    }}>
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.textContainer}>
                            <Text style={styles.titleProduct}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                    </View>
                </Link>

            ))
            }
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