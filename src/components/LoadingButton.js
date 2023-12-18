import { StyleSheet,  ActivityIndicator } from 'react-native'
import React from 'react'

const LoadingButton = ({ bgColor, color, borderColor }) => {
  return (
    <ActivityIndicator 
      color={color} 
      style={[
        styles.loader,
        bgColor ? { backgroundColor: bgColor } : {},
        borderColor ? { borderColor: borderColor } : {}
      ]} 
    />
  )
}

export default LoadingButton

const styles = StyleSheet.create({
  loader: {  
    width: '100%', 
    paddingVertical: 15, 
    borderRadius: 5 ,
    borderWidth: 2
  }
})