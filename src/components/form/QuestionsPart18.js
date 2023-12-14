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

const QuestionsPart18 = ({ setActiveScreen }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)
  const { questions } = useContext(QuestionsContext)

  const question31Data = questions['Q31']

  return (
    <ScrollView>
      <CustomTitle text={'D. SOCIO-CIVIC PARTICIPATION'} size={16}/>
      <CustomTitle text={'FOR 60 ABOVE'} fgColor={'#008605'} size={14}/>
      <HeightSpacer size={20}/>
      <View style={styles.column}>
        <View style={{ width: '15%' }}>
          <Text>No. of HH members</Text>
        </View>
        <View style={{ width: '80%' }}>
          <TextQuestion 
            questionNo={question31Data.questionCode}
            questionText={question31Data.questionText}
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
              <View style={{ width: '80%' }}>
                <CustomDropdown
                  selected={member.questionsAndAnswer[30]?.response}
                  onSelect={value => handleInputChange(30, { question: 'Q31', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}
                  data={question31Data.responses}
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

export default QuestionsPart18
