import { useContext } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { UserContext } from '../context/UserContext';

import CustomButton from '../components/CustomButton'
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const { setToken, user } = useContext(UserContext)

  const logout = async () => {
    await setToken('rbim_token', '')
    navigation.navigate('Login')
  }

  return (
    <View style={styles.root}>
      <View style={{ flexDirection: 'row', alignItems: 'flex-center', justifyContent: 'space-between' }}>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <Ionicons name='person-outline' size={28} color={'#008605'} />
        </Pressable>
        <Pressable onPress={logout}>
          <Ionicons name='log-out-outline' size={28} color={'#008605'} />
        </Pressable>
      </View>
      <View>
        <Text style={{ fontSize: 24, color: '#b9b9b9' }}>Welcome, {user?.name}</Text>
        <Text style={styles.text}>Baseline Census for the Establishment of <Text style={{ color: '#008605', fontWeight: 700}}>Registry of Barangay Inhabitants and Migrants</Text></Text>
        <CustomButton text={"SURVEY FORM"} bColor={'#008605'} bgColor={'transparent'} fgColor={'#008605'} onPress={() => navigation.navigate('SurveyForm')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    paddingVertical: 70,
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  text: {
    paddingBottom: 100,
    fontSize: 30,
    color: '#a5a5a5'
  }
})

export default HomeScreen