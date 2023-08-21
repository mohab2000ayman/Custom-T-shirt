import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import Icon2 from "react-native-vector-icons/FontAwesome"; // Import the desired icon set
import { useNavigation } from "@react-navigation/native";

import CustomCard from "./CustomCard";
import CardGrid from "./CardGrid";
import SearchBar from "./SearchBar";

const App = () => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Orders Queue",
      headerStyle: {
        backgroundColor: "#fff", // Customize the background color
      },
      headerTintColor: "#000", // Customize the text color
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 22,
      },
      headerTitleAlign: "center",
      headerRight: () => (
        <Icon2.Button
          name="search"
          backgroundColor={"#fff"}
          size={30}
          color="black"
          onPress={() => navigation.navigate("Back")}
        />
      ),
    });
  }, [navigation]);
  const images = [
    { source: require("../../assets/T-shirt.png") },
    { source: require("../../assets/T-shirt.png") },
    { source: require("../../assets/T-shirt.png") },
    // Add more image sources
  ];

  const data = [
    {
      id: 1,
      imageSource: images,
      quantity: 2,
      size: "Large",
      pickdate: "17th August 2023",
    },
    {
      id: 2,
      imageSource: images,
      quantity: 5,
      size: "Small",
      pickdate: "18th August 2023",
    },
    {
      id: 3,
      imageSource: images,
      quantity: 2,
      size: "Large",
      pickdate: "17th August 2023",
    },
    {
      id: 4,
      imageSource: images,
      quantity: 5,
      size: "Small",
      pickdate: "18th August 2023",
    },
    {
      id: 5,
      imageSource: images,
      quantity: 2,
      size: "Large",
      pickdate: "17th August 2023",
    },
    {
      id: 6,
      imageSource: images,
      quantity: 5,
      size: "Small",
      pickdate: "18th August 2023",
    },
    {
      id: 7,
      imageSource: images,
      quantity: 2,
      size: "Large",
      pickdate: "17th August 2023",
    },
    {
      id: 8,
      imageSource: images,
      quantity: 5,
      size: "Small",
      pickdate: "18th August 2023",
    },
    // ... add more data
  ];

  return (
    // <ScrollView style={styles.container}>
    <View style={styles.container}>
      {/* <View style={{ margin: 10, marginTop: 15 }}>

        <SearchBar placeholder="Search" />
      </View> */}

      <CardGrid data={data} />
    </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: "#fff",
    // borderWidth: 2,
    marginTop: 15,
  },
});

export default App;
