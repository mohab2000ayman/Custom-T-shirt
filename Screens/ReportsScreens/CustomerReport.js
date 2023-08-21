import React from "react";
import { SafeAreaView } from "react-native";
import CustomerDetails from "./ReportComponent";
import { useNavigation } from "@react-navigation/native";
import Icon2 from "react-native-vector-icons/FontAwesome"; // Import the desired icon set

const App = () => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Reports",
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
  const customerData = {
    name: "John Doe",
    phoneNumber: "123-456-7890",
    numberOfItems: 5,
    lastVisit: "2023-08-19",
    totalamount: "150",
    orderDetails: [
      { name: "Item A", price: 10.0 },
      { name: "Item B", price: 15.0 },
      // ... additional items
    ],
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomerDetails customer={customerData} />
    </SafeAreaView>
  );
};

export default App;
