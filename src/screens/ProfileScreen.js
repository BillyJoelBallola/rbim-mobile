import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const ProfileScreen = () => {
  const { user } = useContext(UserContext)
  
  return (
    <View style={styles.root}>
      <Text>User logged: {user ? user.name : "--"}</Text>
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

export default ProfileScreen
