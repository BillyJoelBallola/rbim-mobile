import { useContext } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SurveyFormContext } from '../../context/SurveryFormContext'
import { QuestionsContext } from '../../context/QuestionsContext'

import CustomTitle from '../CustomTitle'
import HeightSpacer from '../spacer/HeightSpacer'
import Divider from '../Divider'
import CustomInput from '../CustomInput'
import CustomDropdown from '../CustomDropdown'
import CustomButton from '../CustomButton'
import TextQuestion from '../TextQuestion'

const QuestionsPart10 = ({ setActiveScreen }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)
  const { questions } = useContext(QuestionsContext)

  const question17Data = questions['Q17']
  const question18Data = questions['Q18']

  return (
    <ScrollView>
      <CustomTitle text={'B. ECONOMIC ACTIVITY'} size={16}/>
      <CustomTitle text={'FOR ALL 15 YEARS OLD AND ABOVE'} fgColor={'#008605'} size={14}/>
      <HeightSpacer size={20}/>
      <View style={styles.column}>
        <View style={{ width: '15%' }}>
          <Text>No. of HH members</Text>
        </View>
        <View style={{ width: '40%' }}>
          <TextQuestion 
            questionNo={question17Data.questionCode}
            questionText={question17Data.questionText}
          />
        </View>
        <View style={{ width: '40%' }}>
          <TextQuestion 
            questionNo={question18Data.questionCode}
            questionText={question18Data.questionText}
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
                      selected={member.questionsAndAnswer[16]?.response}
                      onSelect={value => handleInputChange(16, { question: 'Q17', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}
                      data={question17Data.responses}
                    />
                  </View>
                  <View style={{ width: '40%' }}>
                    <CustomInput 
                      value={member.questionsAndAnswer[17]?.response}
                      setValue={value => handleInputChange(17, { question: 'Q18', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}
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

export default QuestionsPart10
