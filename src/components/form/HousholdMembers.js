import React, { useContext } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SurveyFormContext } from '../../context/SurveryFormContext'

import CustomTitle from '../CustomTitle'
import CustomInput from '../CustomInput'
import HeightSpacer from '../spacer/HeightSpacer'
import CustomButton from '../CustomButton'
import TextQuestion from '../TextQuestion'

const HousholdMembers = ({ setActiveScreen }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)

  return (
    <ScrollView style={styles.root}>
      <CustomTitle text={'A. DEMOGRAPHIC CHARACTERISTICS'} size={16}/>
      <CustomTitle text={'FOR ALL HOUSEHOLD MEMEBERS'} fgColor={'#008605'} size={14}/>
      <HeightSpacer size={20}/>
      <TextQuestion questionNo={'Q1:'} questionText={'Who are the members of this household starting from the HH Head?'}/>
      
      {
        membersData &&
        membersData.map((member, idx) => (
          <View key={idx}>
            <HeightSpacer size={10}/>
            <CustomInput label={`#${idx + 1} Member`} placeholder={'Surname, First name, Middle name'} value={member.questionsAndAnswer[0]?.response} setValue={(value) => handleInputChange(0, { question: 'Q1', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}/>
          </View>
        ))
      }
      
      <HeightSpacer size={20}/>
      <CustomButton text={'NEXT'} onPress={() => setActiveScreen(current => current + 1)}/>
      <HeightSpacer size={10}/>
      <CustomButton text={'PREVIOUS'} bgColor={'#808080'} onPress={() => setActiveScreen(current => current - 1)}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})

export default HousholdMembers
