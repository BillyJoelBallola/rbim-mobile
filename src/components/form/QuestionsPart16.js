import { useContext } from 'react'
import { SurveyFormContext } from '../../context/SurveryFormContext'
import { QuestionsContext } from '../../context/QuestionsContext'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import TextQuestion from '../TextQuestion'

import CustomTitle from '../CustomTitle'
import HeightSpacer from '../spacer/HeightSpacer'
import Divider from '../Divider'
import CustomDropdown from '../CustomDropdown'
import CustomButton from '../CustomButton'

const QuestionsPart16 = ({ setActiveScreen }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)
  const { questions } = useContext(QuestionsContext)

  const question28Data = questions['Q28']
  // const question29Data = questions['Q29']

  return (
    <ScrollView>
      <CustomTitle text={'C. HEALTH INFORMATION'} size={16}/>
      <CustomTitle text={'FOR ALL HOUSEHOLD MEMBERS'} fgColor={'#008605'} size={14}/>
      <HeightSpacer size={20}/>
      <View style={styles.column}>
        <View style={{ width: '15%' }}>
          <Text>No. of HH members</Text>
        </View>
        <View style={{ width: '40%' }}>
          <TextQuestion
            questionNo={question28Data.questionCode}
            questionText={question28Data.questionText}
          />
        </View>
        <View style={{ width: '40%' }}>
          <TextQuestion
            questionNo={'Q29'}
            questionText={'Is there a member of the HH that has any disability? What is the disability?'}
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
                <CustomDropdown
                  selected={member.questionsAndAnswer[27]?.response}
                  onSelect={value => handleInputChange(27, { question: 'Q28', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}
                  data={question28Data.responses}
                />
              </View>
              <View style={{ width: '40%' }}>
                <CustomDropdown data={['option1', 'option2']}/>
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

export default QuestionsPart16
