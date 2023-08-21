import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign"; // Import icons from react-native-vector-icons

const ButtonView = ({ onCancel, onFinish, onEdit }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.cancelButton]}
        onPress={onCancel}
      >
        <Icon name="closecircleo" size={24} color="#fff" />
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.editButton]}
        onPress={onEdit}
      >
        <Icon name="edit" size={24} color="#fff" />
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.finishButton]}
        onPress={onFinish}
      >
        <Icon name="checkcircleo" size={24} color="#fff" />
        <Text style={styles.buttonText}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: "26%",
  },
  editButton: {
    backgroundColor: "#000",
  },
  cancelButton: {
    backgroundColor: "#000",
  },
  finishButton: {
    backgroundColor: "#000",
  },
  buttonText: {
    color: "#fff",
    marginLeft: 5,
  },
});

export default ButtonView;
