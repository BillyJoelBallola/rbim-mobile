import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUser } from '../context/UserContext'
import apiClient from '../api/client'

import { Ionicons } from '@expo/vector-icons';
import HeightSpacer from '../components/spacer/HeightSpacer';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const ProfileScreen = ({ navigation }) => {
  const { user, setUpdate } = useUser()
  const [address, setAddress] = useState([])
  const [newUsername, setNewUsername] = useState(user?.username)
  const [currentPassword, setCurrentPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [activeTab, setActiveTab] = useState(1)

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
    if(activeTab === 1){
      if(newUsername === ''){
        return alertMessage('Failed', 'Fill up all fields.')
      }

      if(newUsername.length < 5){
        return alertMessage("Failed", "Password must be 5 characters or more")
      }
  
      const informationData = { username: newUsername, id: user?.id }
  
      const { data } = await apiClient.put("/user/mobile/information", informationData)
  
      if(data.success){
        setNewPassword('')
        setUpdate('updated')
        return alertMessage("Success", data.message)
      }else{
        return alertMessage('Failed', data.message)
      }
    }else if(activeTab === 2){
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
        setUpdate('updated')
        return alertMessage("Success", data.message)
      }else{
        return alertMessage('Failed', data.message)
      }
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
      
      <View style={{ flexDirection: 'row', gap: 6 }}>
        <TouchableOpacity 
          style={[
            styles.buttonStyle, 
            { backgroundColor: activeTab === 1 ? 'gray' : 'transparent' }
          ]}
          onPress={() => setActiveTab(1)}
        >
          <Text style={{ color: activeTab === 1 ? 'white' : 'black' }}>Information</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.buttonStyle, 
            { backgroundColor: activeTab === 2 ? 'gray' : 'transparent' }
          ]}
          onPress={() => setActiveTab(2)}
        >
          <Text style={{ color: activeTab === 2 ? 'white' : 'black' }}>Security</Text>
        </TouchableOpacity>
      </View>

      <HeightSpacer size={20}/>
        
      
      {
        activeTab === 1 ?
        <View>
          <Text style={{ fontSize: 18, fontWeight: 400 }}>Information</Text>

          <HeightSpacer size={5}/>

          <CustomInput
            label={'New Username'}
            placeholder={"Username"}
            value={newUsername} 
            setValue={setNewUsername}
          />

        </View>
        :
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
            label={'New Password'}
            placeholder={"**********"}
            value={newPassword} 
            setValue={setNewPassword}
          />

          <HeightSpacer size={10}/>

          <CustomInput
            secureTextEntry={true}
            label={'Confirm Password'}
            placeholder={"**********"}
            value={confirmPassword} 
            setValue={setConfirmPassword}
          />
          
        </View>
      }

      <HeightSpacer size={20}/>

      <CustomButton text={'SAVE CHANGES'} onPress={saveChanges}/>

    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: '100%',
    backgroundColor: '#fff'
  },
  buttonStyle: { 
    borderWidth: 1, 
    borderColor: 'gray', 
    paddingHorizontal: 14, 
    paddingVertical: 4, 
    borderRadius: 5 
  }
})

export default ProfileScreen
