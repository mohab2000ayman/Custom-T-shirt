import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign"; // Import icons from react-native-vector-icons

const ButtonTemplate = ({ onEvent , btnIcon , btnText }) => {
  return (
    
      <TouchableOpacity
        style={[styles.button]}
        onPress={onEvent}
      >
        <Icon name={btnIcon} size={24} color="#fff" />
        <Text style={styles.buttonText}>{btnText}</Text>
      </TouchableOpacity>
      
   
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
    width:"33%",
    backgroundColor:"#000",
    alignSelf:"center",
    marginBottom:15,
    marginTop:10
  },
  buttonText: {
    color: "#fff",
    marginLeft: 5,
  },
});

export default ButtonTemplate;