import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

const Input = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.textInput} placeholder={placeholder} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  textInput: {
    height: 65,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
