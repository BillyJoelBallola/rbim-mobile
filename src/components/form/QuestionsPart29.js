import { useContext } from 'react'
import { SurveyFormContext } from '../../context/SurveryFormContext'
import { QuestionsContext } from '../../context/QuestionsContext'
import { ScrollView, StyleSheet, View } from 'react-native'

import CustomTitle from '../CustomTitle'
import HeightSpacer from '../spacer/HeightSpacer'
import CustomDropdown from '../CustomDropdown'
import CustomButton from '../CustomButton'
import TextQuestion from '../TextQuestion'
import CustomInput from '../CustomInput'

const QuestionsPart29 = ({ setActiveScreen }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)
  const { questions } = useContext(QuestionsContext)

  const question45Data = questions['Q45']
  const question46Data = questions['Q46']
  const question47Data = questions['Q47']
  const question48Data = questions['Q48']
  const question49Data = questions['Q49']
  const question50AData = questions['Q50A']
  const question50BData = questions['Q50B']
  const question51Data = questions['Q51']
  const question52Data = questions['Q52']
  const question53Data = questions['Q53']

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
             onSelect={value => handleInputChange(49, { memberNo: 1, question: 'Q45', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
             data={question45Data?.responses}
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
            onSelect={value => handleInputChange(50, { memberNo: 1, question: 'Q46', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
            data={question46Data?.responses}
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
            onSelect={value => handleInputChange(51, { memberNo: 1, question: 'Q47', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
            data={question47Data?.responses}
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
            onSelect={value => handleInputChange(52, { memberNo: 1, question: 'Q48', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
            data={question48Data?.responses}
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
            onSelect={value => handleInputChange(53, { memberNo: 1, question: 'Q49', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
            data={question49Data?.responses}
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
            onSelect={value => handleInputChange(54, { memberNo: 1, question: 'Q50A', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
            data={question50AData?.responses}
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
            onSelect={value => handleInputChange(55, { memberNo: 1, question: 'Q50B', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
            data={question50BData?.responses}
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
            onSelect={value => handleInputChange(56, { memberNo: 1, question: 'Q51', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
            data={question51Data?.responses}
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
            onSelect={value => handleInputChange(57, { memberNo: 1, question: 'Q52', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
            data={question52Data?.responses}
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
            onSelect={value => handleInputChange(58, { memberNo: 1, question: 'Q53', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
            data={question53Data?.responses}
          />
        </View>
      </View>

      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <TextQuestion 
            questionNo={'Q54'}
            questionText={"Do you have any female HH member who died in the past 12 months? How old is she and what is the cause of her death?"}
          />  
          <HeightSpacer size={10}/>
          <CustomInput
            value={membersData[0]?.questionsAndAnswer[59]?.response}
            setValue={value => handleInputChange(59, { memberNo: 1, question: 'Q54', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
            placeholder={'Type here'}
          />
        </View>
      </View>

      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <TextQuestion 
            questionNo={'Q55'}
            questionText={"Do you have any female HH member who died in the past 12 months? How old is she and what is the cause of her death?"}
          />  
          <HeightSpacer size={10}/>
          <CustomInput
            value={membersData[0]?.questionsAndAnswer[60]?.response}
            setValue={value => handleInputChange(60, { memberNo: 1, question: 'Q55', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
            placeholder={'Type here'}
          />
        </View>
      </View>

      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <TextQuestion 
            questionNo={'Q56'}
            questionText={"What are the common diseases that causes death in this barangay?"}
          />  
          <HeightSpacer size={10}/>
          <CustomInput
            value={membersData[0]?.questionsAndAnswer[61]?.response}
            setValue={value => handleInputChange(61, { memberNo: 1, question: 'Q56', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
            placeholder={'Type here'}
          />
        </View>
      </View>

      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <TextQuestion 
            questionNo={'Q57'}
            questionText={"What do you think are the primary needs of this barangay?"}
          />  
          <HeightSpacer size={10}/>
          <CustomInput
            value={membersData[0]?.questionsAndAnswer[62]?.response}
            setValue={value => handleInputChange(62, { memberNo: 1, question: 'Q57', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
            placeholder={'Type here'}
          />
        </View>
      </View>

      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <TextQuestion 
            questionNo={'Q58'}
            questionText={"Where does your household intend to stay five years from now?"}
          />  
          <HeightSpacer size={10}/>
          <CustomInput
            value={membersData[0]?.questionsAndAnswer[63]?.response}
            setValue={value => handleInputChange(63, { memberNo: 1, question: 'Q58', response: value }, membersData[0]?.questionsAndAnswer, membersData[0]?.setQuestionAndAnswer)}
            placeholder={'Type here'}
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

export default QuestionsPart29