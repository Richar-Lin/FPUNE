import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input, ListItem } from '@rneui/base';

const Componente01 = ({ navigation }) => {

    const [inputValue, setInputValue] = useState('')


    return (
        <View>
            <Text style={styles.text}>Pantalla Principal</Text>
            <TextInput
                placeholder='Nombre'
                value={inputValue}
                onChangeText={setInputValue}
            />
            <ListItem bottomDivider onPress={() => navigation.navigate('Props02',
                {
                    inputValue, estado: false,
                })}>
                <ListItem.Content >
                    <ListItem.Title>Props</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider onPress={() => navigation.navigate('Axios03')}>
                <ListItem.Content >
                    <ListItem.Title>Axios</ListItem.Title>
                </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider onPress={() => navigation.navigate('AsyncStorage04')}>
                <ListItem.Content >
                    <ListItem.Title>Async Storage</ListItem.Title>
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
});


export default Componente01;