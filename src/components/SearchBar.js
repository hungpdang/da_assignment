// SearchBar.js
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const SearchBar = ({value, onChange}) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChange}
      placeholder="Search..."
      autoCapitalize="none"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default SearchBar;
