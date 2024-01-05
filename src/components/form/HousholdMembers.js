import React, { useContext } from 'react'
import { Alert, ScrollView, View } from 'react-native'
import { SurveyFormContext } from '../../context/SurveryFormContext'

import CustomTitle from '../CustomTitle'
import CustomInput from '../CustomInput'
import HeightSpacer from '../spacer/HeightSpacer'
import CustomButton from '../CustomButton'
import TextQuestion from '../TextQuestion'
import CustomCancelButton from '../CustomCancelButton';

const HousholdMembers = ({ navigation }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)

  const disbableField = (idx) => {
    let isDisable;

    if(membersData[idx].questionsAndAnswer.length <= 0){
      isDisable = false  
    }else{
     isDisable = true 
    }

    return isDisable
  }

  return (
    <ScrollView>
      <CustomCancelButton navigation={navigation} />
      
      <CustomTitle text={'A. DEMOGRAPHIC CHARACTERISTICS'} size={16}/>
      <CustomTitle text={'FOR ALL HOUSEHOLD MEMEBERS'} fgColor={'#008605'} size={14}/>
      <HeightSpacer size={20}/>
      <TextQuestion questionNo={'Q1'} questionText={'Who are the members of this household starting from the HH Head?'}/>
      
      {
        membersData &&
        membersData.map((member, idx) => (
          <View key={idx}>
            <HeightSpacer size={10}/>
            <CustomInput 
              disabled={idx !== 0 ? disbableField(idx - 1) : true}
              label={`#${idx + 1} Member`} 
              placeholder={'Surname, First Name, Middle Name/Initial'} 
              value={member.questionsAndAnswer[0] || ''} 
              setValue={(value) => 
                handleInputChange(
                  0, 
                  value, 
                  member.questionsAndAnswer, 
                  member.setQuestionAndAnswer
                )
              }
            />
          </View>
        ))
      }
      
      <HeightSpacer size={20}/>
      <CustomButton text={"NEXT"} onPress={() => navigation.navigate('SurveyForm', { tab: 4 })}/>
      <HeightSpacer size={10}/>
      <CustomButton text={"PREVIOUS"} bgColor={"#808080"} onPress={() => navigation.navigate('SurveyForm', { tab: 2 })} />
    </ScrollView>
  )
}

export default HousholdMembers
