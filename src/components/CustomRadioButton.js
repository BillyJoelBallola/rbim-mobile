import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { RadioButton } from 'react-native-paper';

const CustomRadioButton = ({ value, setValue, radioBtnData }) => {
  return (
    <View style={styles.container}>
      <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
        {
          radioBtnData?.map((radio, idx) => (
            <RadioButton.Item color={'#008605'} key={idx} label={radio.label} value={radio.value} />
          ))
        }
      </RadioButton.Group>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: '#808080',
    borderWidth: 1
  }
})

export default CustomRadioButton