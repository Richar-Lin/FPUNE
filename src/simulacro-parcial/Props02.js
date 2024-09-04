import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Props02 = ({ route }) => {
  const { inputValue, estado } = route.params;

  return (
    <View >
      <Text style={styles.text}>nombre: {inputValue} - estado: {estado ? 'verdedero': 'falso'} </Text>
      
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

export default Props02;