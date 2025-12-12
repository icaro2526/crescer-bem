import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import screens
import WelcomeScreen from '../screens/WelcomeScreen';
import QuizIntro from '../screens/QuizIntro';
import QuizQuestion from '../screens/QuizQuestion';
import HomeScreen from '../screens/HomeScreen';
import DevelopmentScreen from '../screens/DevelopmentScreen';
import SymptomsList from '../screens/SymptomsList';
import SymptomDetail from '../screens/SymptomDetail';
import AutismIntro from '../screens/AutismIntro';
import AutismQuiz from '../screens/AutismQuiz';
import AutismResult from '../screens/AutismResult';
import ScreensGuide from '../screens/ScreensGuide';
import TimerTool from '../screens/TimerTool';
import ProfileScreen from '../screens/ProfileScreen';

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

export default function RootNavigator() {
  return (
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
  );
}