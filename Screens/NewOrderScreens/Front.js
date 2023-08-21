import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  PanResponder,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import Icon1 from "react-native-vector-icons/MaterialIcons"; // Import the desired icon set
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons"; // Import the desired icon set
import BottomNavBar from "./BottomNav";
import FontGalleryModal from "./FontModal";
import ColorPaletteModal from "./ColorModal"; // Assuming they're in the same directory

const Front = () => {
  const navigation = useNavigation();
  [rotationDegree, setRotationDegree] = useState(0);

  const rotateObjectLeft = () => {
    // Rotate by 45 degrees on each click
    setRotationDegree(rotationDegree - 20);
  };
  const rotateObjectRight = () => {
    // Rotate by 45 degrees on each click
    setRotationDegree(rotationDegree + 20);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: {
        backgroundColor: "#fff", // Customize the background color
      },
      headerTintColor: "#000", // Customize the text color
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 22,
      },
      headerTitleAlign: "center",

      headerLeft: () => (
        <Icon1.Button
          name="arrow-back"
          backgroundColor={"#fff"}
          size={30}
          color="black"
          onPress={() => navigation.goBack()}
        />
      ),
      headerRight: () => (
        <Icon2.Button
          name="page-next-outline"
          backgroundColor={"#fff"}
          size={30}
          color="black"
          onPress={() => navigation.navigate("Back")}
        />
      ),
      headerTitle: () => (
        <View style={{ flexDirection: "row" }}>
          <Icon1.Button
            name="rotate-left"
            backgroundColor={"#fff"}
            size={30}
            color="black"
            onPress={rotateObjectLeft}
          />
          <Icon1.Button
            name="rotate-right"
            backgroundColor={"#fff"}
            size={30}
            color="black"
            onPress={rotateObjectRight}
          />
        </View>
      ),
    });
  }, [navigation]);
  // --------------------------------------------------------

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // ---------------------------------------------------------

  //fontmodal
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFont, setSelectedFont] = useState("System");
  ////////////////////////////////////////////
  //colorModal
  const [isPaletteVisible, setIsPaletteVisible] = useState(false);
  const [currentColor, setCurrentColor] = useState("#fff");
  const togglePaletteModal = () => {
    setIsPaletteVisible(!isPaletteVisible);
  };
  /////////////////////////////////////////////

  const [TextINPVisible, setTextINPVisibility] = useState(false);

  const toggleAddText = () => {
    setTextINPVisibility(!TextINPVisible);
  };

  [TextVisible, setTextVisibility] = useState(false);

  const toggleText = () => {
    TextVisible = setTextVisibility(true);
  };

  const [inputText, setInputText] = useState("");

  const [TextSize, setTextSize] = useState({ width: 150, height: 100 });
  const [Textposition, setTextPosition] = useState({ x: 70, y: 120 });

  const [Imagesize, setImageSize] = useState({ width: 200, height: 200 });
  const [Imageposition, setImagePosition] = useState({ x: 100, y: 200 });

  const calculateFontSize = () => {
    // Adjust this calculation as needed
    const fontSize = Math.min(TextSize.width, TextSize.height) * 0.5;
    return fontSize;
  };

  const panRespondertext = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.numberActiveTouches === 1) {
          const newWidth = TextSize.width + gestureState.dx;
          const newHeight = TextSize.height + gestureState.dy;
          setTextSize({ width: newWidth, height: newHeight });
        } else if (gestureState.numberActiveTouches === 2) {
          setTextPosition({
            x: Textposition.x + gestureState.dx,
            y: Textposition.y + gestureState.dy,
          });
        }
      },
    })
  ).current;

  const panResponderImage = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.numberActiveTouches === 1) {
          const newWidth = Imagesize.width + gestureState.dx;
          const newHeight = Imagesize.height + gestureState.dy;
          setImageSize({ width: newWidth, height: newHeight });
        } else if (gestureState.numberActiveTouches === 2) {
          setImagePosition({
            x: Imageposition.x + gestureState.dx,
            y: Imageposition.y + gestureState.dy,
          });
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <View style={styles.Preview}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={TextINPVisible}
          onRequestClose={toggleAddText}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text>Enter Text:</Text>
              <TextInput
                style={styles.input}
                value={inputText}
                onChangeText={setInputText}
                placeholder="Enter text..."
              />
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity style={styles.button} onPress={toggleAddText}>
                  <Text>Close</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    toggleText();
                    toggleAddText();
                  }}
                >
                  <Text>Done</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <FontGalleryModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onFontSelect={(font) => {
            setSelectedFont(font);
            setModalVisible(true);
          }}
        />
        <ColorPaletteModal
          isVisible={isPaletteVisible}
          onToggleModal={togglePaletteModal}
          onColorSelect={(color) => {
            setCurrentColor(color);
            togglePaletteModal();
          }}
          buttonText="Close"
        />
        <Image
          style={styles.image}
          source={require("../../assets/frontt.jpg")}
          onError={() => console.log("Error loading image")}
        />

        <View
          style={[
            {
              flex: 1,
              width: TextSize.width,
              height: TextSize.height,

              // backgroundColor: "red",
              position: "absolute",
              left: Textposition.x,
              top: Textposition.y,
            },
            { transform: [{ rotate: `${rotationDegree}deg` }] },
          ]}
          {...panRespondertext.panHandlers}
        >
          {TextVisible && (
            <TextInput
              value={inputText}
              onChangeText={setInputText}
              editable={true}
              placeholder="Enter text here"
              fontFamily={selectedFont}
              style={{
                flex: 1,
                fontSize: calculateFontSize(),
                // alignSelf: "stretch", // Stretch the text horizontally
                textAlign: "center",
                // fontWeight: "bold",
                borderWidth: 1,
                fontFamily: selectedFont,
                color: currentColor,
              }}
            />
          )}
        </View>

        <View
          style={[
            {
              flex: 1,
              width: Imagesize.width,
              height: Imagesize.height,
              // backgroundColor: "red",
              position: "absolute",
              left: Imageposition.x,
              top: Imageposition.y,
            },
            { transform: [{ rotate: `${rotationDegree}deg` }] },
          ]}
          {...panResponderImage.panHandlers}
        >
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: Imagesize.width,
                height: Imagesize.height,
                resizeMode: "contain",
              }}
            />
          )}
        </View>
      </View>
      <BottomNavBar
        OnPressText={toggleAddText}
        OnPressTextColor={togglePaletteModal}
        OnPressImage={pickImage}
        OnPressFont={() => setModalVisible(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 0, paddingTop: 0, backgroundColor: "#fff" },
  Preview: {
    borderWidth: 0,
    width: "100%",
    height: "90%",
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: "100%",
    resizeMode: "cover",
    height: "100%",
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // semi-transparent background
  },
  modalView: {
    width: 250,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  button: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
    marginLeft: 20,
  },
});

export default Front;
