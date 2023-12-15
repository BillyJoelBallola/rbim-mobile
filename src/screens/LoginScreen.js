import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, useWindowDimensions} from 'react-native';
import Logo from '../../assets/images/RBIM-logo-black.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import HeightSpacer from '../components/spacer/HeightSpacer';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    navigation.navigate('Home')
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
          placeholder={'Password'}
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