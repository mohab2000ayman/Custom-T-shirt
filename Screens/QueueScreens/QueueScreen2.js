import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";
import Icon1 from "react-native-vector-icons/MaterialIcons"; // Import the desired icon set
import ImageCarousel from "./ImageCarousel";
import TextCard from "./TextCard";
import Queuebtn from "./QueueBTN";



const QueueScreen2 = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Order",
      headerStyle: {
        backgroundColor: "#fff", // Customize the background color
      },
      headerTintColor: "#000", // Customize the text color
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 22,
      },
      headerTitleAlign: "center",

      headerLeft: () => (
        <Icon1.Button
          name="arrow-back"
          backgroundColor={"#fff"}
          size={30}
          color="black"
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);

  const images = [
    { source: require("../../assets/T-shirt.png") },
    { source: require("../../assets/T-shirt.png") },
    // Add more image sources
  ];
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <ImageCarousel images={images} useAlternateStyles={false} />
      </View>
      <View style={styles.data}>
        <TextCard
          orderNum="12"
          quantity="2"
          paidAmount="$50"
          totalAmount="$100"
          size="Medium"
          pickupDate="2023-08-17"
          customerName="John Doe"
          customerPhone="123-456-7890"
        />
      </View>
      <View style={{marginBottom:10}}><Queuebtn /></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    // borderBottomWidth: 2,
  },

  data: {
    marginTop: 5,
  },
});

export default QueueScreen2;
