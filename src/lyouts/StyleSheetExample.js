import React from 'react'
import { StyleSheet } from 'react-native';

const StyleSheetExample = () => {
  return (


    <View style={{ flexDirection: 'row', height: 100 }}>
      <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
      <View style={{ width: 50, height: 50, backgroundColor: 'green', alignSelf: 'flex-end' }} />
      <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#faebd7', // antiquewhite 
  },
  text: {
    fontSize: 18,
    color: '#000000', // black 
  },
});

export default StyleSheetExample


