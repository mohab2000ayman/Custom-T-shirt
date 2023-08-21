import React from "react";
import { View, Image, FlatList, StyleSheet } from "react-native";
import { defaultStyles, alternateStyles } from "./ImageCarouselStyles.js"; // Import the styles

const ImageCarousel = ({ images, useAlternateStyles }) => {
  const styles = useAlternateStyles ? alternateStyles : defaultStyles;

  const renderItem = ({ item }) => (
    <Image source={item.source} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        snapToInterval={180}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.01}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     height: 200, // Adjust the height as needed
//     width: 175,
//     // marginBottom: 20,
//   },
//   image: {
//     width: 175, // Adjust the width as needed
//     height: "100%",
//     resizeMode: "contain",
//     // marginRight: 10,
//   },
// });

export default ImageCarousel;
