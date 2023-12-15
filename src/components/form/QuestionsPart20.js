import { useContext } from 'react'
import { SurveyFormContext } from '../../context/SurveryFormContext'
import { QuestionsContext } from '../../context/QuestionsContext'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import CustomTitle from '../CustomTitle'
import HeightSpacer from '../spacer/HeightSpacer'
import Divider from '../Divider'
import CustomInput from '../CustomInput'
import CustomButton from '../CustomButton'
import TextQuestion from '../TextQuestion'

const QuestionsPart20 = ({ setActiveScreen }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)
  const { questions } = useContext(QuestionsContext)

  const question33Data = questions['Q33']
  const question34Data = questions['Q34']

  return (
    <ScrollView>
      <CustomTitle text={'E. MIGRATION INFORMATION'} size={16}/>
      <CustomTitle text={'FOR ALL HOUSEHOLD MEMBERS'} fgColor={'#008605'} size={14}/>
      <HeightSpacer size={20}/>
      <View style={styles.column}>
        <View style={{ width: '15%' }}>
          <Text>No. of HH members</Text>
        </View>
        <View style={{ width: '40%' }}>
          <TextQuestion 
            questionNo={question33Data.questionCode}
            questionText={question33Data.questionText}
          />
        </View>
        <View style={{ width: '40%' }}>
          <TextQuestion
            questionNo={question34Data.questionCode}
            questionText={question34Data.questionText}
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
                    <CustomInput 
                      value={member.questionsAndAnswer[32]?.response}
                      setValue={value => handleInputChange(32, { question: 'Q33', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}
                      placeholder={'Type here'}
                    />
                  </View>
                  <View style={{ width: '40%' }}>
                    <CustomInput 
                      value={member.questionsAndAnswer[33]?.response}
                      setValue={value => handleInputChange(33, { question: 'Q34', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}
                      placeholder={'Type here'}
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

export default QuestionsPart20
