import { Card, Text } from '@rneui/themed';
import React from 'react'
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

const PropsEjemplo = ({route}) => {
    const { titulo, semestre, estado,  profesionales } = route.params;
    
  return (
    <View> 
        <Text style={styles.text}>{titulo} - semestre: {semestre} - estado: {estado ? 'vigente': 'caducado'}</Text>
        {profesionales.map(prof => (
            <Card>
            <Card.Title>{prof.name}</Card.Title>
            <Card.Divider />
            <Text>{prof.occupation}</Text>
            <Card.Divider />
            <Text>{prof.age}</Text>
            </Card>
        ))}
       
    </View>
    
  )
}

const styles = StyleSheet.create({
    text: {
      marginTop: 10,
      paddingHorizontal: 20,
      fontWeight: 'bold'
    },
  });

export default PropsEjemplo