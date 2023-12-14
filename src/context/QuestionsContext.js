import apiClient from '../api/client'
import { createContext, useEffect, useState } from "react";

export const QuestionsContext = createContext({})

export const QuestionsContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([])
  
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await apiClient.get("/response")
      if(response.data.success){
        const questionsData = await response.data.data
        const formattedData = {};

        questionsData.forEach(entry => {
          const questionCode = entry.question_code;
          const questionText = entry.question_text;
          const responseCode = entry.response_code;
          const responseText = entry.response_text;

          if (!formattedData[questionCode]) {
            formattedData[questionCode] = {
              questionCode,
              questionText,
              responses: [],
            };
          }

          formattedData[questionCode].responses.push({
            responseCode,
            responseText,
          });

        }); 

        setQuestions(formattedData);
      }else{
        console.log(data.message);
      }
    }
    fetchQuestions()
  }, [])

  return (
    <QuestionsContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionsContext.Provider>
  )
}