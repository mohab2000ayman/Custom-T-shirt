import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/AntDesign"; // Import icons from react-native-vector-icons

const DetailsOfOrder = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState("");
  const [colorType, setColorType] = useState("");

  const items = [
    { label: "T-Shirt", value: "T-Shirt" },
    { label: "Hoodie", value: "Hoodie" },
  ];

  const colors = [
    { label: "Black", value: "Black" },
    { label: "White", value: "White" },
    { label: "Yellow", value: "Yellow" },
    { label: "Blue", value: "Blue" },
    { label: "Red", value: "Red" },
  ];
  const sizes = [
    { label: "XS", value: "XS" },
    { label: "S", value: "S" },
    { label: "M", value: "M" },
    { label: "L", value: "L" },
    { label: "XL", value: "XL" },
    { label: "XXL", value: "XXL" },
  ];
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "New Order",
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

  const handleButtonPress = () => {
    navigation.navigate("Front");
  };

  return (
    <View style={styles.container}>
      <View style={styles.quantityContainer}>
        <Text style={styles.label}>Item:</Text>
        <Picker
          style={styles.picker}
          selectedValue={selectedItem}
          onValueChange={(itemValue) => setSelectedItem(itemValue)}
        >
          <Picker.Item label="Select an item" value="" />
          {items.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      </View>

      {selectedItem && (
        <View style={styles.quantityContainer}>
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
        </View>
      )}

      {selectedSize && (
        <View style={styles.quantityContainer}>
          <Text style={styles.label}>Color:</Text>

          <Picker
            style={styles.picker}
            selectedValue={selectedColor}
            onValueChange={(colorValue) => setSelectedColor(colorValue)}
          >
            <Picker.Item label="Select a color" value="" />
            {colors.map((color, index) => (
              <Picker.Item
                key={index}
                label={color.label}
                value={color.value}
              />
            ))}
          </Picker>
        </View>
      )}

      {selectedColor && (
        <View style={styles.quantityContainer}>
          <Text style={styles.label}>Quantity:</Text>
          <TextInput
            style={styles.input}
            value={quantity}
            onChangeText={setQuantity}
            placeholder="Enter Quantity"
            keyboardType="numeric"
          />
        </View>
      )}

      {quantity && (
        <View style={styles.quantityContainer}>
          <Text style={styles.label}>Item Color:</Text>
          <Picker
            style={styles.picker}
            selectedValue={colorType}
            onValueChange={(typeValue) => setColorType(typeValue)}
          >
            <Picker.Item label="Select color type" value="" />
            <Picker.Item label="Custom" value="custom" />
            <Picker.Item label="Existing" value="existing" />
          </Picker>
        </View>
      )}
      <TouchableOpacity
        style={[styles.button]}
        onPress={handleButtonPress}
      >
        <Icon name="login" size={24} color="#fff" />
        <Text style={{ color: "#fff", marginLeft: 5 }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsOfOrder;

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
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 2,
    fontWeight: "bold",
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: "50%",
    backgroundColor: "#000",
  },
});
