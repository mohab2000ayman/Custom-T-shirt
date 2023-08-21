// FontGalleryModal.js

import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const fonts = [
  "System",
  "Roboto_400Regular",
  "OpenSans_400Regular",
  "TitilliumWeb_400Regular_Italic",
  // ... any other Google fonts or font variations you've loaded
];

const FontGalleryModal = ({ visible, onClose, onFontSelect }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {fonts.map((font) => (
            <TouchableOpacity key={font} onPress={() => onFontSelect(font)}>
              <Text style={[styles.modalText, { fontFamily: font }]}>
                {font}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default FontGalleryModal;
