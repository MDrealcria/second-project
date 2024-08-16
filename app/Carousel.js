// // CarouselComponent.js
// import React from 'react';
// import { View, Image, StyleSheet, Dimensions } from 'react-native';
// import Carousel from 'react-native-snap-carousel';

// const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

// const images = [
//     { uri: 'https://via.placeholder.com/600x400/ff0000/ffffff?text=Slide+1' },
//     { uri: 'https://via.placeholder.com/600x400/00ff00/ffffff?text=Slide+2' },
//     { uri: 'https://via.placeholder.com/600x400/0000ff/ffffff?text=Slide+3' },
// ];

// export default function CarouselComponent() {
//     const renderItem = ({ item }) => (
//         <View style={styles.slide}>
//             <Image source={{ uri: item.uri }} style={styles.image} />
//         </View>
//     );

//     return (
//         <View style={styles.container}>
//             <Carousel
//                 data={images}
//                 renderItem={renderItem}
//                 sliderWidth={viewportWidth}
//                 itemWidth={viewportWidth}
//                 autoplay
//                 loop
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#000', // Fundo preto para o carrossel
//     },
//     slide: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     image: {
//         width: viewportWidth,
//         height: viewportHeight * 0.6, // Ajuste a altura conforme necessário
//         resizeMode: 'cover',
//     },
// });
