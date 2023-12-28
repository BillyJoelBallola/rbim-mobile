import { useContext } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SurveyFormContext } from '../../context/SurveryFormContext'

import CustomTitle from '../CustomTitle'
import HeightSpacer from '../spacer/HeightSpacer'
import Divider from '../Divider'
import CustomInput from '../CustomInput'
import CustomButton from '../CustomButton'
import CustomDatePicker from '../CustomDatePicker'
import TextQuestion from '../TextQuestion'
import CustomCancelButton from '../CustomCancelButton'

const QuestionsPart2 = ({ setActiveScreen, showSideBar, navigation }) => {
  const { membersData, handleInputChange } = useContext(SurveyFormContext)

  return (
    <ScrollView>
      <CustomCancelButton navigation={navigation} />

      <CustomTitle text={'A. DEMOGRAPHIC CHARACTERISTICS'} size={16}/>
      <CustomTitle text={'FOR ALL HOUSEHOLD MEMEBERS'} fgColor={'#008605'} size={14}/>
      <HeightSpacer size={20}/>
      <View style={styles.column}>
        <Pressable onPress={showSideBar} style={{ width: '15%' }}>
          <Text>No. of HH members</Text>
        </Pressable>
        <View style={{ width: '40%' }}>
          <TextQuestion questionNo={'Q4'} questionText={'How old is __ as of his/her last birthday?'}/>
        </View>
        <View style={{ width: '40%' }}>
          <TextQuestion questionNo={'Q5'} questionText={'When was born?'}/>
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
                  <Text>{`#${idx + 1}`}</Text>
                </View>
                <View style={{ width: '40%' }}>
                  <CustomInput
                    placeholder={"Type here"}
                    value={member.questionsAndAnswer[3] || ''}
                    setValue={(value) => 
                      handleInputChange(3, 
                        value, 
                        member.questionsAndAnswer, 
                        member.setQuestionAndAnswer
                      )
                    }
                  />
                </View>
                <View style={{ width: '40%' }}>
                  <CustomDatePicker
                    selectedDate={member.questionsAndAnswer[4] || ''}
                    onDateChange={(value) => 
                      handleInputChange(4, 
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
      ))}
  
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

export default QuestionsPart2
