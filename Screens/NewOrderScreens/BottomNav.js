import React from "react";
import { View, Button, StyleSheet } from "react-native";
import Icon1 from "react-native-vector-icons/MaterialIcons"; // Import the desired icon set
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons"; // Import the desired icon set
import Icon3 from "react-native-vector-icons/Foundation"; // Import the desired icon set

import { useNavigation } from "@react-navigation/native";

const BottomNavBar = ({
  OnPressText,
  OnPressTextColor,
  OnPressImage,
  OnPressFont,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <Icon2.Button
        name="format-text"
        backgroundColor={"#fff"}
        size={30}
        color="black"
        onPress={OnPressText}
      />
      <Icon2.Button
        name="format-font"
        backgroundColor={"#fff"}
        size={30}
        color="black"
        onPress={OnPressFont}
      />
      <Icon3.Button
        name="text-color"
        backgroundColor={"#fff"}
        size={30}
        color="black"
        onPress={OnPressTextColor}
      />

      <Icon2.Button
        name="image-area"
        backgroundColor={"#fff"}
        size={30}
        color="black"
        onPress={OnPressImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,

    backgroundColor: "#ffffff",
  },
});

export default BottomNavBar;
