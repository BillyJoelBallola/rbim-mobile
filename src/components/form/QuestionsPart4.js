import { useContext, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { QuestionsContext } from '../../context/QuestionsContext'
import { SurveyFormContext } from '../../context/SurveryFormContext'

import CustomTitle from '../CustomTitle'
import HeightSpacer from '../spacer/HeightSpacer'
import Divider from '../Divider'
import CustomInput from '../CustomInput'
import CustomDropdown from '../CustomDropdown'
import CustomButton from '../CustomButton'
import TextQuestion from '../TextQuestion'

const QuestionsPart4 = ({ setActiveScreen }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)
  const { questions } = useContext(QuestionsContext)

  const questionEightData = questions['Q8']

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
          <TextQuestion questionNo={questionEightData.questionCode} questionText={questionEightData.questionText} />
        </View>
        <View style={{ width: '40%' }}>
          <TextQuestion questionNo={'Q9'} questionText={"What is the religio of __?"} />
        </View>
      </View>

      {
        membersData &&
        membersData.map((member, idx) => (
          <View key={idx}>
            <HeightSpacer size={10}/>
            <Divider />
            <HeightSpacer size={10}/>
            <View style={styles.column}>
              <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                <Text>#{idx + 1}</Text>
              </View>
              <View style={{ width: '40%' }}>
                <CustomDropdown data={questionEightData.responses} selected={member.questionsAndAnswer[7]?.response} onSelect={(value) => handleInputChange(7, { question: 'Q8', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}/>
              </View>
              <View style={{ width: '40%' }}>
                <CustomInput value={member.questionsAndAnswer[8]?.response} setValue={(value) => handleInputChange(8, { question: 'Q9', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)} placeholder={"Type here"}/>
              </View>
            </View>
          </View>
        ))
      }


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

export default QuestionsPart4
