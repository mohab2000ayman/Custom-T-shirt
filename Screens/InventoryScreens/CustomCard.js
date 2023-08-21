import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';



const CustomCard = ({ title, imageSource }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.cardImage} />
      <Text style={styles.cardText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#000000',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    marginBottom: 50,
    marginLeft:50,
    marginRight:50,
    marginTop:70,
    alignItems: 'center',
    height:220
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 60,
    fontWeight: 'bold',
    shadowColor:'#FFFFFF',
    shadowOpacity: 0 ,
    color: '#FFFFFF'
  }
});

export default CustomCard;
