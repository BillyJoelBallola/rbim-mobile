import { Pressable, StyleSheet, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

import { Checkbox } from 'react-native-paper';

const CheckBox = ({ checked, setChecked, label}) => {
  return (
    <View style={styles.checkboxContainer}>
      <Checkbox
        color='#008605'
        style={styles.checkbox}
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Text style={styles.label}>{label}</Text>
   </View>
    
  )
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  label: {
    fontSize: 16
  }
})

export default CheckBox
