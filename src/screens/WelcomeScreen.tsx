import React from 'react';
import { View, Text, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vinda ao Crescer Bem</Text>
      <Button title="Criar Perfil" onPress={() => navigation.navigate('QuizIntro')} />
      <Button title="Entrar" onPress={() => navigation.navigate('MainTabs')} />
    </View>
  );
}