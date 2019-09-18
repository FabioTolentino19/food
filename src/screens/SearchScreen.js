import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <> 
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}      
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Baratinho" />
        <ResultsList results={filterResultsByPrice('$$')} title="Medio" />
        <ResultsList results={filterResultsByPrice('$$$')} title="Caro" />
        <ResultsList results={filterResultsByPrice('$$$$')} title="Carésimo" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create ({});

export default SearchScreen;
