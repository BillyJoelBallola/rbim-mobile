import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import apiClient from '../api/client'
import moment from 'moment'

import CustomInput from '../components/CustomInput'
import HeightSpacer from '../components/spacer/HeightSpacer'
import { Divider } from 'react-native-paper'
import { SurveyFormContext } from '../context/SurveryFormContext';

const SurveyFormInfo = ({formId, navigation, respondent, address, address_id, firstVisitDate, secondVisitDate, firstVisitResult, secondVisitResult}) => {
  const filteredAddress = address?.find(item => item.id === address_id)
  const { setSurveyFormId } = useContext(SurveyFormContext)
 
  const handleSelectSurveyForm = () => {
    setSurveyFormId(formId || null)
    navigation.navigate('SurveyForm', { tab: 2 })
  }

  return (
    <TouchableOpacity onPress={handleSelectSurveyForm}>
      <View style={{ borderRadius: 10, backgroundColor: '#f1f1f1', width: '100%', padding: 15, marginBottom: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: 600 }}>{respondent}</Text>
        <Text>{filteredAddress?.barangay}, {filteredAddress?.municipal}, {filteredAddress?.province}</Text>

        <HeightSpacer size={10} />
        <Divider />
        <HeightSpacer size={10} />

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <View style={{ width: '50%' }}>
            <Text style={{ fontWeight: 600 }}>First Visit</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>{moment(firstVisitDate).format("ll") + ' - '}</Text>
              <Text>{firstVisitResult}</Text>
            </View>
          </View>
          <View style={{ width: '50%' }}>
            <Text style={{ fontWeight: 600 }}>Second Visit</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text>{secondVisitDate !== '0000-00-00' && secondVisitDate ? moment(secondVisitDate).format("ll") + ' - ' : "yyyy-mm-dd - "}</Text>
              <Text>{secondVisitResult ? secondVisitResult : "--"}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const SurveyList = ({ navigation }) => {
  const [surveyForms, setSurveyForms] = useState([])
  const [address, setAddress] = useState([])
  const [query, setQuery] = useState('')

  const date = new Date()
  const currentYear = date.toString().slice(11, 15)

  console.log(surveyForms);

  const filteredData = surveyForms.filter(item => {
    return item?.respondent_name?.toLowerCase()?.includes(query.toLowerCase())
  })

  useEffect(() => {
    const fetchSurveyForms = async () => {
      const { data } = await apiClient.get('/survey_forms')
      if(data.success){
        const currentForms = data.data.filter(item => item.first_visit_date.includes(currentYear))
        setSurveyForms(currentForms)
      }
    }
    const fetchAddress = async () => {
      const { data } = await apiClient.get('/address')
      if(data.success){
        setAddress(data.data)
      }
    }

    fetchSurveyForms()
    fetchAddress()
  }, [])

  return (
    <View style={styles.root}>
      <Text style={{ fontSize: 34, fontWeight: 600 }}>Search</Text>
      <Text style={{ fontSize: 14 }}>The list of available survey forms includes only those conducted in the current year.</Text>
      
      <HeightSpacer size={20}/>

      <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 0 }}>
        <TouchableOpacity style={{ width: '10%' }} onPress={() => navigation.navigate('Home')}>
          <Ionicons name='arrow-back-sharp' size={30} />
        </TouchableOpacity>
        <CustomInput
          value={query}
          setValue={setQuery} 
          placeholder={'Type to search using names'} 
          width={'90%'}
        />
      </View>

      <HeightSpacer size={20}/>

      <FlatList 
        data={filteredData}
        renderItem={({item}) => (
          <SurveyFormInfo 
            navigation={navigation}
            formId={item.survey_form_id}
            respondent={item.respondent_name} 
            address={address} 
            address_id={item.address} 
            firstVisitDate={item.first_visit_date} 
            secondVisitDate={item.second_visit_date} 
            firstVisitResult={item.first_visit_result} 
            secondVisitResult={item.second_visit_result} 
          />
        )}
        ListEmptyComponent={<Text>No survey forms found.</Text>}
        keyExtractor={item => item.survey_form_id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    height: '100%',
    backgroundColor: '#fff'
  }
})

export default SurveyList
