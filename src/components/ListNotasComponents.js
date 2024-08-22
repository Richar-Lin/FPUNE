
import React, { useState } from 'react';
import { Text, TextInput, Button, FlatList, StyleSheet, ScrollView } from 'react-native';

const ListNotasComponents = () => {
    const [materia, setMateria] = useState('');
    const [materias, setMaterias] = useState([]);
    const [nota, setNota] = useState(0);
  
    const addMateria = () => {
      if (materia && nota) {
        setMaterias([...materias, { key: Date.now().toString(), value: materia, calificacion: nota }]);
        setMateria('');
        setNota(0);
      }
    };
  
    const deleteMateria = () => {
        setMaterias([])
    };
  
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Carga de Calificaciones 8vo Semestre</Text>
        <TextInput
          style={styles.input}
          placeholder="Cargar la materia..."
          value={materia}
          onChangeText={setMateria}
        />
         <TextInput
          style={styles.input}
          placeholder="Cargar la nota..."
          value={nota}
          keyboardType='numeric'
          onChangeText={setNota}
        />
        <Button title="Agregar" onPress={addMateria} />
        <Text style={styles.title}>Lista de Materias:</Text>
        <FlatList
          style = {{marginVertical: 20}}
          data={materias}
          renderItem={({ item }) => (
              <Text style={styles.materia}>{item.value + '  -  ' + item.calificacion}</Text>
          )}
        />
        <Button title="Eliminar" onPress={deleteMateria}  color="red" disabled={!materias.length > 0}/>
      </ScrollView>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  materia: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    marginVertical: 10,
    fontWeight: 'bold'
  }
});

export default ListNotasComponents
