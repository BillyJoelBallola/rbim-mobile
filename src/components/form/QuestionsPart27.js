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

const QuestionsPart27 = ({ setActiveScreen }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)
  const { questions } = useContext(QuestionsContext)

  const question42AData = questions['Q42A']
  const question42BData = questions['Q42B']

  return (
    <ScrollView>
      <CustomTitle text={'F. COMMUNITY TAX CERTIFICATE'} size={16}/>
      <CustomTitle text={'FOR 18 ABOVE'} fgColor={'#008605'} size={14}/>
      <HeightSpacer size={20}/>
      <View style={styles.column}>
        <View style={{ width: '15%' }}>
          <Text>No. of HH members</Text>
        </View>
        <View style={{ width: '40%' }}>
          <TextQuestion 
            questionNo={'Q42A'}
            questionText={'Does __ have a valid CTC?'}
          />
        </View>
        <View style={{ width: '40%' }}>
          <TextQuestion 
            questionNo={'Q42B'}
            questionText={'Was the CTC issued in this barangay?'}
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
                      selected={member.questionsAndAnswer[45]?.response}
                      onSelect={value => handleInputChange(45, { question: 'Q42A', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}
                      data={question42AData?.responses || [{responseCode: '1', responseText: 'option1'}]}
                    />
                  </View>
                  <View style={{ width: '40%' }}>
                    <CustomDropdown 
                      selected={member.questionsAndAnswer[46]?.response}
                      onSelect={value => handleInputChange(46, { question: 'Q42B', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}
                      data={question42BData?.responses || [{responseCode: '1', responseText: 'option1'}]}
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

export default QuestionsPart27
