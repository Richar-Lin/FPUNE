import { ListItem } from '@rneui/base'
import React from 'react'
import { ScrollView } from 'react-native'

const Home = ({ navigation }) => {

  const profesionales = [
    {
      name: 'Gabriel',
      occupation: 'Analista de Sistemas',
      age: 31
    },
    {
      name: 'Juan',
      occupation: 'Ingeniero de Sistemas',
      age: 31
    }
  ]
  return (
    <ScrollView>
      <ListItem bottomDivider onPress={() => navigation.navigate('Notas')}>
        <ListItem.Content onP>
          <ListItem.Title>Pantalla de Notas</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider onPress={() => navigation.navigate('Avatar')}>
        <ListItem.Content >
          <ListItem.Title>Avatar</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider onPress={() => navigation.navigate('Badge')}>
        <ListItem.Content >
          <ListItem.Title>Badge</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider onPress={() => navigation.navigate('Card')}>
        <ListItem.Content >
          <ListItem.Title>Card</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider onPress={() => navigation.navigate('Tab')}>
        <ListItem.Content >
          <ListItem.Title>Tab</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider onPress={() => navigation.navigate('Props',
        {
          titulo: 'Lista de Alumnos', semestre: 8, estado: true,
          profesionales
        })}>
        <ListItem.Content >
          <ListItem.Title>Props</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider onPress={() => navigation.navigate('Axios')}>
        <ListItem.Content >
          <ListItem.Title>Axios</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider onPress={() => navigation.navigate('Async')}>
        <ListItem.Content >
          <ListItem.Title>Async Storage</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </ScrollView>
  )
}

export default Home