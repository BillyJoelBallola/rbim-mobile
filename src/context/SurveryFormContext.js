import { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { UserContext } from "./UserContext";
import apiClient from '../api/client'

const addMemberNumber = (array, memberNo) => {
  const newArray = [...array]

  if(array.length > 0){
    newArray.unshift(memberNo)
  }

  return newArray
}

export const SurveyFormContext = createContext({})

export const SurveyFormContextProvider = ({ children }) => {
  const { user } = useContext(UserContext)
  const [questionsAndAnswerMember1, setQuestionAndAnswerMember1] = useState([])
  const [questionsAndAnswerMember2, setQuestionAndAnswerMember2] = useState([])
  const [questionsAndAnswerMember3, setQuestionAndAnswerMember3] = useState([])
  const [questionsAndAnswerMember4, setQuestionAndAnswerMember4] = useState([])
  const [questionsAndAnswerMember5, setQuestionAndAnswerMember5] = useState([])
  const [questionsAndAnswerMember6, setQuestionAndAnswerMember6] = useState([])
  const [questionsAndAnswerMember7, setQuestionAndAnswerMember7] = useState([])
  const [questionsAndAnswerMember8, setQuestionAndAnswerMember8] = useState([])
  const [questionsAndAnswerMember9, setQuestionAndAnswerMember9] = useState([])
  const [questionsAndAnswerMember10, setQuestionAndAnswerMember10] = useState([])
  const [surveyForm, setSurveyForm] = useState({
    first_visit_date: '',
    first_visit_time_start: '',
    first_visit_time_end: '',
    first_visit_result: '',
    first_visit_date_next_visit: '',
    first_visit_interviewer: '',
    first_visit_supervisor: '',
    second_visit_date: '',
    second_visit_time_start: '',
    second_visit_time_end: '',
    second_visit_result: '',
    second_visit_date_next_visit: '',
    second_visit_interviewer: '',
    second_visit_supervisor: '',
    date_encoded: '',
    encoder_name: '',
    supervisor_name: '',
  })
  const [household, setHousehold] = useState({
    household_number: '',
    living_type: 'household',
    respondent_name: '',
    household_head: '',
    household_member_no: '',
    address: '',
    unit_no: '',
    house_no: '',
    street: '',
  })

  useEffect(() => {
    setSurveyForm(current => ({
      ...current,
      date_encoded: new Date(),
      encoder_name: user?.name,
      supervisor_name: 'Secretary',
    }))
  }, [user])

  const membersData = [
    { questionsAndAnswer: questionsAndAnswerMember1, setQuestionAndAnswer: setQuestionAndAnswerMember1 },
    { questionsAndAnswer: questionsAndAnswerMember2, setQuestionAndAnswer: setQuestionAndAnswerMember2 },
    { questionsAndAnswer: questionsAndAnswerMember3, setQuestionAndAnswer: setQuestionAndAnswerMember3 },
    { questionsAndAnswer: questionsAndAnswerMember4, setQuestionAndAnswer: setQuestionAndAnswerMember4 },
    { questionsAndAnswer: questionsAndAnswerMember5, setQuestionAndAnswer: setQuestionAndAnswerMember5 },
    { questionsAndAnswer: questionsAndAnswerMember6, setQuestionAndAnswer: setQuestionAndAnswerMember6 },
    { questionsAndAnswer: questionsAndAnswerMember7, setQuestionAndAnswer: setQuestionAndAnswerMember7 },
    { questionsAndAnswer: questionsAndAnswerMember8, setQuestionAndAnswer: setQuestionAndAnswerMember8 },
    { questionsAndAnswer: questionsAndAnswerMember9, setQuestionAndAnswer: setQuestionAndAnswerMember9 },
    { questionsAndAnswer: questionsAndAnswerMember10, setQuestionAndAnswer: setQuestionAndAnswerMember10 },
  ];

  const alertMessage = (title, message, navigation) => {
    Alert.alert(
      title, 
      message,
      [
        {
          text: "Ok",
          onPress: () =>  navigation ? navigation.navigate('Home') : ''
        }
      ]
    );
  }

  const handleInputChange = (index, value, array, onChange) => {
    const updatedArray = [...array]

    if (!updatedArray[index]) {
      updatedArray[index] = ''
    }

    updatedArray[index] = value

    onChange(updatedArray);
  } 

  const submitForm = async (navigation, setLoading) => {
    const questionsAndResponses = [
      addMemberNumber(questionsAndAnswerMember1, 1),
      addMemberNumber(questionsAndAnswerMember2, 2),
      addMemberNumber(questionsAndAnswerMember3, 3),
      addMemberNumber(questionsAndAnswerMember4, 4),
      addMemberNumber(questionsAndAnswerMember5, 5),
      addMemberNumber(questionsAndAnswerMember6, 6),
      addMemberNumber(questionsAndAnswerMember7, 7),
      addMemberNumber(questionsAndAnswerMember8, 8),
      addMemberNumber(questionsAndAnswerMember9, 9),
      addMemberNumber(questionsAndAnswerMember10, 10)
    ]

    const filledArrayResponses = questionsAndResponses.filter(array => array.length > 0)

    if (Object.values(household)?.some(answer => answer === '')) {
      return alertMessage('Failed', "Household Information: Submission failed, don't leave empty fields.");
    }else if (Object.keys(surveyForm).filter((response, idx) => idx >= 0 && idx <= 6).some(response => response === '')) {
      return alertMessage('Failed', "Survey Information: Submission failed, don't leave empty fields.");
    }else if (filledArrayResponses.length > 0){
      if(filledArrayResponses[0].some(response => response === '') || filledArrayResponses[0].length < 50){
        return alertMessage('Failed', "Household Questions: Submission failed, don't leave empty fields.");
      }

      for(let i = 1; i <= 10; i++){
        if(filledArrayResponses[i]?.length > 0){
          if(filledArrayResponses[i].some(response => response === '')){
            return alertMessage('Failed', "Household Members: Submission failed, don't leave empty fields.");
          }
        }
      }
    }

    try {
      const { data } = await apiClient.post('/survey_form', { household, surveyForm, questionsAndResponses })
      if(data.success){
        setQuestionAndAnswerMember1([])
        setQuestionAndAnswerMember2([])
        setQuestionAndAnswerMember3([])
        setQuestionAndAnswerMember4([])
        setQuestionAndAnswerMember5([])
        setQuestionAndAnswerMember6([])
        setQuestionAndAnswerMember7([])
        setQuestionAndAnswerMember8([])
        setQuestionAndAnswerMember9([])
        setQuestionAndAnswerMember10([])
        setSurveyForm({
          first_visit_date: '',
          first_visit_time_start: '',
          first_visit_time_end: '',
          first_visit_result: '',
          first_visit_date_next_visit: '',
          first_visit_interviewer: '',
          first_visit_supervisor: '',
          second_visit_date: '',
          second_visit_time_start: '',
          second_visit_time_end: '',
          second_visit_result: '',
          second_visit_date_next_visit: '',
          second_visit_interviewer: '',
          second_visit_supervisor: '',
          date_encoded: '',
          encoder_name: '',
          supervisor_name: '',
        })
        setHousehold({
          household_number: '',
          living_type: 'household',
          respondent_name: '',
          household_head: '',
          household_member_no: '',
          address: '',
          unit_no: '',
          house_no: '',
          street: ''
        })
        return alertMessage('Success', 'Survey form submitted successfully', navigation)
      }else{
        return alertMessage('Failed', `Failed to submit survey form, please try again later`)
      }
    } catch (error) {
      return alertMessage('Failed', 'An unexpected error occurred. Please try again later', navigation)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SurveyFormContext.Provider 
      value={{ 
        setHousehold, 
        household,
        handleInputChange,
        membersData,
        surveyForm,
        setSurveyForm,
        submitForm
      }}
    >
      {children}
    </SurveyFormContext.Provider>
  )
}