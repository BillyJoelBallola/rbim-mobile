import { useContext, useState } from 'react'
import { SurveyFormContext } from '../../context/SurveryFormContext'
import { Image, ScrollView, StyleSheet, Text, View, Alert } from 'react-native'

import HeightSpacer from '../spacer/HeightSpacer'
import CustomButton from '../CustomButton'

import succesImage from '../../../assets/images/success-image.png'
import LoadingButton from '../LoadingButton'

const SurveryFormLastScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const { submitForm, surveyFormId } = useContext(SurveyFormContext)

  const alertMessage = () => {
    Alert.alert(
      'Submit', 
      'Are you sure you want to want to submit the form?', 
      [
        {text: 'No'},
        {
          text: 'Yes',
          onPress: () => submitForm(navigation, setLoading)
        },
      ]
    );
  }

  return (
    <View style={styles.root}>
      <HeightSpacer size={170}/>
      <View style={styles.contentContainer}>
        <Image source={succesImage} style={{ width: 250, height: 270 }}/>
      </View>
      <HeightSpacer size={80}/>
      <Text style={{ fontSize: 14, textAlign: 'justify'}}>Before submitting, please review the survey form carefully. Your diligence in ensuring accuracy is valued. Thank you.</Text>
      <HeightSpacer size={10}/>
      {
        loading ?
        <LoadingButton bgColor={'transparent'} color={'#008605'} borderColor={'#008605'} />
        :
        <CustomButton disable={loading ? true : false} text={surveyFormId ? "SAVE CHANGES" :"SUBMIT"} bgColor={'transparent'} fgColor={'#008605'} bColor={'#008605'} onPress={() => alertMessage()} />
      }
      <HeightSpacer size={10}/>
      <CustomButton text={"GO BACK"} bgColor={'#808080'} onPress={() => navigation.navigate('SurveyForm', { tab: 33 })}/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%'
  },
  column: {   
    flex: 3,
    gap: 5,
    width: '100%',
    flexDirection: 'row'
  },
  contentContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SurveryFormLastScreen