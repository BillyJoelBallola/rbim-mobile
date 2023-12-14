import { useContext, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SurveyFormContext } from '../../context/SurveryFormContext'

import CustomTitle from '../CustomTitle'
import HeightSpacer from '../spacer/HeightSpacer'
import Divider from '../Divider'
import CustomInput from '../CustomInput'
import CustomButton from '../CustomButton'
import CustomDatePicker from '../CustomDatePicker'
import TextQuestion from '../TextQuestion'

const QuestionsPart2 = ({ setActiveScreen }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)

  return (
    <ScrollView>
      <CustomTitle text={'A. DEMOGRAPHIC CHARACTERISTICS'} size={16}/>
      <CustomTitle text={'FOR ALL HOUSEHOLD MEMEBERS'} fgColor={'#008605'} size={14}/>
      <HeightSpacer size={20}/>
      <View style={styles.column}>
        <View style={{ width: '15%' }}>
          <Text>No. of HH members</Text>
        </View>
        <View style={{ width: '40%' }}>
          <TextQuestion questionNo={'Q4'} questionText={'How old is __ as of his/her last birthday?'}/>
        </View>
        <View style={{ width: '40%' }}>
          <TextQuestion questionNo={'Q5:'} questionText={'When was born?'}/>
        </View>
      </View>

      {
        membersData && 
        membersData.map((member, index) => (
        <View key={index}>
          <HeightSpacer size={10}/>
          <Divider />
          <HeightSpacer size={10}/>
          <View style={styles.column}>
            <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
              <Text>{`#${index + 1}`}</Text>
            </View>
            <View style={{ width: '40%' }}>
              <CustomInput
                placeholder={"Type here"}
                value={member.questionsAndAnswer[3]?.response}
                setValue={(value) => handleInputChange(3, { question: `Q4`, response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}
              />
            </View>
            <View style={{ width: '40%' }}>
              <CustomDatePicker
                selectedDate={member.questionsAndAnswer[4]?.response}
                onDateChange={(value) => handleInputChange(4, { question: `Q5`, response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}
              />
            </View>
          </View>
        </View>
      ))}
  
      <HeightSpacer size={20}/>
      <CustomButton text={"NEXT"} onPress={() => setActiveScreen(current => current + 1)}/>
      <HeightSpacer size={10}/>
      <CustomButton text={"PREVIOUS"} bgColor={"#808080"} onPress={() => setActiveScreen(current => current - 1)} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  column: {
    flex: 3,
    gap: 5,
    width: '100%',
    flexDirection: 'row'
  }
})

export default QuestionsPart2
