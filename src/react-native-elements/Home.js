import { ListItem } from '@rneui/base'
import React from 'react'
import { ScrollView} from 'react-native'

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <ListItem bottomDivider onPress={() => navigation.navigate('Notas')}>
        <ListItem.Content onP>
          <ListItem.Title>Pantalla de Notas</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider onPress={() => navigation.navigate('Avatar')}>
        <ListItem.Content onP>
          <ListItem.Title>Avatar</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </ScrollView>
  )
}

export default Home