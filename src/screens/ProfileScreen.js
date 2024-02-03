import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUser } from '../context/UserContext'
import apiClient from '../api/client'

import { Ionicons } from '@expo/vector-icons';
import HeightSpacer from '../components/spacer/HeightSpacer';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const ProfileScreen = ({ navigation }) => {
  const { user } = useUser()
  const [address, setAddress] = useState([])
  const [currentPassword, setCurrentPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  useEffect(() => {
    apiClient.get("/address").then(({ data }) => {
      const getAddressByUser = data.data.filter(item => item.id.toString() === user?.address_id?.toString())
      setAddress(getAddressByUser[0] || null)
    })
  }, [])

  const alertMessage = (title, details) => {
    Alert.alert(
      title, 
      details, 
      [{text: 'OK'}],
      {cancelable: true}
    );
  }

  const saveChanges = async () => {
    if(currentPassword === '' || confirmPassword === '' || newPassword === ''){
      return alertMessage('Failed', 'Fill up all fields.')
    }

    if(confirmPassword !== newPassword){
      return alertMessage("Failed", "Password did not match")
    }

    if(newPassword.length < 5){
      return alertMessage("Failed", "Password must be 5 characters or more")
    }

    const securityData = { currentPassword, confirmPassword, newPassword, id: user?.id }

    const { data } = await apiClient.put("/user/mobile/security", securityData)

    if(data.success){
      setCurrentPassword('')
      setConfirmPassword('')
      setNewPassword('')
      return alertMessage("Success", data.message)
    }else{
      return alertMessage('Failed', data.message)
    }
  }

  return (
    <View style={styles.root}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginRight: 4 }}>
          <Ionicons name='arrow-back-sharp' size={30} />        
        </TouchableOpacity>
        <Text style={{ fontSize: 34, fontWeight: 600 }}>Profile</Text>
      </View>
      <Text style={{ fontSize: 14 }}>Effortlessly manage and update your profile seurity information with profile management feature.</Text>
      
      <HeightSpacer size={20}/>

      <View style={{ backgroundColor: '#f1f1f1', paddingVertical: 5, paddingBottom: 8, paddingHorizontal: 8, borderRadius: 10 }}>
        <Text style={{ fontSize: 24, fontWeight: 400 }}>{user ? user.name : "--"}</Text>
        <Text>{user ? `${address.barangay}, ${address.municipal}, ${address.province}` : "--"}</Text>
      </View>

      <HeightSpacer size={20}/>

      <View>
        <Text style={{ fontSize: 18, fontWeight: 400 }}>Security</Text>

        <HeightSpacer size={5}/>

        <CustomInput
          secureTextEntry={true}
          label={'Current Password'}
          placeholder={"**********"}
          value={currentPassword} 
          setValue={setCurrentPassword}
        />

        <HeightSpacer size={10}/>

        <CustomInput
          secureTextEntry={true}
          label={'Confirm Password'}
          placeholder={"**********"}
          value={confirmPassword} 
          setValue={setConfirmPassword}
        />

        <HeightSpacer size={10}/>

        <CustomInput
          secureTextEntry={true}
          label={'New Password'}
          placeholder={"**********"}
          value={newPassword} 
          setValue={setNewPassword}
        />
      </View>

      <HeightSpacer size={20}/>

      <CustomButton text={'SAVE CHANGES'} onPress={saveChanges}/>

    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    height: '100%',
    backgroundColor: '#fff'
  }
})

export default ProfileScreen
