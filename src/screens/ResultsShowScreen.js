import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if(!result) {
    return null;
  }
  
  return (
    <View>
      <Text style={styles.title} >{result.name}</Text>
      <Text style={styles.addr} >Endereço: {result.location.address1}</Text>
      <Text style={styles.tel} >Telefone: {result.phone}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />                    
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 15,
  },
  addr: {
    marginLeft: 15,
  },
  tel: {
    marginLeft: 15,
    marginBottom: 5,
  },
  image: {
    height: 160,
    width: 250,
    borderRadius: 10,
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default ResultsShowScreen;
