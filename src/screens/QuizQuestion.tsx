import React from 'react';
import { View, Text, Button } from 'react-native';

export default function QuizQuestion({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pergunta do Quiz</Text>
      <Button title="Próxima" onPress={() => navigation.navigate('MainTabs')} />
    </View>
  );
}