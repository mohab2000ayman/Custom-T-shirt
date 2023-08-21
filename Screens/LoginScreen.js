import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Import icons from react-native-vector-icons
import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Login() {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate("Home");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/icon.png")}
        onError={() => console.log("Error loading image")}
      />

      <StatusBar style="auto" />
      <View style=  {{ width: "70%", alignSelf: "center" }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(email) => setEmail(email)}
            placeholder="Enter Email"
            keyboardType="email-address"
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(password) => setPassword(password)}
            placeholder="Enter Password"
            keyboardType="default"
          />
        </View>
      </View>

      <TouchableOpacity style={[styles.button]} onPress={handleButtonPress}>
        <Icon name="login" size={24} color="#fff" />
        <Text style={{ color: "#fff", marginLeft: 5 }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  image: {
    alignSelf: "center",
    marginBottom: 40,
    width: 150,
    height: 150,
  },

  label: {
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 17,
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
    marginTop: 20,
  },
});
