import { View, Text, StyleSheet, Pressable } from 'react-native'
import CustomButton from '../components/CustomButton'
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {

  const logout = () => {
    console.log("logout");
  }

  return (
    <View style={styles.root}>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Pressable onPress={logout}>
          <Ionicons name='log-out-outline' size={28} color={'#008605'} />
        </Pressable>
      </View>
      <View>
        <Text style={styles.text}>Baseline Census for the Establishment of <Text style={{ color: '#008605', fontWeight: 600}}>Registry of Barangay Inhabitants and Migrants</Text></Text>
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
    fontSize: 26,
    color: '#818181'
  }
})

export default HomeScreen