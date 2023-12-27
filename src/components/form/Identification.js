import { Image, StyleSheet, View } from 'react-native'
import logo from '../../../assets/images/RBIM-logo-black.png'
import React, { useState, useEffect, useContext } from 'react'
import { SurveyFormContext } from '../../context/SurveryFormContext'
import apiClient from '../../api/client'

import CustomInput from '../CustomInput'
import HeightSpacer from '../spacer/HeightSpacer'
import CustomRadioButton from '../CustomRadioButton'
import CustomGeneralDropdown from '../CustomGeneralDropdown'
import CustomTitle from '../CustomTitle'
import { ScrollView } from 'react-native'
import CustomButton from '../CustomButton'

const Identification = ({ setActiveScreen, navigation }) => {
  const { household, setHousehold } = useContext(SurveyFormContext)
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

  return (
    <ScrollView style={{ flexDirection: 'column', gap: 10 }}>
      <Image source={logo}/>
      <HeightSpacer size={20} />

      <View>
        <CustomInput label={'Household Number'} placeholder={'e.g 0000043'} value={household?.household_number} setValue={(value) => setHousehold(current => ({...current, household_number: value}))}/>
        <HeightSpacer size={10}/>
        <CustomRadioButton value={household?.living_type} setValue={(value) => setHousehold(current => ({...current, living_type: value}))} radioBtnData={radioBtnData} />
        <HeightSpacer size={20}/>

        <CustomTitle text={"A. IDENTIDICATION"} size={16} />
        <HeightSpacer size={10}/>
        <CustomInput label={'Repondents Name'} placeholder={'e.g Juan Dela Cruz'} value={household?.respondent_name} setValue={(value) => setHousehold(current => ({...current, respondent_name: value}))}/>
        <HeightSpacer size={10}/>
        <CustomInput label={'Household Head'} placeholder={'e.g Juan Dela Cruz'} value={household?.household_head} setValue={(value) => setHousehold(current => ({...current, household_head: value}))}/>
        <HeightSpacer size={10}/>
        <CustomInput label={'Total No. of Household Member'} placeholder={'e.g 6'} value={household?.household_member_no} setValue={(value) => setHousehold(current => ({...current, household_member_no: value}))}/>
        <HeightSpacer size={10}/>
        <CustomGeneralDropdown data={address} label={'Barangay, Municipal, Province'} selected={household?.address} onSelect={(value) => setHousehold(current => ({...current, address: value}))}/>
        <HeightSpacer size={10}/>
        <CustomInput label={'Room/Floor/Unit No. and Building Name'} placeholder={'e.g 6'} value={household?.unit_no} setValue={(value) => setHousehold(current => ({...current, unit_no: value}))}/>
        <HeightSpacer size={10}/>
        <CustomInput label={'House/Lot and Block No.'} placeholder={'e.g 43'} value={household?.house_no} setValue={(value) => setHousehold(current => ({...current, house_no: value}))}/>
        <HeightSpacer size={10}/>
        <CustomInput label={'Street Name'} placeholder={'e.g Juanito'} value={household?.street} setValue={(value) => setHousehold(current => ({...current, street: value}))}/>
        <HeightSpacer size={10}/>
      </View> 

      <HeightSpacer size={10}/>
      <CustomButton text={"NEXT"} onPress={() => setActiveScreen(current => current + 1)}/>
      <HeightSpacer size={10}/>
      <CustomButton text={"CANCEL"} bgColor={'#808080'} onPress={() => navigation.navigate('Home')}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})

export default Identification
