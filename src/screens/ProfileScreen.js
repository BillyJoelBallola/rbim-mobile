import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const ProfileScreen = ({ navigation }) => {
  const { user } = useContext(UserContext)
  

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Back to Home</Text>
      </TouchableOpacity>
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
