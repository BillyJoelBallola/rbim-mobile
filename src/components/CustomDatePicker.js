import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CustomDatePicker = ({ selectedDate, onDateChange, mode = 'date' }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const showDatePickerHandler = () => {
    setShowDatePicker(true);
  };

  const hideDatePickerHandler = () => {
    setShowDatePicker(false);
  };

  const onDateChangeHandler = (event, selected) => {
    hideDatePickerHandler();
    onDateChange(selected);
  };

  const DisplayText = () => {
    switch (mode) {
      case 'date':
        return selectedDate ?
        selectedDate.toDateString() : 
        'Select Date'
      case 'time':
        return selectedDate ?
        selectedDate.toLocaleString('en-US').substring(12,24) : 
        'Select Time'
      default:
        break;
    }
  }

  return (
    <View>
      <TouchableOpacity onPress={showDatePickerHandler}>
        <Text style={styles.datePickerText}>
          <DisplayText />
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode={mode}
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
