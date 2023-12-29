import { useContext } from 'react'
import { SurveyFormContext } from '../../context/SurveryFormContext'
import { QuestionsContext } from '../../context/QuestionsContext'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import TextQuestion from '../TextQuestion'

import CustomTitle from '../CustomTitle'
import HeightSpacer from '../spacer/HeightSpacer'
import Divider from '../Divider'
import CustomDropdown from '../CustomDropdown'
import CustomButton from '../CustomButton'
import CustomCancelButton from '../CustomCancelButton'

const QuestionsPart16 = ({ showSideBar, navigation }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)
  const { questions } = useContext(QuestionsContext)

  const question28Data = questions['Q28']
  const question29Data = questions['Q29']

  return (
    <ScrollView>
      <CustomCancelButton navigation={navigation} />
      <CustomTitle text={'C. HEALTH INFORMATION'} size={16}/>
      <CustomTitle text={'FOR ALL HOUSEHOLD MEMBERS'} fgColor={'#008605'} size={14}/>
      <HeightSpacer size={20}/>
      <View style={styles.column}>
        <Pressable onPress={showSideBar} style={{ width: '15%' }}>
          <Text>No. of HH members</Text>
        </Pressable>
        <View style={{ width: '40%' }}>
          <TextQuestion
            questionNo={question28Data.questionCode}
            questionText={question28Data.questionText}
          />
        </View>
        <View style={{ width: '40%' }}>
          <TextQuestion
            questionNo={question29Data.questionCode}
            questionText={question29Data.questionText}
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
                      data={question28Data.responses}
                      selected={member.questionsAndAnswer[27] || ''}
                      onSelect={value => 
                        handleInputChange(27, 
                          value, 
                          member.questionsAndAnswer, 
                          member.setQuestionAndAnswer
                        )
                      }
                    />
                  </View>
                  <View style={{ width: '40%' }}>
                    <CustomDropdown 
                      data={question29Data.responses}
                      selected={member.questionsAndAnswer[28] || ''}
                      onSelect={value => 
                        handleInputChange(28, 
                          value, 
                          member.questionsAndAnswer, 
                          member.setQuestionAndAnswer
                        )
                      }
                    />
                  </View>
                </View>
              </>
            }
          </View>
        ))
      }


      <HeightSpacer size={20}/>
      <CustomButton text={"NEXT"} onPress={() => navigation.navigate('SurveyForm', { tab: 20 })}/>
      <HeightSpacer size={10}/>
      <CustomButton text={"PREVIOUS"} bgColor={"#808080"} onPress={() => navigation.navigate('SurveyForm', { tab: 18 })} />
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
