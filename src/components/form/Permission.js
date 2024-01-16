import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native'
import { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import CustomCheckBox from '../CustomCheckBox';
import CustomButton from '../CustomButton';
import HeightSpacer from '../spacer/HeightSpacer';
import { SurveyFormContext } from '../../context/SurveryFormContext';
import moment from 'moment';

const Permission = ({ checked, setChecked, navigation }) => {
  const { surveyForm, setSurveyForm } = useContext(SurveyFormContext)

  // console.log(JSON.stringify(surveyForm, null, 2))

  const alertMessage = () => {
    Alert.alert(
      'Failed', 
      'Unable to continue to survey form, please check the box to continue', 
      [{text: 'OK'}],
      {cancelable: true}
    );
  }

  const handleContinueBtn = () => {
    const date = new Date();

    if(!checked){
      return alertMessage()
    }

    if(surveyForm?.first_visit_date === '' || surveyForm?.first_visit_date === null){
      setSurveyForm(current => ({
        ...current, 
        first_visit_date: date,
        first_visit_time_start: date,
      }))
    }

    navigation.navigate('SurveyForm', { tab: 2 })
  }

  return (
    <>
      <View style={{ marginBottom: 5 }}>  
        <TouchableOpacity style={{ width: '10%', }} onPress={() => navigation?.navigate('Home')}>
          <Ionicons name='close-sharp' size={30} color={'#008605'}/>
        </TouchableOpacity>
      </View>
      <View style={styles.root}>
        <View>
          <Text style={styles.title}>Permission</Text>
          <Text style={styles.content}>
            Magandang umaga/hapon po. Ako po ay si ______. Ako po ay ______ sa ating barangay. Kami po ay nag-i-interview ng lahat ng households sa ating barangay upang kumulekta ng impormasyon tungkol sa socio-economic na kondisyon at tungkol sa migration. Ito po ay makakatulong para magkaroon ng Census ang ating barangay. Nais po sana namin na humingi ng kaunting panahon upang sagutan ang aming mga tanong tungkol sa inyong household at mga miyembro nito. Sinisiguro po namin na lahat ng inyong sagot ay kumpidensyal. Pwede po ba naming hingiin ang inyong pahintulot na kayo ay makapanayam?
          </Text>
        </View>
        <View style={{ marginBottom: 60 }}>
          <CustomCheckBox setChecked={setChecked} checked={checked} label={"Pinahihintulutan ang panayam"}/>
          <CustomButton text={'CONTINUE'} onPress={handleContinueBtn}/>
          <HeightSpacer size={10} />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  root: {
    height: '100%', 
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 25  
  },
  content: {
    fontSize: 18,
    textAlign: 'justify'
  }
})

export default Permission
