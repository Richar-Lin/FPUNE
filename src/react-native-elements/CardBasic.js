import { Card, Image } from '@rneui/themed';
import React from 'react'
import { View } from 'react-native';
import { StyleSheet, Text } from 'react-native';

const CardBasic = () => {

    const users = [
        {
          name: 'brynn',
          avatar: 'https://uifaces.co/our-content/donated/1H_7AxP0.jpg',
        },
        {
          name: 'thot leader',
          avatar:
            'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
        },
        {
          name: 'jsa',
          avatar: 'https://uifaces.co/our-content/donated/bUkmHPKs.jpg',
        },
        {
          name: 'talhaconcepts',
          avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
        },
        {
          name: 'andy vitale',
          avatar: 'https://uifaces.co/our-content/donated/NY9hnAbp.jpg',
        },
        {
          name: 'katy friedson',
          avatar:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
        },
        ];
        
  return (
    <>
    <Card>
          <Card.Title>CARD WITH DIVIDER</Card.Title>
          <Card.Divider />
          {users.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: u.avatar }}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
            );
          })}
        </Card>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fonts: {
      marginBottom: 8,
    },
    user: {
      flexDirection: 'row',
      marginBottom: 6,
    },
    image: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    name: {
      fontSize: 16,
      marginTop: 5,
    },
    });
    
export default CardBasic