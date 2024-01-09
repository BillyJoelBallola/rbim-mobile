import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import apiClient from '../api/client'
import { useUser } from '../context/UserContext'

const ProfileScreen = ({ navigation }) => {
  const { user } = useUser()
  const [address, setAddress] = useState([])

  useEffect(() => {
    apiClient.get("/address").then(({ data }) => {
      const getAddressByUser = data.data.filter(item => item.id.toString() === user?.address_id?.toString())
      setAddress(getAddressByUser[0] || null)
    })
  }, [])

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Back to Home</Text>
      </TouchableOpacity>
      <Text>User logged: {user ? user.name : "--"}</Text>
      <Text>Address: {user ? `${address.barangay}, ${address.municipal}, ${address.province},` : "--"}</Text>
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
