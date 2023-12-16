import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ disable, text, onPress, bgColor, fgColor, bColor }) => {
  return (
    <TouchableOpacity 
      disabled={disable ? disable : false}
      style={[
        styles.container,
        bgColor ? { backgroundColor: bgColor } : {},
        bColor ? { borderColor: bColor } : { borderColor: 'transparent' }
      ]} 
      onPress={onPress}
    >
      <Text 
        style={[
          styles.text,
          fgColor ? { color: fgColor } : {}
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#008605',
    width: '100%',
    padding: 15,
    borderRadius: 5,
    borderWidth: 2
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600'
  }
})

export default CustomButton