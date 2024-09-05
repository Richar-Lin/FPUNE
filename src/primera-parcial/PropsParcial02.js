import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PropsParcial02 = ({ route }) => {
  const { inputValue, semestre } = route.params;

  return (
    <View >
      <Text style={styles.text}>Mi nombre: {inputValue}, actualmente curso el {semestre} semestre. </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    paddingHorizontal: 20,
    fontWeight: 'bold'
  },
});

export default PropsParcial02;