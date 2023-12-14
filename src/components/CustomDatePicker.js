import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CustomDatePicker = ({ selectedDate, onDateChange }) => {
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

  return (
    <View>
      <TouchableOpacity onPress={showDatePickerHandler}>
        <Text style={styles.datePickerText}>
          {selectedDate ? selectedDate.toDateString() : 'Select Date'}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
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
