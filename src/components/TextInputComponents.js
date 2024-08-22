import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const TextInputComponents = () => {
  const [text, onChangeText] = useState('Texto Carga');
  const [number, onChangeNumber] = useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Ingrese un Texto"
        keyboardType="numeric"
      />
        <TextInput
        style={styles.input}
        placeholder="Ingrese un Texto"
      />
    </SafeAreaView>
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


export default TextInputComponents
