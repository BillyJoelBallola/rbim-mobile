import { createContext, useState } from "react";

export const SurveyFormContext = createContext({})

export const SurveyFormContextProvider = ({ children }) => {
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
    household_type: 'household',
    respondent_name: '',
    household_head: '',
    household_member_no: '',
    address: '',
    unit_no: '',
    house_no: '',
    street: '',
  })

  const handleInputChange = (index, value, array, onChange) => {
    const newArray = [...array]

    if (!newArray[index]) {
      newArray[index] = {};
    }

    newArray[index] = value;

    onChange(newArray);
  } 

  // console.log(JSON.stringify(surveyForm, null, 2));

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

  return (
    <SurveyFormContext.Provider 
      value={{ 
        setHousehold, 
        household,
        handleInputChange,
        membersData,
        surveyForm,
        setSurveyForm
      }}
    >
      {children}
    </SurveyFormContext.Provider>
  )
}