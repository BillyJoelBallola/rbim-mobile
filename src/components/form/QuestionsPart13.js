import { useContext } from 'react'
import { SurveyFormContext } from '../../context/SurveryFormContext'
import { QuestionsContext } from '../../context/QuestionsContext'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import CustomTitle from '../CustomTitle'
import HeightSpacer from '../spacer/HeightSpacer'
import Divider from '../Divider'
import CustomInput from '../CustomInput'
import CustomDropdown from '../CustomDropdown'
import CustomButton from '../CustomButton'
import TextQuestion from '../TextQuestion'

const QuestionsPart13 = ({ setActiveScreen }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)
  const { questions } = useContext(QuestionsContext)

  const question22Data = questions['Q22']
  const question23Data = questions['Q23']

  return (
    <ScrollView>
      <CustomTitle text={'C. HEALTH INFORMATION'} size={16}/>
      <CustomTitle text={'FOR WOMEN 10-54 YEARS OLD'} fgColor={'#008605'} size={14}/>
      <HeightSpacer size={20}/>
      <View style={styles.column}>
        <View style={{ width: '15%' }}>
          <Text>No. of HH members</Text>
        </View>
        <View style={{ width: '40%' }}>
          <TextQuestion
            questionNo={question22Data.questionCode}
            questionText={question22Data.questionText}
          />
        </View>
        <View style={{ width: '40%' }}>
          <TextQuestion
            questionNo={question23Data.questionCode}
            questionText={question23Data.questionText}
          />
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
                <CustomInput
                  value={member.questionsAndAnswer[21]?.response}
                  setValue={value => handleInputChange(21, { question: 'Q22', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}
                  placeholder={'Type here'}
                />
              </View>
              <View style={{ width: '40%' }}>
                <CustomDropdown
                  selected={member.questionsAndAnswer[22]?.response}
                  onSelect={value => handleInputChange(22, { question: 'Q23', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}
                  data={question23Data.responses}
                />
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

export default QuestionsPart13
