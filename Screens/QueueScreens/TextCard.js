import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TextCard = ({
  orderNum,
  quantity,
  paidAmount,
  totalAmount,
  size,
  pickupDate,
  customerName,
  customerPhone,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Order Details</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.detail}>Order Number: {orderNum}</Text>
        <Text style={styles.detail}>Quantity: {quantity}</Text>
        <Text style={styles.detail}>Paid Amount: {paidAmount}</Text>
        <Text style={styles.detail}>Total Amount: {totalAmount}</Text>
        <Text style={styles.detail}>Size: {size}</Text>
        <Text style={styles.detail}>Pickup Date: {pickupDate}</Text>
        <Text style={styles.detail}>Customer Name: {customerName}</Text>
        <Text style={styles.detail}>Customer Phone: {customerPhone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 15,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {},
  detail: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default TextCard;
