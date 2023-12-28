import { useContext } from 'react'
import { QuestionsContext } from '../../context/QuestionsContext'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SurveyFormContext } from '../../context/SurveryFormContext'

import CustomTitle from '../CustomTitle'
import HeightSpacer from '../spacer/HeightSpacer'
import Divider from '../Divider'
import CustomDropdown from '../CustomDropdown'
import CustomButton from '../CustomButton'
import TextQuestion from '../TextQuestion'
import CustomCancelButton from '../CustomCancelButton'

const QuestionsPart7 = ({ setActiveScreen, showSideBar, navigation }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)
  const { questions } = useContext(QuestionsContext)

  const question12Data = questions['Q12']
  const question13Data = questions['Q13']

  return (
    <ScrollView>
      <CustomCancelButton navigation={navigation} />
      <CustomTitle text={'A. DEMOGRAPHIC CHARACTERISTICS'} size={16}/>
      <CustomTitle text={'FOR ALL 3-24 YEARS OLD'} fgColor={'#008605'} size={14}/>
      <HeightSpacer size={20}/>
      <View style={styles.column}>
        <Pressable onPress={showSideBar} style={{ width: '15%' }}>
          <Text>No. of HH members</Text>
        </Pressable>
        <View style={{ width: '40%' }}>
          <TextQuestion questionNo={question12Data.questionCode} questionText={question12Data.questionText} />
        </View>
        <View style={{ width: '40%' }}>
          <TextQuestion questionNo={question13Data.questionCode} questionText={question13Data.questionText} />
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
                      data={question12Data.responses} 
                      selected={member.questionsAndAnswer[11] || ''} 
                      onSelect={(value) => 
                        handleInputChange(11, 
                          value, 
                          member.questionsAndAnswer, 
                          member.setQuestionAndAnswer
                        )
                      }
                     />
                  </View>
                  <View style={{ width: '40%' }}>
                    <CustomDropdown 
                      data={question13Data.responses} 
                      selected={member.questionsAndAnswer[12] || ''} 
                      onSelect={(value) => 
                        handleInputChange(12, 
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

export default QuestionsPart7
