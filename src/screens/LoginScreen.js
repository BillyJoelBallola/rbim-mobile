import { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Alert} from 'react-native';
import { UserContext } from '../context/UserContext';
import apiClient from '../api/client'

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import HeightSpacer from '../components/spacer/HeightSpacer';

import Logo from '../../assets/images/RBIM-logo-black.png';

const LoginScreen = ({ navigation }) => {
  const { setToken, setUpdate, user } = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if(user !== null){
      navigation.navigate('Home')
    }
  }, [])

  const showAlert = (title, content) => {
    Alert.alert(
      title, 
      content, 
      [{text: 'OK'}],
      {cancelable: true}
    );
  }

  const login = async () => {
    try {
      if(username === '' && password === '') {
        return showAlert('Failed', 'Fill up all fields')
      }

      const { data } = await apiClient.post('/mobile/login', { username: username, password: password })
      if(data.success){
        setToken('rbim_token', data.token)
        setUpdate('login')
        setUsername('')
        setPassword('')
        navigation.navigate('Home')
      }else{
        return showAlert('Failed', data.message)
      }
    } catch (error) {
      return showAlert('Failed', 'An unexpected error occurred. Please try again later')
    }
  }

  return (
    <View style={styles.root}>
      <Image 
        source={Logo} 
        style={styles.logo} 
        resizeMethod='resize'
      />

      <View style={styles.inputContainer}>
        <CustomInput 
          label={'Username'}
          placeholder={"e.g juan_delacruz"}
          value={username} 
          setValue={setUsername}
        />

        <HeightSpacer size={10} />

        <CustomInput 
          label={'Password'} 
          value={password} 
          placeholder={'*********'}
          setValue={setPassword} 
          secureTextEntry={true}
        />
      </View>

      <HeightSpacer size={20} />
    
      <CustomButton text={'LOGIN'} onPress={login} />
      <Text style={{ color: '#808080', marginTop: 15 }}>Can't login? Contact your supervisor</Text>
    </View> 
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingHorizontal: 40,
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%'
  },
  logo: {
    width: '100%',
    maxWidth: 300,
    maxHeight: 100,
    marginBottom: 40
  }
})

export default LoginScreen