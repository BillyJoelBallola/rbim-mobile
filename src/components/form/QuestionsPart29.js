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

const QuestionsPart28 = ({ setActiveScreen }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)
  // const { questions } = useContext(QuestionsContext)

  return (
    <ScrollView>
      <CustomTitle text={'H. QUESTIONS FOR THE HOUSEHOLD'} size={16}/>
      <HeightSpacer size={20}/>

      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <TextQuestion 
            questionNo={'Q45'}
            questionText={'Do you own or amortize this housing unit occupied by your household or do you rent it, do you occupy it rent-free with consent of owner or rent-free without consent of owner?'}
          />  
          <HeightSpacer size={10}/>
          <CustomDropdown
             selected={membersData[0]?.questionsAndAnswer[49]?.response}
             onSelect={value => handleInputChange(49, { question: 'Q45', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
             data={[{ responseCode: '1', responseText: 'option1' }]}
          />
        </View>
      </View>

      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <TextQuestion 
            questionNo={'Q46'}
            questionText={'Do you own or amortize this lot occupied by your house hold or do you rent it, do you occupy it rent-free with consent of owner or rent-free without consent of owner?'}
          />  
          <HeightSpacer size={10}/>
          <CustomDropdown
             selected={membersData[0]?.questionsAndAnswer[50]?.response}
             onSelect={value => handleInputChange(50, { question: 'Q46', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
             data={[{ responseCode: '1', responseText: 'option1' }]}
          />
        </View>
      </View>

      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <TextQuestion 
            questionNo={'Q47'}
            questionText={'What type of fuel does this household use for lighting?'}
          />  
          <HeightSpacer size={10}/>
          <CustomDropdown
             selected={membersData[0]?.questionsAndAnswer[51]?.response}
             onSelect={value => handleInputChange(51, { question: 'Q47', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
             data={[{ responseCode: '1', responseText: 'option1' }]}
          />
        </View>
      </View>

      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <TextQuestion 
            questionNo={'Q48'}
            questionText={'What kind of fuel does this household use most of the time for cooking?'}
          />  
          <HeightSpacer size={10}/>
          <CustomDropdown
             selected={membersData[0]?.questionsAndAnswer[52]?.response}
             onSelect={value => handleInputChange(52, { question: 'Q48', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
             data={[{ responseCode: '1', responseText: 'option1' }]}
          />
        </View>
      </View>

      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <TextQuestion 
            questionNo={'Q49'}
            questionText={"What is the household’s main source of drinking water?"}
          />  
          <HeightSpacer size={10}/>
          <CustomDropdown
             selected={membersData[0]?.questionsAndAnswer[53]?.response}
             onSelect={value => handleInputChange(53, { question: 'Q49', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
             data={[{ responseCode: '1', responseText: 'option1' }]}
          />
        </View>
      </View>

      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <TextQuestion 
            questionNo={'Q50A'}
            questionText={"How does your household usually dispose of your kitchen garbage such as leftover food, peeling of fruits and vegetables, fish and chicken entrails, and others?"}
          />  
          <HeightSpacer size={10}/>
          <CustomDropdown
             selected={membersData[0]?.questionsAndAnswer[54]?.response}
             onSelect={value => handleInputChange(54, { question: 'Q50A', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
             data={[{ responseCode: '1', responseText: 'option1' }]}
          />
        </View>
      </View>

      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <TextQuestion 
            questionNo={'Q50B'}
            questionText={"Do you segregate your garbage?"}
          />  
          <HeightSpacer size={10}/>
          <CustomDropdown
             selected={membersData[0]?.questionsAndAnswer[55]?.response}
             onSelect={value => handleInputChange(55, { question: 'Q50B', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
             data={[{ responseCode: '1', responseText: 'option1' }]}
          />
        </View>
      </View>

      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <TextQuestion 
            questionNo={'Q51'}
            questionText={"What type of toilet facility does this household use?"}
          />  
          <HeightSpacer size={10}/>
          <CustomDropdown
             selected={membersData[0]?.questionsAndAnswer[56]?.response}
             onSelect={value => handleInputChange(56, { question: 'Q51', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
             data={[{ responseCode: '1', responseText: 'option1' }]}
          />
        </View>
      </View>

      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <TextQuestion 
            questionNo={'Q52'}
            questionText={"<Do not ask, observation only> Type of building/house"}
          />  
          <HeightSpacer size={10}/>
          <CustomDropdown
             selected={membersData[0]?.questionsAndAnswer[57]?.response}
             onSelect={value => handleInputChange(57, { question: 'Q52', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
             data={[{ responseCode: '1', responseText: 'option1' }]}
          />
        </View>
      </View>

      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <TextQuestion 
            questionNo={'Q53'}
            questionText={"<Do not ask, observation only> Construction materials of the outer wall"}
          />  
          <HeightSpacer size={10}/>
          <CustomDropdown
             selected={membersData[0]?.questionsAndAnswer[58]?.response}
             onSelect={value => handleInputChange(58, { question: 'Q53', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
             data={[{ responseCode: '1', responseText: 'option1' }]}
          />
        </View>
      </View>

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