import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

// Import screens
import WelcomeScreen from './src/screens/WelcomeScreen';
import QuizIntro from './src/screens/QuizIntro';
import QuizQuestion from './src/screens/QuizQuestion';
import HomeScreen from './src/screens/HomeScreen';
import DevelopmentScreen from './src/screens/DevelopmentScreen';
import SymptomsList from './src/screens/SymptomsList';
import SymptomDetail from './src/screens/SymptomDetail';
import AutismIntro from './src/screens/AutismIntro';
import AutismQuiz from './src/screens/AutismQuiz';
import AutismResult from './src/screens/AutismResult';
import ScreensGuide from './src/screens/ScreensGuide';
import TimerTool from './src/screens/TimerTool';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Development" component={DevelopmentScreen} />
      <Tab.Screen name="Symptoms" component={SymptomsList} />
      <Tab.Screen name="Tools" component={ScreensGuide} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="QuizIntro" component={QuizIntro} />
          <Stack.Screen name="QuizQuestion" component={QuizQuestion} />
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="SymptomDetail" component={SymptomDetail} />
          <Stack.Screen name="AutismIntro" component={AutismIntro} />
          <Stack.Screen name="AutismQuiz" component={AutismQuiz} />
          <Stack.Screen name="AutismResult" component={AutismResult} />
          <Stack.Screen name="TimerTool" component={TimerTool} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}