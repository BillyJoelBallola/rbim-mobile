import { SafeAreaView, StyleSheet } from 'react-native';
import { QuestionsContextProvider } from './src/context/QuestionsContext';
import { SurveyFormContextProvider } from './src/context/SurveryFormContext'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import SurveyFormScreen from './src/screens/SurveyFormScreen'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <SurveyFormContextProvider>
        <QuestionsContextProvider>
          <SafeAreaView style={styles.root} >
            <Stack.Navigator>
              <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}} />
              <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
              <Stack.Screen name='SurveyForm' component={SurveyFormScreen} options={{headerShown: false}} />
            </Stack.Navigator>
          </SafeAreaView>
        </QuestionsContextProvider>
      </SurveyFormContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F1F1F1'
  }
});
