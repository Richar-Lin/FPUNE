import React from 'react';

import {
  ScrollView,
  StyleSheet,
} from 'react-native';
//Componentes que se van sumando a mi pantalla principal
import BasicComponents from './src/components/BasicComponents';
import TextComponents from './src/components/TextComponents';
import TextInputComponents from './src/components/TextInputComponents';
import ListNotasComponents from './src/components/ListNotasComponents';
import ListaAlumnosComponentes from './src/components/ListaAlumnosComponentes';
import Home from './src/react-native-elements/Home';
import AvatarBasic from './src/react-native-elements/Avatar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <ScrollView>
     // <BasicComponents></BasicComponents>
      //<TextComponents></TextComponents>
       //<TextInputComponents></TextInputComponents>*/}
      //<ListNotasComponents></ListNotasComponents>*/}
      //<ListaAlumnosComponentes></ListaAlumnosComponentes>*/}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Notas" component={ListNotasComponents} />
          <Stack.Screen name="Avatar" component={AvatarBasic} />
        </Stack.Navigator>
      </NavigationContainer>
   // </ScrollView>

  );
}

const styles = StyleSheet.create({

});

export default App;

