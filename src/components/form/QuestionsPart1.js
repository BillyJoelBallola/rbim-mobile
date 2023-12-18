import { useContext, useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { QuestionsContext } from '../../context/QuestionsContext'
import { SurveyFormContext } from '../../context/SurveryFormContext'

import CustomTitle from '../CustomTitle'
import HeightSpacer from '../spacer/HeightSpacer'
import Divider from '../Divider'
import CustomDropdown from '../CustomDropdown'
import CustomButton from '../CustomButton'
import TextQuestion from '../TextQuestion'

const QuestionsPart1 = ({ setActiveScreen, showSideBar }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)
  const { questions } = useContext(QuestionsContext)

  const questionTwoData = questions['Q2']
  const questionThreeData = questions['Q3']

  return (
    <ScrollView>
      <CustomTitle text={'A. DEMOGRAPHIC CHARACTERISTICS'} size={16}/>
      <CustomTitle text={'FOR ALL HOUSEHOLD MEMEBERS'} fgColor={'#008605'} size={14}/>
      <HeightSpacer size={20}/>
      <View style={styles.column}>
        <Pressable style={{ width: '15%' }} onPress={showSideBar}>
          <Text>No. of HH members</Text>
        </Pressable>
        <View style={{ width: '40%' }}>
          <TextQuestion questionNo={questionTwoData.questionCode} questionText={questionTwoData.questionText}/>
        </View>
        <View style={{ width: '40%' }}>
          <TextQuestion questionNo={questionThreeData.questionCode} questionText={questionThreeData.questionText}/>
        </View>
      </View>

      {
        membersData &&
        membersData.map((member, idx) => (
          <View key={idx}>
            {
              member.questionsAndAnswer.length > 0 &&
              <>
                <HeightSpacer size={10}/>
                <Divider />
                <HeightSpacer size={10}/>
                <View style={styles.column}>
                  <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
                    <Text>#{idx + 1}</Text>
                  </View>
                  <View style={{ width: '40%' }}>
                    <CustomDropdown data={questionTwoData.responses} selected={member.questionsAndAnswer[1]?.response} onSelect={(value) => handleInputChange(1, { question: 'Q2', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}/>
                  </View>
                  <View style={{ width: '40%' }}>
                    <CustomDropdown data={questionThreeData.responses} selected={member.questionsAndAnswer[2]?.response} onSelect={(value) => handleInputChange(2, { question: 'Q3', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}/>
                  </View>
                </View>
              </>
            }
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
    width: '100%',
    gap: 5,
    flexDirection: 'row'
  }
})

export default QuestionsPart1
