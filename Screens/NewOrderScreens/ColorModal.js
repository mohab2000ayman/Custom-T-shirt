import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Modal,
  Button,
} from "react-native";

const ColorPaletteModal = ({
  isVisible,
  onToggleModal,
  onColorSelect,
  buttonText,
}) => {
  const [selectedColor, setSelectedColor] = useState("");

  const colors = [
    "#000000", // Black
    "#FFFFFF", // White
    "#0000FF", // Blue
    "#FF0000", // Red
    "#808080", // Grey
    "#800080", // Purple
    "#008000", // Green
    "#FFA500", // Orange
    "#FFFF00", // Yellow
    "#FFC0CB", // Pink
  ];

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onToggleModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.contentContainer}>
          <Text style={{ marginBottom: 20 }}>Select a color:</Text>
          <View style={styles.palette}>
            {colors.map((color) => (
              <TouchableOpacity
                key={color}
                style={[
                  styles.colorBox,
                  { backgroundColor: color },
                  color === selectedColor ? styles.selectedColor : null,
                ]}
                onPress={() => {
                  setSelectedColor(color);
                  onColorSelect && onColorSelect(color);
                }}
              />
            ))}
          </View>
          {buttonText && <Button title={buttonText} onPress={onToggleModal} />}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // This will make the background semi-transparent
  },
  contentContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  palette: {
    flexDirection: "row",
    flexWrap: "wrap", // This will arrange colors in a grid
    justifyContent: "center",
    alignItems: "center",
  },
  colorBox: {
    width: 60,
    height: 60,
    margin: 10,
    borderRadius: 5,
  },
  selectedColor: {
    borderWidth: 2,
    borderColor: "#000",
  },
});

export default ColorPaletteModal;
