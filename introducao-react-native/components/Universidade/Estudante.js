import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Estudante({nome, curso, universidade}){
   return (
    <View>
      <Text>
      Nome: {nome}
      </Text>
      <Text>
      Curso: {curso}
      </Text>
      <Text>
      Universidade: {universidade}
      </Text>
    </View>
  );
}
