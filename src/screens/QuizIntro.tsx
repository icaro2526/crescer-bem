import React from 'react';
import { View, Text, Button } from 'react-native';

export default function QuizIntro({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Você responderá 18 perguntas rápidas. Leva ~2 minutos.</Text>
      <Button title="Começar quiz" onPress={() => navigation.navigate('QuizQuestion')} />
    </View>
  );
}