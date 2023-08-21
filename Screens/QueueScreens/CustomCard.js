import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import ImageCarousel from "./ImageCarousel";
import { useNavigation } from "@react-navigation/native";

const CustomCard = ({ quantity, size, pickdate, imageSource }) => {
  const navigation = useNavigation();

  const handleCardClick = () => {
    navigation.navigate("QueueScreen2");
  };
  return (
    <View style={styles.card}>
      <ImageCarousel
        images={imageSource}
        useAlternateStyles={true}
        style={styles.cardImage}
      />
      {/* <View style={{ backgroundColor: "#000" ,borderWidth:1,width:"100%" }} /> */}
      <TouchableOpacity onPress={handleCardClick}>
        <View style={styles.TextCont}>
          <Text style={styles.cardText}><Text style={{fontWeight:"bold",marginLeft:1}}>Pick-Date:</Text>{pickdate}</Text>
          <Text style={styles.cardText}><Text style={{fontWeight:"bold",marginLeft:1}}>Quantity:</Text>{quantity}</Text>
          <Text style={styles.cardText}><Text style={{fontWeight:"bold",marginLeft:1}}>Size:</Text>{size}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f0f0f0",
    // shadowColor: "#f0f0f0",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    marginBottom: 2,
    width: "50%",
    marginHorizontal: 1,
  },
  cardImage: {
    // width: 175, // Adjust the width as needed
    // height: "100%",
    // resizeMode: "contain",
    // marginRight: 10,
    // width: 200,
    // height: 200,
    // resizeMode: "contain",
  },
  cardText: {
    marginLeft: 20,
    marginBottom: 2,
    fontSize: 13,
    // fontWeight: "bold",
  },
});

export default CustomCard;
