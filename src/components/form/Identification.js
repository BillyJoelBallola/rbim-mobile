import { Image, View } from 'react-native'
import logo from '../../../assets/images/RBIM-logo-black.png'
import React, { useState, useEffect, useContext } from 'react'
import { SurveyFormContext } from '../../context/SurveryFormContext'
import apiClient from '../../api/client'
import { Ionicons } from '@expo/vector-icons';

import CustomInput from '../CustomInput'
import HeightSpacer from '../spacer/HeightSpacer'
import CustomRadioButton from '../CustomRadioButton'
import CustomGeneralDropdown from '../CustomGeneralDropdown'
import CustomTitle from '../CustomTitle'
import { ScrollView } from 'react-native'
import CustomButton from '../CustomButton'
import CustomCancelButton from '../CustomCancelButton';

const Identification = ({ navigation }) => {
  const { household, setHousehold, surveyForm, setSurveyForm } = useContext(SurveyFormContext)
  const [address, setAddress] = useState([])
  const radioBtnData = [
    {
      label: 'Household',
      value: 'household'
    },
    {
      label: 'Institutional Living Quarter',
      value: 'institutional'
    },
  ]

  useEffect(() => {
    apiClient.get("/address").then(({ data }) => {
      setAddress(data.data)
    })
  }, [])

  const handleContinueBtn = () => {
    const date = new Date();

    if(surveyForm?.second_visit_date === '0000-00-00' || surveyForm?.second_visit_date === null){
      setSurveyForm(current => ({
        ...current, 
        second_visit_date: date,
        second_visit_time_start: date,
      }))
    }

    navigation.navigate('SurveyForm', { tab: 3 })
  }

  return (
    <ScrollView style={{ flexDirection: 'column', gap: 10 }}>
      <CustomCancelButton navigation={navigation} />

      <Image source={logo}/>
      <HeightSpacer size={20} />

      <View>
        <CustomInput 
          label={'Household Number'} 
          placeholder={'0000043'} 
          value={household?.household_number || ''} 
          setValue={(value) => setHousehold(current => ({...current, household_number: value}))}/>
        <HeightSpacer size={10}/>
        <CustomRadioButton 
          value={household?.living_type || ''} 
          setValue={(value) => setHousehold(current => ({...current, living_type: value}))} radioBtnData={radioBtnData} />
        <HeightSpacer size={20}/>

        <CustomTitle text={"A. IDENTIDICATION"} size={16} />
        <HeightSpacer size={10}/>
        <CustomInput 
          label={'Repondents Name'} 
          placeholder={'Surname, First Name, Middle Name/Initial'} 
          value={household?.respondent_name || ''} 
          setValue={(value) => setHousehold(current => ({...current, respondent_name: value}))}/>
        <HeightSpacer size={10}/>
        <CustomInput 
          label={'Household Head'} 
          placeholder={'Surname, First Name, Middle Name/Initial'} 
          value={household?.household_head || ''} 
          setValue={(value) => setHousehold(current => ({...current, household_head: value}))}/>
        <HeightSpacer size={10}/>
        <CustomInput 
          label={'Total No. of Household Member'} 
          placeholder={'HH Number'} 
          value={household?.household_member_no || ''} 
          setValue={(value) => setHousehold(current => ({...current, household_member_no: value}))}/>
        <HeightSpacer size={10}/>
        <CustomGeneralDropdown 
          disabled={true}
          data={address} 
          label={'Barangay, Municipal, Province'}
          selected={household?.address || ''} 
          onSelect={(value) => setHousehold(current => ({...current, address: value}))}/>
        <HeightSpacer size={10}/>
        <CustomInput 
          label={'Room/Floor/Unit No. and Building Name'} 
          placeholder={'Number'} 
          value={household?.unit_no || ''} 
          setValue={(value) => setHousehold(current => ({...current, unit_no: value}))}/>
        <HeightSpacer size={10}/>
        <CustomInput 
          label={'House/Lot and Block No.'} 
          placeholder={'Number'} 
          value={household?.house_no || ''} 
          setValue={(value) => setHousehold(current => ({...current, house_no: value}))}/>
        <HeightSpacer size={10}/>
        <CustomInput 
          label={'Street Name'} 
          placeholder={'Street'} 
          value={household?.street || ''} 
          setValue={(value) => setHousehold(current => ({...current, street: value}))}/>
        <HeightSpacer size={10}/>
        <CustomInput 
          label={'Phone Number'} 
          placeholder={'Phone Number'} 
          value={household?.phone_no || ''} 
          setValue={(value) => setHousehold(current => ({...current, phone_no: value}))}/>
        <HeightSpacer size={10}/>
      </View> 

      <HeightSpacer size={10}/>
      <CustomButton text={"NEXT"} onPress={handleContinueBtn}/>
    </ScrollView>
  )
}

export default Identification
