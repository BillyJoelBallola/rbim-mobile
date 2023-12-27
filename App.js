import { SafeAreaView, StyleSheet } from 'react-native';
import { QuestionsContextProvider } from './src/context/QuestionsContext';
import { SurveyFormContextProvider } from './src/context/SurveryFormContext'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { UserContextProvider } from './src/context/UserContext';

import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import SurveyFormScreen from './src/screens/SurveyFormScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import SurveyList from './src/screens/SurveyList'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <UserContextProvider>
      <SurveyFormContextProvider>
        <QuestionsContextProvider>
          <SafeAreaView style={styles.root} >
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
                <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}} />
                <Stack.Screen name='SurveyForm' component={SurveyFormScreen} options={{headerShown: false}} />
                <Stack.Screen name='SurveyList' component={SurveyList} options={{headerShown: false}} />
                <Stack.Screen name='Profile' component={ProfileScreen} options={{headerShown: false}} />
              </Stack.Navigator>
            </NavigationContainer>
          </SafeAreaView>
        </QuestionsContextProvider>
      </SurveyFormContextProvider>
    </UserContextProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
