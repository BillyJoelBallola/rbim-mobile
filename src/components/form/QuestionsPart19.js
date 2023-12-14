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

const QuestionsPart19 = ({ setActiveScreen }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)
  const { questions } = useContext(QuestionsContext)

  const question32Data = questions['Q32']

  return (
    <ScrollView>
      <CustomTitle text={'D. SOCIO-CIVIC PARTICIPATION'} size={16}/>
      <CustomTitle text={'FOR 15 ABOVE'} fgColor={'#008605'} size={14}/>
      <HeightSpacer size={20}/>
      <View style={styles.column}>
        <View style={{ width: '15%' }}>
          <Text>No. of HH members</Text>
        </View>
        <View style={{ width: '80%' }}>
          <TextQuestion 
            questionNo={question32Data.questionCode}
            questionText={question32Data.questionText}
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
                <CustomInput 
                  value={member.questionsAndAnswer[31]?.response}
                  setValue={value => handleInputChange(31, { question: 'Q32', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}
                  placeholder={'Type here'}
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

export default QuestionsPart19
