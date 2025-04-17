import React from 'react';
import {View, StyleSheet} from 'react-native';
import Title from './Title/title';
import Input from './Input/input';
import Button from './Button/button';

const Exercise5 = () => {
  return (
    <View style={styles.container}>
      <Title />
      <Input label="Username" placeholder="Masukkan username anda" />
      <Input label="Password" placeholder="Masukkan password anda" />
      <Input label="Address" placeholder="Masukkan address anda" />
      <Button title="Sign in with Google" type="google" />
      <Button title="Sign in with Facebook" type="facebook" />
      <Button title="Sign in with Apple" type="apple" />
    </View>
  );
};

export default Exercise5;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
});
