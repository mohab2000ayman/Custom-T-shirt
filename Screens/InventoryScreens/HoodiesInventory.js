import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, FlatList, Modal,ScrollView } from 'react-native';
import ColorCard from './ColorCard';
import ButtonTemplate from './ButtonTemplate';

const HoodiesInventory = () => {
  const [colors, setColors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  /** */
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  /** */
  const [colorName, setColorName] = useState("");
  const [quantities, setQuantities] = useState({
    smlQ: "",
    medQ: "",
    lrgQ: "",
    XlrgQ: "",
    XXlrgQ: "",
    XXXlrgQ: "",
    XXXXlrgQ: "",
  });

  const handleAddColor = () => {
    setColors([...colors, { color: colorName, quantities }]);
    setShowModal(false);
    setColorName("");
    setQuantities({
      smlQ: "",
      medQ: "",
      lrgQ: "",
      XlrgQ: "",
      XXlrgQ: "",
      XXXlrgQ: "",
      XXXXlrgQ: "",
    });
  };
  const handleUpdateColor = () => {
    const updatedColors = [...colors];
    updatedColors[editIndex] = {
        color: colorName,
        quantities: quantities
    };
    setColors(updatedColors);
    resetModal();
};

const resetModal = () => {
    setIsEditMode(false);
    setEditIndex(null);
    setShowModal(false);
    setColorName("");
    setQuantities({
      smlQ: "",
      medQ: "",
      lrgQ: "",
      XlrgQ: "",
      XXlrgQ: "",
      XXXlrgQ: "",
      XXXXlrgQ: "",
    });
};
  const handleEditColor = (index) => {
    const colorToEdit = colors[index];
    setColorName(colorToEdit.color);
    setQuantities(colorToEdit.quantities);
    setIsEditMode(true);
    setEditIndex(index);
    setShowModal(true);
};

  const handleRemoveColor = (index) => {
    const newColors = [...colors];
    newColors.splice(index, 1);
    setColors(newColors);
  };

  return (
    <View style={styles.container}>
        <View style={styles.headz}>
        <ButtonTemplate 
        onEvent={() => setShowModal(true)}
        btnIcon="pluscircleo"
        btnText="Addcolor"
        />

        {/* <Button title="Add Color" onPress={() => setShowModal(true)} /> */}
        </View>
      
      <FlatList
        data={colors}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.colorCardContainer}>
            <ColorCard {...item.quantities} Color={item.color} />
            <View style={{flexDirection:"row",justifyContent: "space-around"}}>
            <ButtonTemplate
            onEvent={() => handleEditColor(index)}
            btnIcon="edit"
            btnText="Edit"
            />
            <ButtonTemplate
            onEvent={() => handleRemoveColor(index)}
            btnIcon="delete"
            btnText="Remove"
            />
            </View>
            
          </View>
        )}
      />

      <Modal visible={showModal} animationType="slide">
      <ScrollView keyboardDismissMode='on-drag'>
        <View style={styles.modalContainer}>
          <TextInput
            placeholder="Color Name"
            placeholderTextColor={"gray"}
            value={colorName}
            onChangeText={setColorName}
            style={styles.input}
          />
          {Object.keys(quantities).map(key => (
            <TextInput
              key={key}
              placeholder={`Quantity for ${key}`}
              placeholderTextColor={"gray"}
              value={quantities[key]}
              onChangeText={value => setQuantities(prev => ({ ...prev, [key]: value }))}
              style={styles.input}
              keyboardType="number-pad"
            />
          ))}
          <ButtonTemplate 
          btnText={isEditMode ? "Update Color" : "Add Color"} 
          onEvent={isEditMode ? handleUpdateColor : handleAddColor} 
          btnIcon="checkcircleo"
        />
          
            <ButtonTemplate
            onEvent={() => setShowModal(false)}
            btnIcon="closecircleo"
            btnText="Cancel"
            />
          
        </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:'#C2C2C2',
  },
  headz:{
    marginTop:30
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    paddingTop:120
   
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  colorCardContainer: {
    marginBottom: 20,
  },
});

export default HoodiesInventory;
