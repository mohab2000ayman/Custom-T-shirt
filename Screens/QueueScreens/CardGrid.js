// CardGrid.js
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CustomCard from "./CustomCard";
const CardGrid = ({ data }) => (
  <FlatList
    data={data}
    renderItem={({ item }) => (
      <CustomCard
        quantity={item.quantity}
        size={item.size}
        pickdate={item.pickdate}
        imageSource={item.imageSource}
      />
    )}
    keyExtractor={(item) => item.id.toString()}
    numColumns={2} // 2 cards per row
    style={styles.grid}
  />
);

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    // margin: 10,
  },
});

export default CardGrid;
