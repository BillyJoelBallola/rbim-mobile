import { Text } from 'react-native'
import React from 'react'

const TextQuestion = ({questionNo, questionText}) => {
  return (
    <Text>
      <Text style={{ fontWeight: '600' }}>
        {questionNo}: 
      </Text>
      {questionText}
    </Text>
  )
}

export default TextQuestion