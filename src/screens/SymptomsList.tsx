import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const symptoms = [
  'Febre', 'Tosse', 'Diarreia', 'Vômito', 'Coriza', 'Desidratação', 'Alergia', 'Constipação', 'Assadura', 'Conjuntivite', 'Dor de ouvido', 'Dor abdominal', 'Dor de cabeça', 'Falta de ar'
];

export default function SymptomsList({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={symptoms}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('SymptomDetail', { symptom: item })}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}