import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Disciplina({chieldren, titulo}){
   return (
    <View>
      <Text style={{fontSize:20,fontWeight:'bold'}}>
        Disciplina:{titulo}
      </Text>
    </View>
  );
}
