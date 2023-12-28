import { View, StyleSheet } from 'react-native'
import { useState } from 'react'

import Permission from '../components/form/Permission'
import Identification from '../components/form/Identification'
import HousholdMembers from '../components/form/HousholdMembers'
import QuestionsPart1 from '../components/form/QuestionsPart1'
import QuestionsPart2 from '../components/form/QuestionsPart2'
import QuestionsPart3 from '../components/form/QuestionsPart3'
import QuestionsPart4 from '../components/form/QuestionsPart4'
import QuestionsPart5 from '../components/form/QuestionsPart5'
import QuestionsPart6 from '../components/form/QuestionsPart6'
import QuestionsPart7 from '../components/form/QuestionsPart7'
import QuestionsPart8 from '../components/form/QuestionsPart8'
import QuestionsPart9 from '../components/form/QuestionsPart9'
import QuestionsPart10 from '../components/form/QuestionsPart10'
import QuestionsPart11 from '../components/form/QuestionsPart11'
import QuestionsPart12 from '../components/form/QuestionsPart12'
import QuestionsPart13 from '../components/form/QuestionsPart13'
import QuestionsPart14 from '../components/form/QuestionsPart14'
import QuestionsPart15 from '../components/form/QuestionsPart15'
import QuestionsPart16 from '../components/form/QuestionsPart16'
import QuestionsPart17 from '../components/form/QuestionsPart17'
import QuestionsPart18 from '../components/form/QuestionsPart18'
import QuestionsPart19 from '../components/form/QuestionsPart19'
import QuestionsPart20 from '../components/form/QuestionsPart20'
import QuestionsPart21 from '../components/form/QuestionsPart21'
import QuestionsPart22 from '../components/form/QuestionsPart22'
import QuestionsPart23 from '../components/form/QuestionsPart23'
import QuestionsPart24 from '../components/form/QuestionsPart24'
import QuestionsPart25 from '../components/form/QuestionsPart25'
import QuestionsPart26 from '../components/form/QuestionsPart26'
import QuestionsPart27 from '../components/form/QuestionsPart27'
import QuestionsPart28 from '../components/form/QuestionsPart28'
import QuestionsPart29 from '../components/form/QuestionsPart29'
import QuestionsPart30 from '../components/form/QuestionsPart30'
import SurveryFormLastScreen from '../components/form/SurveryFormLastScreen'
import MemberInfo from '../components/MemberInfo'

const SurveyFormScreen = ({ navigation }) => {
  const [show, setShow] = useState(false)
  const [checked, setChecked] = useState(false)
  const [activeScreen, setActiveScreen] = useState(1)

  const showSideBar = () => {
    setShow(true)
  }

  const ShowActiveScreen = () => {
    switch (activeScreen) {
      case 1:
        return <Permission checked={checked} setChecked={setChecked} setActiveScreen={setActiveScreen} navigation={navigation}/>
      case 2:
        return <Identification setActiveScreen={setActiveScreen} navigation={navigation}/>
      case 3:
        return <HousholdMembers setActiveScreen={setActiveScreen} navigation={navigation} />
      case 4:
        return <QuestionsPart1 setActiveScreen={setActiveScreen} showSideBar={showSideBar}  navigation={navigation}/>
      case 5:
        return <QuestionsPart2 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 6:
        return <QuestionsPart3 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 7:
        return <QuestionsPart4 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 8:
        return <QuestionsPart5 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 9:
        return <QuestionsPart6 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 10:
        return <QuestionsPart7 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 11:
        return <QuestionsPart8 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 12:
        return <QuestionsPart9 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 13:
        return <QuestionsPart10 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 14:
        return <QuestionsPart11 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 15:
        return <QuestionsPart12 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 16:
        return <QuestionsPart13 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 17:
        return <QuestionsPart14 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 18:
        return <QuestionsPart15 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 19:
        return <QuestionsPart16 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 20:
        return <QuestionsPart17 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 21:
        return <QuestionsPart18 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 22:
        return <QuestionsPart19 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 23:
        return <QuestionsPart20 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 24:
        return <QuestionsPart21 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 25:
        return <QuestionsPart22 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 26:
        return <QuestionsPart23 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 27:
        return <QuestionsPart24 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 28:
        return <QuestionsPart25 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 29:
        return <QuestionsPart26 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 30:
        return <QuestionsPart27 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 31:
        return <QuestionsPart28 setActiveScreen={setActiveScreen} showSideBar={showSideBar} navigation={navigation}/>
      case 32:
        return <QuestionsPart29 setActiveScreen={setActiveScreen} navigation={navigation}/>
      case 33:
        return <QuestionsPart30 setActiveScreen={setActiveScreen} navigation={navigation}/>
      case 34:
        return <SurveryFormLastScreen setActiveScreen={setActiveScreen} navigation={navigation}/>
    }
  }

  return (
    <>
      <MemberInfo show={show} setShow={setShow}/>
      <View style={styles.root}>
        <ShowActiveScreen />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: '#fff'
  }
})

export default SurveyFormScreen
