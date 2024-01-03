import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

const CustomGeneralDropdown = ({ data, selected, onSelect, label }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if(data?.length > 0){
      const selectedItem = data?.find(item => item?.id?.toString() === selected?.toString());
      setSelectedOption(selectedItem || null);
    }
  }, [selected, data]);

  const handleSelect = (id) => {
    const selectedItem = data.find(item => item.id === id);
    setSelectedOption(selectedItem);
    setModalVisible(false);
    onSelect(id);
  };
  return (
    <View style={{ flexDirection: 'column', gap: 4 }}>
      { label && <Text>{label}</Text> }
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.dropdownText} numberOfLines={1} ellipsizeMode="tail">
            {selectedOption ? `${selectedOption.barangay}, ${selectedOption.municipal}, ${selectedOption.province}` : 'Select an option'}
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
                keyExtractor={(item) => item.id}
                style={{ width: '100%' }}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.optionItem}
                    onPress={() => handleSelect(item.id)}
                  >
                    <Text>{item.barangay}, {item.municipal}, {item.province}</Text>
                  </TouchableOpacity>
                )}
              />
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
    alignItems: 'center'
  },
  optionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    width: '100%'
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

export default CustomGeneralDropdown;
