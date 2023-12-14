import { StyleSheet, View } from 'react-native'
import React from 'react'

const Divider = () => {
  return (
    <View style={styles.divider} />
  )
}

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#d9d9d9"
  }
})

export default Divider
