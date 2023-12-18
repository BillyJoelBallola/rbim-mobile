import { useContext } from 'react'
import { SurveyFormContext } from '../../context/SurveryFormContext'
import { QuestionsContext } from '../../context/QuestionsContext'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

import CustomTitle from '../CustomTitle'
import HeightSpacer from '../spacer/HeightSpacer'
import Divider from '../Divider'
import CustomDropdown from '../CustomDropdown'
import CustomButton from '../CustomButton'
import TextQuestion from '../TextQuestion'

const QuestionsPart15 = ({ setActiveScreen, showSideBar }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)
  const { questions } = useContext(QuestionsContext)

  const question26Data = questions['Q26']
  const question27Data = questions['Q27']

  return (
    <ScrollView>
      <CustomTitle text={'C. HEALTH INFORMATION'} size={16}/>
      <CustomTitle text={'FOR ALL HOUSEHOLD MEMBERS'} fgColor={'#008605'} size={14}/>
      <HeightSpacer size={20}/>
      <View style={styles.column}>
        <Pressable onPress={showSideBar} style={{ width: '15%' }}>
          <Text>No. of HH members</Text>
        </Pressable>
        <View style={{ width: '40%' }}>
          <TextQuestion
            questionNo={question26Data.questionCode}
            questionText={question26Data.questionText}
          />
        </View>
        <View style={{ width: '40%' }}>
          <TextQuestion
            questionNo={question27Data.questionCode}
            questionText={question27Data.questionText}
          />
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
                    <CustomDropdown
                      selected={member.questionsAndAnswer[25]?.response}
                      onSelect={value => handleInputChange(25, { question: 'Q26', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}
                      data={question26Data.responses}
                    />
                  </View>
                  <View style={{ width: '40%' }}>
                    <CustomDropdown
                      selected={member.questionsAndAnswer[26]?.response}
                      onSelect={value => handleInputChange(26, { question: 'Q27', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}
                      data={question27Data.responses}
                    />
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
    gap: 5,
    width: '100%',
    flexDirection: 'row'
  }
})

export default QuestionsPart15
