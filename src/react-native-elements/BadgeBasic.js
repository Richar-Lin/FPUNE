import { Badge } from '@rneui/themed'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BadgeBasic = () => {
  return (
    <>
      <Text style={styles.subHeader}>Badge Ejemplo</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
          marginBottom: 40,
        }}
      >
        <Badge value="3" status="success" />
        <Badge value="99+" status="error" />
        <Badge value="500" status="primary" />
        <Badge value="10" status="warning" />
      </View>  
    </>
  )
}


const styles = StyleSheet.create({
    subHeader: {
      backgroundColor : "#2089dc",
      color : "white",
      textAlign : "center",
      paddingVertical : 5,
      marginBottom : 10
    }
    })
export default BadgeBasic