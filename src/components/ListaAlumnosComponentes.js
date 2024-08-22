
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput } from 'react-native';


const ListaAlumnosComponentes = () => {
    const [ci, setCi] = useState(0);
    const [alumno, setAlumno] = useState('');
    const [alumnos, setAlumnos] = useState([]);
    const [email, setEmail] = useState('');

    const addAlumno = () => {
        if (ci && alumno && email) {
            setAlumnos([...alumnos, { Key: Date.now().toString(), cedula: ci, nombre: alumno, correo: email }]);
            setCi(0);
            setAlumno('');
            setEmail('');
        }
    };

    const deleteAlumno = () => {
        setAlumnos([])
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Alumnos del 8vo semestre</Text>
            <TextInput
                style={styles.input}
                placeholder="Cargar ci del alumno"
                value={ci}
                keyboardType='numeric'
                onChangeText={setCi}
            />
            <TextInput
                style={styles.input}
                placeholder="Cargar nombre del alumno"
                value={alumno}
                onChangeText={setAlumno}
            />
            <TextInput
                style={styles.input}
                placeholder="Cargar email del alumno"
                value={email}
                onChangeText={setEmail}
            />
            <Button title="Agregar" onPress={addAlumno} />
            <Text style={styles.title}>Lista de Alumnos:</Text>
            <FlatList
                style={{ marginVertical: 20 }}
                data={alumnos}
                renderItem={({ item }) => (
                    
                    <Text style={styles.alumno}>{item.cedula + ' - ' + item.nombre + '  -  ' + item.correo}</Text>
                )}
            />
            <Button title="Eliminar" onPress={deleteAlumno} color="red" disabled={!alumnos.length > 0} />
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
    alumno: {
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

export default ListaAlumnosComponentes