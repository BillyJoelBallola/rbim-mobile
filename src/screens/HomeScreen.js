import { useContext } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { UserContext } from '../context/UserContext';

import CustomButton from '../components/CustomButton'
import { Ionicons } from '@expo/vector-icons';

import logoWhite from '../../assets/images/logo-white.png'

const HomeScreen = ({ navigation }) => {
  const { setToken, user } = useContext(UserContext)

  const logout = async () => {
    await setToken('rbim_token', '')
    navigation.navigate('Login')
  }

  return (
    <View style={styles.root}>
      <View style={styles.topContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-center', justifyContent: 'space-between' }}>
          <Pressable onPress={() => navigation.navigate('Profile')}>
            <Ionicons name='person-outline' size={28} color={'#fff'} />
          </Pressable>
          <Pressable onPress={logout}>
            <Ionicons name='log-out-outline' size={28} color={'#fff'} />
          </Pressable>
        </View>
        <View style={styles.imageContainer}>
          <Image source={logoWhite} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>Baseline Census for the Establishment of <Text style={{ color: '#008605', fontWeight: 700}}>Registry of Barangay Inhabitants and Migrants</Text></Text>
        <CustomButton text={"SURVEY FORM"} bColor={'#008605'} bgColor={'transparent'} fgColor={'#008605'} onPress={() => navigation.navigate('SurveyForm')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#008605',
    height: '100%'
  },
  text: {
    paddingBottom: 70,
    fontSize: 30,
    color: '#a5a5a5'
  },
  topContainer: {
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    position: 'absolute',
    backgroundColor: '#fff',
    bottom: 0,
    width: '100%'
  },
  imageContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '75%'
  }
})

export default HomeScreen