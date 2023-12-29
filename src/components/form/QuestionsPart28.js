import { useContext } from 'react'
import { SurveyFormContext } from '../../context/SurveryFormContext'
import { QuestionsContext } from '../../context/QuestionsContext'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

import CustomTitle from '../CustomTitle'
import HeightSpacer from '../spacer/HeightSpacer'
import Divider from '../Divider'
import CustomInput from '../CustomInput'
import CustomDropdown from '../CustomDropdown'
import CustomButton from '../CustomButton'
import TextQuestion from '../TextQuestion'
import CustomCancelButton from '../CustomCancelButton'

const QuestionsPart28 = ({ showSideBar, navigation }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)
  const { questions } = useContext(QuestionsContext)

  const question43Data = questions['Q43']
  const question44Data = questions['Q44']

  return (
    <ScrollView>
      <CustomCancelButton navigation={navigation} />
      <CustomTitle text={'G. SKILLS DEVELOPMENT'} size={16}/>
      <CustomTitle text={'FOR 15 ABOVE'} fgColor={'#008605'} size={14}/>
      <HeightSpacer size={20}/>
      <View style={styles.column}>
        <Pressable onPress={showSideBar} style={{ width: '15%' }}>
          <Text>No. of HH members</Text>
        </Pressable>
        <View style={{ width: '40%' }}>
          <TextQuestion 
            questionNo={question43Data.questionCode}
            questionText={question43Data.questionText}
          />
        </View>
        <View style={{ width: '40%' }}>
          <TextQuestion 
            questionNo={question44Data.questionCode}
            questionText={question44Data.questionText}
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
                      placeholder={'Type here'}
                      value={member.questionsAndAnswer[47] || ''}
                      setValue={value => 
                        handleInputChange(47, 
                          value, 
                          member.questionsAndAnswer, 
                          member.setQuestionAndAnswer
                        )
                      }
                    />
                  </View>
                  <View style={{ width: '40%' }}>
                    <CustomDropdown 
                      data={question44Data?.responses}
                      selected={member.questionsAndAnswer[48] || ''}
                      onSelect={value => 
                        handleInputChange(48, 
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
      <CustomButton text={"NEXT"} onPress={() => navigation.navigate('SurveyForm', { tab: 32 })}/>
      <HeightSpacer size={10}/>
      <CustomButton text={"PREVIOUS"} bgColor={"#808080"} onPress={() => navigation.navigate('SurveyForm', { tab: 30 })} />
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

export default QuestionsPart28
