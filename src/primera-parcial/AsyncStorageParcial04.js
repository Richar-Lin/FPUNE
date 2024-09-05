import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input, Button, ListItem, Text } from '@rneui/themed';

const AsyncStorageParcial04 = () => {
  const [codigo, setCodigo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [facultad, setFacultad] = useState('');
  const [dataList, setDataList] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    listar();
  }, []);

  const listar = async () => {
    try {
      setIsDisabled(false);
      const keys = await AsyncStorage.getAllKeys();
      const items = await AsyncStorage.multiGet(keys);
      setDataList(items.map(([id, value]) => {
        // Split the string into components based on a delimiter
        const [storedCarrera, storedFacultad] = value.split('|');
        return { id, carrera: storedCarrera, facultad: storedFacultad };
      }));
    } catch (error) {
      console.error('Error loading lista', error);
    }
  };

  const editar = (id, value) => {
    setCodigo(id);
    setCarrera(value.carrera);
    setFacultad(value.facultad);
    setIsDisabled(true);
  };

  const guardar = async () => {
    try {
      if (codigo.trim() === '' || carrera.trim() === '' || facultad.trim() === '') {
        Alert.alert('Error', 'Todos los campos deben ser llenados');
        return;
      }

      if (isDisabled) {
        await actualizar();
      } else {
        // Concatenate values with a delimiter
        const data = `${carrera}|${facultad}`;
        await AsyncStorage.setItem(codigo, data);
        setCodigo('');
        setCarrera('');
        setFacultad('');
        listar();
        Alert.alert('Éxito', 'Datos guardados');
      }
    } catch (error) {
      Alert.alert('Error', 'Error al guardar los datos');
      console.error(error);
    }
  };

  const actualizar = async () => {
    try {
      // Concatenate values with a delimiter
      const data = `${carrera}|${facultad}`;
      await AsyncStorage.setItem(codigo, data);
      setCodigo('');
      setCarrera('');
      setFacultad('');
      listar();
      Alert.alert('Éxito', 'Datos actualizados');
    } catch (error) {
      Alert.alert('Error', 'Error al actualizar los datos');
      console.error(error);
    }
  };

  const eliminar = async (id) => {
    try {
      await AsyncStorage.removeItem(id);
      listar();
      Alert.alert('Éxito', 'Datos eliminados');
    } catch (error) {
      Alert.alert('Error', 'Error al eliminar los datos');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Input
          placeholder="Código"
          disabled={isDisabled}
          value={codigo}
          onChangeText={setCodigo}
          style={styles.input}
        />
      </View>
      <View>
        <Input
          placeholder="Carrera"
          value={carrera}
          onChangeText={setCarrera}
          style={styles.input}
        />
      </View>
      <View>
        <Input
          placeholder="Facultad"
          value={facultad}
          onChangeText={setFacultad}
          style={styles.input}
        />
      </View>
      <Button title={isDisabled ? "Actualizar" : "Guardar"} onPress={guardar} />
      <Text h4 style={styles.title}>Lista de Datos:</Text>
      {dataList.map(({ id, carrera, facultad }) => (
        <ListItem key={id} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{carrera}</ListItem.Title>
            <ListItem.Subtitle>{facultad}</ListItem.Subtitle>
            <ListItem.Subtitle>{id}</ListItem.Subtitle>
          </ListItem.Content>
          <Button icon={{ name: 'edit', type: 'font-awesome', size: 15, color: 'white' }} onPress={() => editar(id, { carrera, facultad })} />
          <Button icon={{ name: 'trash', type: 'font-awesome', size: 15, color: 'red' }} onPress={() => eliminar(id)} />
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 15,
  },
  title: {
    marginVertical: 10,
  },
  overlayContent: {
    width: '80%',
    padding: 20,
  },
});

export default AsyncStorageParcial04;
