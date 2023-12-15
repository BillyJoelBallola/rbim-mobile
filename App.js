import { SafeAreaView, StyleSheet } from 'react-native';
import { QuestionsContextProvider } from './src/context/QuestionsContext';
import { SurveyFormContextProvider } from './src/context/SurveryFormContext'

import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import SurveyFormScreen from './src/screens/SurveyFormScreen'

export default function App() {
  return (
    <SurveyFormContextProvider>
      <QuestionsContextProvider>
        <SafeAreaView style={styles.root} >
          <HomeScreen />
        </SafeAreaView>
      </QuestionsContextProvider>
    </SurveyFormContextProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F1F1F1'
  }
});
