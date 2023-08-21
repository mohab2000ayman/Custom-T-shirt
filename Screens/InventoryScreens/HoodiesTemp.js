import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, FlatList, Modal } from 'react-native';
import ColorCard from './ColorCard';

const HoodiesTemp = () => {
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
        <Button title="Add Color" onPress={() => setShowModal(true)} />
        </View>
      
      <FlatList
        data={colors}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.colorCardContainer}>
            <ColorCard {...item.quantities} Color={item.color} />
            <Button title="Edit" onPress={() => handleEditColor(index)} />
            <Button title="Remove" onPress={() => handleRemoveColor(index)} />
          </View>
        )}
      />

      <Modal visible={showModal} animationType="slide">
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
          <Button 
            title={isEditMode ? "Update Color" : "Add Color"} 
            onPress={isEditMode ? handleUpdateColor : handleAddColor} 
            />
          <Button title="Cancel" onPress={() => setShowModal(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headz:{
    marginTop:30
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
   
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

export default HoodiesTemp;
