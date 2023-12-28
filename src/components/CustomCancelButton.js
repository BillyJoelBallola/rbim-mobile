import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { SurveyFormContext } from '../context/SurveryFormContext';
import { Ionicons } from '@expo/vector-icons';

const CustomCancelButton = ({ navigation }) => {
    const { cancelSurveyForm } = useContext(SurveyFormContext)

    return (
        <View style={{ marginBottom: 5 }}>  
            <TouchableOpacity style={{ width: '10%', }} onPress={() => cancelSurveyForm(navigation)}>
                <Ionicons name='close-sharp' size={30} color={'#008605'}/>
            </TouchableOpacity>
        </View>
    )
}

export default CustomCancelButton

const styles = StyleSheet.create({})