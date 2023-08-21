import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

const CustomerDetails = ({ customer }) => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>{customer.name}</Card.Title>
        <Card.Divider />
        <Text style={styles.text}>Last Visit: {customer.lastVisit}</Text>
        <Text style={styles.text}>Phone Number: {customer.phoneNumber}</Text>
        <Text style={styles.text}>
          Number of Items: {customer.numberOfItems}
        </Text>
        <Text style={styles.text}>Total amount: {customer.totalamount}</Text>
        <Card.Divider />

        <Text style={styles.text}>Order Details:</Text>
        {customer.orderDetails.map((item, index) => (
          <View key={index} style={styles.orderDetail}>
            <Text style={styles.text}>
              - {item.name} (${item.price})
            </Text>
          </View>
        ))}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  orderDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

export default CustomerDetails;
