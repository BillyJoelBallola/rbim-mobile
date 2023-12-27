import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SurveyList = () => {
  return (
    <View style={styles.root}>
      <Text>SurveyList</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    paddingVertical: 70,
    height: '100%',
    backgroundColor: '#fff'
  }
})

export default SurveyList
