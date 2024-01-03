import { View, StyleSheet } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import apiClient from '../api/client'

import Permission from '../components/form/Permission'
import Identification from '../components/form/Identification'
import HousholdMembers from '../components/form/HousholdMembers'
import QuestionsPart1 from '../components/form/QuestionsPart1'
import QuestionsPart2 from '../components/form/QuestionsPart2'
import QuestionsPart3 from '../components/form/QuestionsPart3'
import QuestionsPart4 from '../components/form/QuestionsPart4'
import QuestionsPart5 from '../components/form/QuestionsPart5'
import QuestionsPart6 from '../components/form/QuestionsPart6'
import QuestionsPart7 from '../components/form/QuestionsPart7'
import QuestionsPart8 from '../components/form/QuestionsPart8'
import QuestionsPart9 from '../components/form/QuestionsPart9'
import QuestionsPart10 from '../components/form/QuestionsPart10'
import QuestionsPart11 from '../components/form/QuestionsPart11'
import QuestionsPart12 from '../components/form/QuestionsPart12'
import QuestionsPart13 from '../components/form/QuestionsPart13'
import QuestionsPart14 from '../components/form/QuestionsPart14'
import QuestionsPart15 from '../components/form/QuestionsPart15'
import QuestionsPart16 from '../components/form/QuestionsPart16'
import QuestionsPart17 from '../components/form/QuestionsPart17'
import QuestionsPart18 from '../components/form/QuestionsPart18'
import QuestionsPart19 from '../components/form/QuestionsPart19'
import QuestionsPart20 from '../components/form/QuestionsPart20'
import QuestionsPart21 from '../components/form/QuestionsPart21'
import QuestionsPart22 from '../components/form/QuestionsPart22'
import QuestionsPart23 from '../components/form/QuestionsPart23'
import QuestionsPart24 from '../components/form/QuestionsPart24'
import QuestionsPart25 from '../components/form/QuestionsPart25'
import QuestionsPart26 from '../components/form/QuestionsPart26'
import QuestionsPart27 from '../components/form/QuestionsPart27'
import QuestionsPart28 from '../components/form/QuestionsPart28'
import QuestionsPart29 from '../components/form/QuestionsPart29'
import QuestionsPart30 from '../components/form/QuestionsPart30'
import SurveryFormLastScreen from '../components/form/SurveryFormLastScreen'
import MemberInfo from '../components/MemberInfo'
import { SurveyFormContext } from '../context/SurveryFormContext'

const SurveyFormScreen = ({ navigation, route }) => {
  const [show, setShow] = useState(false)
  const [checked, setChecked] = useState(false)
  const { surveyFormId, setSurveyForm, setHousehold, membersData, getQuestionsAndResponsesOfMember, update, setUpdate } = useContext(SurveyFormContext)
  const { tab } = route?.params

  useEffect(() => {
    if(surveyFormId){
      setChecked(true)
    }
  }, [])

  useEffect(() => {
    const fetchSurveyFormById = async () => {
      const { data } = await apiClient.get(`/survey_form/${surveyFormId}`)
      if(data.success){
        const response = await data.data;
        setSurveyForm({
          survey_form_id: response[0]?.survey_form_id?.toString(),
          first_visit_date: response[0]?.first_visit_date,
          first_visit_time_start: response[0]?.first_visit_time_start,
          first_visit_time_end: response[0]?.first_visit_time_end,
          first_visit_result: response[0]?.first_visit_result?.toString(),
          first_visit_date_next_visit: response[0]?.first_visit_date_next_visit,
          first_visit_interviewer: response[0]?.first_visit_interviewer?.toString(),
          first_visit_supervisor: response[0]?.first_visit_supervisor?.toString(),
          second_visit_date: response[0]?.second_visit_date,
          second_visit_time_start: response[0]?.second_visit_time_start,
          second_visit_time_end: response[0]?.second_visit_time_end,
          second_visit_result: response[0]?.second_visit_result?.toString(),
          second_visit_date_next_visit: response[0]?.second_visit_date_next_visit,
          second_visit_interviewer: response[0]?.second_visit_interviewer?.toString(),
          second_visit_supervisor: response[0]?.second_visit_supervisor?.toString(),
          date_encoded: response[0]?.date_encoded,
          encoder_name: response[0]?.encoder_name?.toString(),
          supervisor_name: response[0]?.supervisor_name?.toString(),
        })
        setHousehold({
          household_id: response[0]?.household_id?.toString(),
          household_number: response[0]?.household_number?.toString(),
          living_type: response[0]?.living_type?.toString(),
          respondent_name: response[0]?.respondent_name?.toString(),
          household_head: response[0]?.household_head?.toString(),
          household_member_no: response[0]?.household_member_no?.toString(),
          address: response[0]?.address?.toString(),
          unit_no: response[0]?.unit_no?.toString(),
          house_no: response[0]?.house_no?.toString(),
          street: response[0]?.street?.toString(),
        })
        for(let i = 0; i < membersData.length; i++){
          membersData[i]?.setQuestionAndAnswer(getQuestionsAndResponsesOfMember(response, i + 1))
        }
        setUpdate(null)
      }
    }

    if(surveyFormId || update !== null){
      fetchSurveyFormById()
    }
  }, [surveyFormId, update])

  const showSideBar = () => {
    setShow(true)
  }

  return (
    <>
      <MemberInfo show={show} setShow={setShow}/>
      <View style={styles.root}>
        {
          tab === 1 ? 
          <Permission checked={checked} setChecked={setChecked} navigation={navigation}/> :
          tab === 2 ? 
          <Identification navigation={navigation}/> :
          tab === 3 ? 
          <HousholdMembers navigation={navigation} /> :
          tab === 4 ? 
          <QuestionsPart1 showSideBar={showSideBar}  navigation={navigation}/> :
          tab === 5 ? 
          <QuestionsPart2 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 6 ? 
          <QuestionsPart3 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 7 ? 
          <QuestionsPart4 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 8 ? 
          <QuestionsPart5 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 9 ? 
          <QuestionsPart6 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 10 ? 
          <QuestionsPart7 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 11 ? 
          <QuestionsPart8 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 12 ? 
          <QuestionsPart9 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 13 ? 
          <QuestionsPart10 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 14 ? 
          <QuestionsPart11 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 15 ? 
          <QuestionsPart12 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 16 ? 
          <QuestionsPart13 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 17 ? 
          <QuestionsPart14 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 18 ? 
          <QuestionsPart15 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 19 ? 
          <QuestionsPart16 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 20 ? 
          <QuestionsPart17 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 21 ? 
          <QuestionsPart18 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 22 ? 
          <QuestionsPart19 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 23 ? 
          <QuestionsPart20 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 24 ? 
          <QuestionsPart21 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 25 ? 
          <QuestionsPart22 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 26 ? 
          <QuestionsPart23 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 27 ? 
          <QuestionsPart24 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 28 ? 
          <QuestionsPart25 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 29 ? 
          <QuestionsPart26 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 30 ? 
          <QuestionsPart27 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 31 ? 
          <QuestionsPart28 showSideBar={showSideBar} navigation={navigation}/> :
          tab === 32 ? 
          <QuestionsPart29 navigation={navigation}/> :
          tab === 33 ? 
          <QuestionsPart30 navigation={navigation}/> :
          tab === 34 ? 
          <SurveryFormLastScreen navigation={navigation}/> :
          <></>
        }
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: '#fff'
  }
})

export default SurveyFormScreen
