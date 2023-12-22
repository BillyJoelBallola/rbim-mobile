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

const QuestionsPart28 = ({ setActiveScreen, showSideBar }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)
  const { questions } = useContext(QuestionsContext)

  const question43Data = questions['Q43']
  const question44Data = questions['Q44']

  return (
    <ScrollView>
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
                      value={member.questionsAndAnswer[47]?.response}
                      setValue={value => handleInputChange(47, { memberNo: idx + 1, question: 'Q43', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}
                      placeholder={'Type here'}
                    />
                  </View>
                  <View style={{ width: '40%' }}>
                    <CustomDropdown 
                      selected={member.questionsAndAnswer[48]?.response}
                      onSelect={value => handleInputChange(48, { memberNo: idx + 1, question: 'Q44', response: value }, member.questionsAndAnswer, member.setQuestionAndAnswer)}
                      data={question44Data?.responses}
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

export default QuestionsPart28
