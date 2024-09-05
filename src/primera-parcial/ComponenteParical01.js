import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input, ListItem } from '@rneui/base';

const ComponenteParcial01 = ({ navigation }) => {

    const [inputValue, setInputValue] = useState('')


    return (

        <View>
            <Text style={styles.text}>Examen Primera Parcial</Text>
            <Image
                source={require('../assets/politecnica.jpg')}
                style={styles.image}
            />
            <TextInput
                placeholder='Ingresar Nombre'
                value={inputValue}
                onChangeText={setInputValue}
            />
            <ListItem bottomDivider onPress={() => navigation.navigate('PropsParcial02',
                {
                    inputValue, semestre: 8,
                })}>
                <ListItem.Content >
                    <ListItem.Title>PropsParcial02</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider onPress={() => navigation.navigate('AxiosParcial03')}>
                <ListItem.Content >
                    <ListItem.Title>AxiosParcial03</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider onPress={() => navigation.navigate('AsyncStorageParcial04')}>
                <ListItem.Content >
                    <ListItem.Title>AsyncStorageParcial04</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </View>


    )
};


const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        fontSize: 30,
        paddingHorizontal: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 20,
        alignSelf: 'center',
    }
});


export default ComponenteParcial01;