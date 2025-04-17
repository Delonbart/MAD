import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const Exercise2 = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Profile</Text>
      <Image style={styles.image} source={require('./assets/pp.jpg')} />

      <View style={styles.container}>
        <Text style={styles.label}>Nama:</Text>
        <Text style={styles.info}>Delon Puiya</Text>

        <Text style={styles.label}>Umur:</Text>
        <Text style={styles.info}>20 Tahun</Text>

        <Text style={styles.label}>Tempat, Tanggal Lahir:</Text>
        <Text style={styles.info}></Text>

        <Text style={styles.label}>Asal:</Text>
        <Text style={styles.info}>Palu</Text>

        <Text style={styles.label}>Fakultas:</Text>
        <Text style={styles.info}>Sisten Informasi</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
    alignSelf: 'center',
    marginVertical: 20,
    marginTop: -20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: 'black',
    padding: 20,
    margin: 20,
    color: 'black',
    marginTop: -30,
  },
  container: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#f8f8f8',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Exercise2;
