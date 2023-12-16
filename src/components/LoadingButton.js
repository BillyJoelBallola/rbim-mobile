import { StyleSheet,  ActivityIndicator } from 'react-native'
import React from 'react'

const LoadingButton = ({ bgColor, color }) => {
  return (
    <ActivityIndicator 
      color={color} 
      style={[
        styles.loader,
        bgColor ? { backgroundColor: bgColor } : {}
      ]} 
    />
  )
}

export default LoadingButton

const styles = StyleSheet.create({
  loader: {  
    width: '100%', 
    paddingVertical: 15, 
    borderRadius: 5 
  }
})