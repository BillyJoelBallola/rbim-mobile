import { useContext } from 'react'
import { SurveyFormContext } from '../../context/SurveryFormContext'
import { QuestionsContext } from '../../context/QuestionsContext'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import CustomTitle from '../CustomTitle'
import HeightSpacer from '../spacer/HeightSpacer'
import Divider from '../Divider'
import CustomDropdown from '../CustomDropdown'
import CustomButton from '../CustomButton'
import TextQuestion from '../TextQuestion'

const QuestionsPart23 = ({ setActiveScreen }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)
  const { questions } = useContext(QuestionsContext)

  const question38BData = questions['Q38B']
  const question38CData = questions['Q38C']

  return (
    <ScrollView>
      <CustomTitle text={'E. MIGRATION INFORMATION'} size={16}/>
      <CustomTitle text={'FOR MIGRANTS AND TRANSIENTS'} fgColor={'#008605'} size={14}/>
      <HeightSpacer size={20}/>
      <View style={styles.column}>
        <View style={{ width: '15%' }}>
          <Text>No. of HH members</Text>
        </View>
        <View style={{ width: '40%' }}>
          <TextQuestion 
            questionNo={question38BData.questionCode}
            questionText={question38BData.questionText}
          />
        </View>
        <View style={{ width: '40%' }}>
          <TextQuestion
            questionNo={question38CData.questionCode}
            questionText={question38CData.questionText}
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
                      selected={member.questionsAndAnswer[38]?.response}
                      onSelect={value => handleInputChange(38, { question: 'Q38B', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}
                      data={question38BData.responses}
                    />
                  </View>
                  <View style={{ width: '40%' }}>
                    <CustomDropdown 
                      selected={member.questionsAndAnswer[39]?.response}
                      onSelect={value => handleInputChange(39, { question: 'Q38C', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}
                      data={question38CData.responses}
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

export default QuestionsPart23