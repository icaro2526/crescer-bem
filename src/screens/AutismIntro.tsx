import React from 'react';
import { View, Text, Button } from 'react-native';

export default function AutismIntro({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Suspeita de Autismo</Text>
      <Text>Este questionário NÃO faz diagnóstico.</Text>
      <Button title="Iniciar checklist" onPress={() => navigation.navigate('AutismQuiz')} />
    </View>
  );
}