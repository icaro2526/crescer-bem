import React from 'react';
import { View, Text } from 'react-native';

export default function SymptomDetail({ route }) {
  const { symptom } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detalhes de {symptom}</Text>
    </View>
  );
}