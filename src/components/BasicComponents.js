import React from 'react'
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import TextComponents from './TextComponents'
TextComponents

const BasicComponents = () => {
  return (
   
      <ScrollView style={styles.scrollView}>
        
        <Text>Ingresando varios componentes aquí...</Text>
        <Text>
          {'\n'}
          {'\n'}

        </Text>
          <View>
            <Text style={styles.text}>Hola, mundo!</Text>
          </View>

          <View>
              <TextInput
                  style={styles.input}
                  placeholder="Ingresa tu nombre"
                  onChangeText={(text) => console.log(text)}
                  
              />
          </View>

          <View>
              <Pressable
                  onPress={() => alert('Botón presionado')}>
                      <Text>Boton de ejemplo</Text>
              </Pressable>
          </View>

          <View>
              <Image
                source={require('../assets/politecnica.jpg')}
                style={styles.image}
              />
          </View>
          
        </ScrollView>
)}

const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'cover',
      marginBottom: 20,
    },
    scrollView: {
      marginHorizontal: 20,
    },
  });

export default BasicComponents
