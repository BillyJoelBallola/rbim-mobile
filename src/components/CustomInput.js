import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({ width, value, setValue, secureTextEntry, label, placeholder, disabled }) => {

  const handleInput = (inputValue) => {
    setValue(inputValue)
  }

  return (
    <View style={[{ flexDirection: 'column', gap: 4 }, width ? { width: width } : {}]}>
      {label && <Text>{label}</Text>}
      <TextInput
        editable={!disabled ? disabled : true}
        value={value}
        onChangeText={handleInput}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        numberOfLines={1} 
        ellipsizeMode="tail"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#808080'
  }
})

export default CustomInput