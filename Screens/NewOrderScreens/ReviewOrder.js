import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Picker } from "@react-native-picker/picker";
import Icon2 from "react-native-vector-icons/MaterialIcons"; // Import icons from react-native-vector-icons
import Icon1 from "react-native-vector-icons/Fontisto"; // Import icons from react-native-vector-icons
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Import icons from react-native-vector-icons

const QuantityPage = () => {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Review Order",
      headerStyle: {
        backgroundColor: "#fff", // Customize the background color
      },
      headerTintColor: "#000", // Customize the text color
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 22,
      },
      headerTitleAlign: "center",
    });
  }, [navigation]);

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const sizes = [
    { label: "Small", value: "small" },
    { label: "Medium", value: "medium" },
    { label: "Large", value: "large" },
  ];

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(0, prev - 1));
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Size:</Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedSize}
        onValueChange={(sizeValue) => setSelectedSize(sizeValue)}
      >
        <Picker.Item label="Select a size" value="" />
        {sizes.map((size, index) => (
          <Picker.Item key={index} label={size.label} value={size.value} />
        ))}
      </Picker>
      <Text style={styles.label}>Quantity:</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decrementQuantity} style={styles.button}>
          <Icon name="minus" size={28} color="#000" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={String(quantity)}
          onChangeText={(value) => setQuantity(Number(value))}
          keyboardType="numeric"
          editable={false}
        />
        <TouchableOpacity onPress={incrementQuantity} style={styles.button}>
          <Icon name="plus" size={28} color="#000" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.buttonsBottom]}>
        <Icon name="content-save" size={24} color="#fff" />
        <Text style={{ color: "#fff", marginLeft: 5 }}>Save</Text>
      </TouchableOpacity>
      <View style={styles.Btncontainer}>
        <TouchableOpacity style={[styles.buttonsBottom]}>
          <Icon1 name="shopping-basket-add" size={24} color="#fff" />
          <Text style={{ color: "#fff", marginLeft: 5 }}>Add New Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonsBottom]}>
          <Icon name="cart-check" size={24} color="#fff" />
          <Text style={{ color: "#fff", marginLeft: 5 }}>CheckOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  picker: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    backgroundColor: "#f9f9f9",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    backgroundColor: "#f9f9f9",
    textAlign: "center",
    fontSize: 16,
    marginHorizontal: 5,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
  label: {
    fontSize: 20,
    marginBottom: 2,
    fontWeight: "bold",
  },
  buttonsBottom: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: "45%",
    backgroundColor: "#000",
  },
  Btncontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});

export default QuantityPage;
