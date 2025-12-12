import React from 'react';
import { View, Text, Button } from 'react-native';

export default function AutismQuiz({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Quiz de Autismo</Text>
      <Button title="Ver Resultado" onPress={() => navigation.navigate('AutismResult')} />
    </View>
  );
}