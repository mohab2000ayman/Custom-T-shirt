
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

const ColorCard = ({Color,smlQ,medQ,lrgQ,XlrgQ,XXlrgQ,XXXlrgQ,XXXXlrgQ}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.blackCard}>
        <Text style={styles.title}> {Color}</Text>
        <View style={styles.columnContainer}>
          <View style={styles.leftColumn}>

            <View style={styles.whiteCard}>
              <Text>Size: S</Text>
              <Text>Quantity: {smlQ}</Text>
            </View>

            <View style={styles.whiteCard}>
              <Text>Size: M</Text>
              <Text>Quantity: {medQ}</Text>
            </View>

            <View style={styles.whiteCard}>
              <Text>Size: L</Text>
              <Text>Quantity: {lrgQ}</Text>
            </View>

            <View style={styles.whiteCard}>
              <Text>Size: XL</Text>
              <Text>Quantity: {XlrgQ}</Text>
            </View>
          </View>

          <View style={styles.rightColumn}>

            <View style={styles.whiteCard}>
              <Text>Size: 2XL</Text>
              <Text>Quantity: {XXlrgQ}</Text>
            </View>

            <View style={styles.whiteCard}>
              <Text>Size: 3XL</Text>
              <Text>Quantity: {XXXlrgQ}</Text>
            </View>

            <View style={styles.whiteCard}>
              <Text>Size: 4XL</Text>
              <Text>Quantity: {XXXXlrgQ}</Text>
            </View>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2C2C2',
  },
  blackCard: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 8,
    width: '90%',
  },
  title: {
    color: 'white',
    fontSize: 30,
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftColumn: {
    flex: 1,
    marginRight: 10,  // spacing between the two columns
  },
  rightColumn: {
    flex: 1,
    marginLeft: 10,  // spacing between the two columns
  },
  whiteCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,  // spacing between the cards in each column
  },
});

export default ColorCard;
