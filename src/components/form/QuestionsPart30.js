import { useContext } from 'react'
import { SurveyFormContext } from '../../context/SurveryFormContext'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import CustomTitle from '../CustomTitle'
import HeightSpacer from '../spacer/HeightSpacer'
import CustomDropdown from '../CustomDropdown'
import CustomButton from '../CustomButton'
import TextQuestion from '../TextQuestion'
import CustomInput from '../CustomInput'
import CustomDatePicker from '../CustomDatePicker'
import Divider from '../Divider'
import CustomCancelButton from '../CustomCancelButton'
import { UserContext } from '../../context/UserContext'

const QuestionsPart30 = ({ navigation }) => {
  const { surveyForm, setSurveyForm, surveyFormId } = useContext(SurveyFormContext)
  const { user } = useContext(UserContext)

  return (
    <ScrollView>
      <CustomCancelButton navigation={navigation} />
      <CustomTitle text={'B. INTERVIEW INFORMATION'} size={16}/>
      <HeightSpacer size={20}/>

      <View style={styles.column}>
        <View style={{ width: '49%' }}>
          <TextQuestion 
            questionNo={'Visit'}
            questionText={'1st Visit'}
          />
        </View>
        <View style={{ width: '49%' }}>
          <TextQuestion 
            questionNo={'Visit'}
            questionText={'2nd Visit'}
          />
        </View>
      </View>

      <HeightSpacer size={10}/>
      <Divider />
      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <Text style={{ fontWeight: '600' }}>Date of Visit</Text>
        </View>
      </View>

      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '49%' }}>
          <CustomDatePicker 
            disabled={true}
            selectedDate={surveyForm?.first_visit_date ? new Date(surveyForm?.first_visit_date ) : null}
            onDateChange={value => setSurveyForm(current => ({...current, first_visit_date: value}))}
          />
        </View>
        <View style={{ width: '49%' }}>
          <CustomDatePicker 
            disabled={true}
            selectedDate={surveyForm?.second_visit_date && surveyForm?.second_visit_date !== '0000-00-00' ? new Date(surveyForm?.second_visit_date ) : null}
            onDateChange={value => setSurveyForm(current => ({...current, second_visit_date: value}))}
          />
        </View>
      </View>

      <HeightSpacer size={10}/>
      <Divider />
      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <Text style={{ fontWeight: '600' }}>Time Start</Text>
        </View>
      </View>

      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '49%' }}>
          <CustomDatePicker 
            disabled={true}
            selectedDate={surveyForm?.first_visit_time_start ? new Date(surveyForm?.first_visit_time_start) : null}
            onDateChange={value => setSurveyForm(current => ({...current, first_visit_time_start: value}))}
            mode={'time'}
          />
        </View>
        <View style={{ width: '49%' }}>
          <CustomDatePicker 
            mode={'time'}
            disabled={true}
            selectedDate={surveyForm?.second_visit_time_start && surveyForm?.second_visit_time_start !== '00:00:00' ? new Date(surveyForm?.second_visit_time_start) : null}
            onDateChange={value => setSurveyForm(current => ({...current, second_visit_time_start: value}))}
          />
        </View>
      </View>

      <HeightSpacer size={10}/>
      <Divider />
      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <Text style={{ fontWeight: '600' }}>Time End</Text>
        </View>
      </View>

      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '49%' }}>
          <CustomDatePicker 
            disabled={true}
            selectedDate={surveyForm?.first_visit_time_end ? new Date(surveyForm?.first_visit_time_end) : null}
            onDateChange={value => setSurveyForm(current => ({...current, first_visit_time_end: value}))}
            mode={'time'}
          />
        </View>
        <View style={{ width: '49%' }}>
          <CustomDatePicker 
            mode={'time'}
            disabled={true}
            selectedDate={surveyForm?.second_visit_time_end && surveyForm?.second_visit_time_end !== '00:00:00' ? new Date(surveyForm?.second_visit_time_end) : null}
            onDateChange={value => setSurveyForm(current => ({...current, second_visit_time_end: value}))}
          />
        </View>
      </View>

      <HeightSpacer size={10}/>
      <Divider />
      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <Text style={{ fontWeight: '600' }}>Result*</Text>
        </View>
      </View>

      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '49%' }}>
          <CustomDropdown
            disabled={surveyFormId ? true : false} 
            selected={surveyForm?.first_visit_result}
            onSelect={value => setSurveyForm(current => ({...current, first_visit_result: value}))}
            data={[{ responseCode: 'C', responseText: 'Completed' }, { responseCode: 'CB', responseText: 'Callback' }, { responseCode: 'R', responseText: 'Refused' }]}
          />
        </View>
        <View style={{ width: '49%' }}>
          <CustomDropdown 
            disabled={!surveyFormId ? true : false}
            selected={surveyForm?.second_visit_result}
            onSelect={value => setSurveyForm(current => ({...current, second_visit_result: value}))}
            data={[{ responseCode: 'C', responseText: 'Completed' }, { responseCode: 'CB', responseText: 'Callback' }, { responseCode: 'R', responseText: 'Refused' }]}
          />
        </View>
      </View>

      <HeightSpacer size={10}/>
      <Divider />
      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <Text style={{ fontWeight: '600' }}>Date of Next Visit*</Text>
        </View>
      </View>

      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '49%' }}>
          <CustomDatePicker 
            disabled={surveyFormId ? true : false}
            selectedDate={surveyForm?.first_visit_date_next_visit ? new Date(surveyForm?.first_visit_date_next_visit) : null}
            onDateChange={value => setSurveyForm(current => ({...current, first_visit_date_next_visit: value}))}
          />
        </View>
        <View style={{ width: '49%' }}>
          <CustomDatePicker 
            disabled={!surveyFormId ? true : false}
            selectedDate={surveyForm?.second_visit_date_next_visit && surveyForm?.second_visit_date_next_visit !== '0000-00-00' ? new Date(surveyForm?.second_visit_date_next_visit) : null}
            onDateChange={value => setSurveyForm(current => ({...current, second_visit_date_next_visit: value}))}
          />
        </View>
      </View>

      <HeightSpacer size={10}/>
      <Divider />
      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <Text style={{ fontWeight: '600' }}>Name of Interviewer*</Text>
        </View>
      </View>

      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '49%' }}>
          <CustomInput 
            disabled={surveyFormId ? false : true}
            value={surveyForm?.first_visit_interviewer}
            setValue={value => setSurveyForm(current => ({...current, first_visit_interviewer: value}))}
            placeholder={'Type here'}
          />
        </View>
        <View style={{ width: '49%' }}>
          <CustomInput 
            disabled={!surveyFormId ? false : true}
            value={surveyForm?.second_visit_interviewer}
            setValue={value => setSurveyForm(current => ({...current, second_visit_interviewer: value}))}
            placeholder={'Type here'}
          />
        </View>
      </View>

      <HeightSpacer size={10}/>
      <Divider />
      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '100%' }}>
          <Text style={{ fontWeight: '600' }}>Name of Supervisor*</Text>
        </View>
      </View>

      <HeightSpacer size={10}/>
      <View style={styles.column}>
        <View style={{ width: '49%' }}>
          <CustomInput 
            disabled={surveyFormId ? false : true}
            value={surveyForm?.first_visit_supervisor}
            setValue={value => setSurveyForm(current => ({...current, first_visit_supervisor: value}))}
            placeholder={'Type here'}
          />
        </View>
        <View style={{ width: '49%' }}>
          <CustomInput 
            disabled={!surveyFormId ? false : true}
            value={surveyForm?.second_visit_supervisor}
            setValue={value => setSurveyForm(current => ({...current, second_visit_supervisor: value}))}
            placeholder={'Type here'}
          />
        </View>
      </View>

      <HeightSpacer size={20}/>
      <CustomButton text={"NEXT"} onPress={() => navigation.navigate('SurveyForm', { tab: 34 })}/>
      <HeightSpacer size={10}/>
      <CustomButton text={"PREVIOUS"} bgColor={"#808080"} onPress={() => navigation.navigate('SurveyForm', { tab: 32 })} />
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

export default QuestionsPart30