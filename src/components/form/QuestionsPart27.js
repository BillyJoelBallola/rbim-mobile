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
import CustomCancelButton from '../CustomCancelButton'

const QuestionsPart27 = ({ showSideBar, navigation }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)
  const { questions } = useContext(QuestionsContext)

  const question42AData = questions['Q42A']
  const question42BData = questions['Q42B']

  return (
    <ScrollView>
      <CustomCancelButton navigation={navigation} />
      <CustomTitle text={'F. COMMUNITY TAX CERTIFICATE'} size={16}/>
      <CustomTitle text={'FOR 18 ABOVE'} fgColor={'#008605'} size={14}/>
      <HeightSpacer size={20}/>
      <View style={styles.column}>
        <Pressable onPress={showSideBar} style={{ width: '15%' }}>
          <Text>No. of HH members</Text>
        </Pressable>
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
                      data={question42AData?.responses || [{responseCode: '1', responseText: 'option1'}]}
                      selected={member.questionsAndAnswer[45] || ''}
                      onSelect={value => 
                        handleInputChange(45, 
                          value, 
                          member.questionsAndAnswer, 
                          member.setQuestionAndAnswer
                        )
                      }
                    />
                  </View>
                  <View style={{ width: '40%' }}>
                    <CustomDropdown 
                      data={question42BData?.responses || [{responseCode: '1', responseText: 'option1'}]}
                      selected={member.questionsAndAnswer[46] || ''}
                      onSelect={value => 
                        handleInputChange(46, 
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
      <CustomButton text={"NEXT"} onPress={() => navigation.navigate('SurveyForm', { tab: 31 })}/>
      <HeightSpacer size={10}/>
      <CustomButton text={"PREVIOUS"} bgColor={"#808080"} onPress={() => navigation.navigate('SurveyForm', { tab: 29 })} />
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
