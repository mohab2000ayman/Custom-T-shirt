import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import CustomCard from "./CustomCard";
import { useNavigation } from "@react-navigation/native";
import ColorCard from "./ColorCard";
import ButtonTemplate from "./ButtonTemplate";
import Icon from "react-native-vector-icons/AntDesign";

const MainInventory = () => {
  const navigation = useNavigation();
  const handleCardClick = () => {
    navigation.navigate("ShirtsInventory");
  };
  const handleCardClick2 = () => {
    navigation.navigate("HoodiesInventory");
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.txt}>Inventory</Text>
      <TouchableOpacity onPress={handleCardClick}>
        <CustomCard
          style={styles.card2}
          title="Shirts"
          imageSource={require("../../assets/shirts.jpg")}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCardClick2}>
        <CustomCard
          title="Hoodies"
          imageSource={require("../../assets/hoodies.jpg")}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#C2C2C2",
  },
  txt: {
    color: "#000000",
    fontSize: 50,
    textAlign: "center",
    marginTop: 50,
    fontWeight: "bold",
    shadowColor: "#FFFFFF",
    shadowOpacity: 50,
  },
});

export default MainInventory;
