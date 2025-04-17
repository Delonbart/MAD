import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({title, type}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={[styles.button, styles[type]]}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    height: 55,
  },
  google: {
    backgroundColor: 'red',
  },
  facebook: {
    backgroundColor: 'blue',
  },
  apple: {
    backgroundColor: 'black',
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
