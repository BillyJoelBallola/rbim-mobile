import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const CustomDatePicker = ({ selectedDate, onDateChange, mode = 'date', disabled }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const defaultDate = selectedDate ? selectedDate : new Date();

  const onDateChangeHandler = (e, value) => {
    const currentDate = value;
    setShowDatePicker(false);
    onDateChange(currentDate);
  };

  const DisplayText = () => {
    switch (mode) {
      case 'date':
        return selectedDate ?
        moment(selectedDate).format("ll") : 
        'Select Date'
      case 'time':
        return selectedDate ?
        moment(selectedDate).format("LT"): 
        'Select Time'
      default:
        break;
    }
  }

  return (
    <View>
      <TouchableOpacity 
        onPress={() => setShowDatePicker(true)}
        disabled={disabled ? disabled : false}
      >
        <Text style={styles.datePickerText} numberOfLines={1} ellipsizeMode="tail">
          <DisplayText />
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          mode={mode === 'time' ? 'time' : 'date'}
          display='spinner'
          value={defaultDate}
          onChange={onDateChangeHandler}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  datePickerText: {
    paddingVertical: 10,
    borderColor: '#808080',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
  },
});

export default CustomDatePicker;
