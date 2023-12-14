import { StyleSheet, Text } from 'react-native'
import React from 'react'

const CustomTitle = ({ size, text, fgColor }) => {
  return (
    <Text style={[
      styles.title, 
      size ? { fontSize: size } : {},
      fgColor ? { color: fgColor } : {},
    ]}>{text}</Text>
  )
}

export default CustomTitle

const styles = StyleSheet.create({
  title: {
    fontWeight: '600'
  }
})