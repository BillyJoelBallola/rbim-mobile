import { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { UserContext } from "./UserContext";
import apiClient from '../api/client'

export const SurveyFormContext = createContext({})

const addMemberNoToResponses  = (array, memberNo) => {
  const result = []

  if(array.length > 0){
    array.forEach(item => {
      const { question, response } = item
      result.push({ memberNo, question, response })
    })
  }

  return result
}

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
          onPress: () =>  navigation.navigate('Home')
        }
      ]
    );
  }

  const handleInputChange = (index, value, array, onChange) => {
    const newArray = [...array]

    if (!newArray[index]) {
      newArray[index] = {}; 
    }

    newArray[index] = value;

    onChange(newArray);
  } 

  const submitForm = async (navigation, setLoading) => {
    setLoading(true)
    const questionsAndResponses = [
      addMemberNoToResponses(questionsAndAnswerMember1, 1),
      addMemberNoToResponses(questionsAndAnswerMember2, 2),
      addMemberNoToResponses(questionsAndAnswerMember3, 3),
      addMemberNoToResponses(questionsAndAnswerMember4, 4),
      addMemberNoToResponses(questionsAndAnswerMember5, 5),
      addMemberNoToResponses(questionsAndAnswerMember6, 6),
      addMemberNoToResponses(questionsAndAnswerMember7, 7),
      addMemberNoToResponses(questionsAndAnswerMember8, 8),
      addMemberNoToResponses(questionsAndAnswerMember9, 9),
      addMemberNoToResponses(questionsAndAnswerMember10, 10)
    ]

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
        alertMessage('Success', 'Survey form submitted successfully', navigation)
      }else{
        alertMessage('Failed', 'Failed to submit survey form', navigation)
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