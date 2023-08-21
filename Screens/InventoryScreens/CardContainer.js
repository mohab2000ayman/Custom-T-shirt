import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';



const CardContainer = ({ title }) => {
  return (
    <View style={styles.card}>
  
    </View>
  );
};

const styles = StyleSheet.create({
  cardText:{
    fontSize:30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    borderRadius:10,
    borderColor: '#FFFFFF'
  },
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

  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#C2C2C2',
  },
  title: {
      color: '#000000',
      fontSize: 50,   
  },
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
 
  square: {
    widht: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight:15,
  },
  itemText: {
    maxWidth: '80%'
  },
  circular: {
    width:12,
    height:12,
    borderColor:'#55BCF6',
    borderWidth:2,
    borderRadius:5,
  },
  items:{
    marginTop:30
  },
});

export default CardContainer;