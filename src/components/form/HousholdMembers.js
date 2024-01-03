import React, { useContext } from 'react'
import { ScrollView, View } from 'react-native'
import { SurveyFormContext } from '../../context/SurveryFormContext'

import CustomTitle from '../CustomTitle'
import CustomInput from '../CustomInput'
import HeightSpacer from '../spacer/HeightSpacer'
import CustomButton from '../CustomButton'
import TextQuestion from '../TextQuestion'
import CustomCancelButton from '../CustomCancelButton';

const HousholdMembers = ({ navigation }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)

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
