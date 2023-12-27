import React, { useContext } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SurveyFormContext } from '../context/SurveryFormContext';
import { Ionicons } from '@expo/vector-icons';
import HeightSpacer from './spacer/HeightSpacer';
import { Divider } from 'react-native-paper';

const MemberInfo = ({ show, setShow }) => {
  const { membersData } = useContext(SurveyFormContext)

  const hideSideBar = () => {
    setShow(false)
  }

  return (
    <View 
      style={[
        styles.sideBar,
        show ? { width: '90%'} : { width: '0%' },
        show ? { paddingHorizontal: 20 } : { paddingHorizontal: 0 },
      ]}
    >
      <ScrollView>
        <View style={styles.siderBarHeader}>
          <Text style={{ fontWeight: '600', fontSize: 16 }}>Household Members</Text>
          <Pressable onPress={hideSideBar}>
            <Ionicons name='close-outline' size={28} color={'#008605'} />
          </Pressable>
        </View>
        
        <HeightSpacer size={20}/>
        <View style={styles.column}>
          <View style={{ width: '15%' }}>
            <Text style={{ fontWeight: '600' }}>No.</Text>
          </View>
          <View style={{ width: '50%' }}>
            <Text style={{ fontWeight: '600' }}>Name</Text>
          </View>
          <View style={{ width: '10%' }}>
            <Text style={{ fontWeight: '600' }}>Sex</Text>
          </View>
          <View style={{ width: '10%' }}>
            <Text style={{ fontWeight: '600' }}>Age</Text>
          </View>
        </View>

        {
          membersData &&
          membersData.map((member, idx) => (
            <View key={idx}>
              {
                member.questionsAndAnswer.length > 0 &&
                <>
                  <HeightSpacer size={20}/>
                  <Divider />
                  <HeightSpacer size={20}/>
                  <View style={styles.column}>
                    <View style={{ width: '15%' }}>
                      <Text>#{idx + 1}</Text>
                    </View>
                    <View style={{ width: '50%'}}>
                      <Text>{member.questionsAndAnswer[0] ? member.questionsAndAnswer[0] : '--'}</Text>
                    </View>
                    <View style={{ width: '10%' }}>
                      <Text>{member.questionsAndAnswer[2] ? member.questionsAndAnswer[2] : '--'}</Text>
                    </View>
                    <View style={{ width: '10%' }}>
                      <Text>{member.questionsAndAnswer[3] ? member.questionsAndAnswer[3] : '--'}</Text>
                    </View>
                  </View>
                </>
              }
            </View>
          ))
        }

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  sideBar: {
    height: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 20,
    paddingVertical: 50,
    borderRightColor: '#d9d9d9',
    borderRightWidth: 1
  },
  siderBarHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  column: {
    flex: 4,
    width: '100%',
    gap: 5,
    flexDirection: 'row'
  }
})

export default MemberInfo
