// ImageCarouselStyles.js

import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
  container: {
    height: 400, // Adjust the height as needed
    width: 400,
    // marginBottom: 20,
  },
  image: {
    width: 400, // Adjust the width as needed
    height: "100%",
    resizeMode: "contain",
    // marginRight: 10,
        backgroundColor: "#f0f0f0",

  },
});

export const alternateStyles = StyleSheet.create({
  container: {
    height: 200, // Adjust the height as needed
    width: 175,
    // marginBottom: 20,
  },
  image: {
    width: 175, // Adjust the width as needed
    height: "100%",
    resizeMode: "contain",

    // marginRight: 10,
  },
});
