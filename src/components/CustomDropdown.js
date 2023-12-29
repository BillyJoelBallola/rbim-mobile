import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

const CustomDropdown = ({ data, selected, onSelect, label, disabled }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selected || null);
  const [customInput, setCustomInput] = useState('');

  useEffect(() => {
    const selectedResponse = data.find(item => item.responseCode === selected) 
    setSelectedOption(selectedResponse || null);
  }, [selected]);

  const handleSelect = (code) => {
    const selectedResponse = data.find(item => item.responseCode === code) 
    setSelectedOption(selectedResponse);
    setModalVisible(false);
    onSelect(code);
  };

  const handleCustomInput = () => {
    if (customInput.trim() !== '') {
      setSelectedOption(customInput);
      setModalVisible(false);
      onSelect(customInput);
    }
  };

  return (
    <View style={{ flexDirection: 'column', gap: 4 }}>
      {label && <Text>{label}</Text>}
      <View style={styles.container}>
        <TouchableOpacity
          disabled={disabled ? disabled : false}
          style={styles.dropdownButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.dropdownText} numberOfLines={1} ellipsizeMode="tail">
            {selectedOption ? `${selectedOption.responseCode} - ${selectedOption.responseText}` : 'Select an option'}
          </Text>
        </TouchableOpacity>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.centeredModal}>
            <View style={styles.modalContainer}>
              <FlatList
                data={data}
                keyExtractor={(item) => item.responseCode}
                style={{ width: '100%' }}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.optionItem}
                    onPress={() => handleSelect(item.responseCode)}
                  >
                    <Text>{item.responseCode} - {item.responseText}</Text>
                  </TouchableOpacity>
                )}
              />

              <TextInput
                style={styles.input}
                placeholder="Type your own answer"
                value={customInput}
                onChangeText={(text) => setCustomInput(text)}
              />

              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleCustomInput}
              >
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5
  },
  dropdownButton: {
    width: '100%',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 5,
  },
  dropdownText: {
  },
  centeredModal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.31)'
  },
  modalContainer: {
    width: '100%',
    maxHeight: '50%',
    padding: 20,
    backgroundColor: 'white',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#808080',
  },
  optionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    width: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  submitButton: {
    backgroundColor: '#008605',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  submitButtonText: {
    color: 'white',
  },
});

export default CustomDropdown;
