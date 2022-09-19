
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import VoltaCidade from './components/Estados/VoltaCidade.jsx'
// import Contador from './components/Estados/Contador.jsx'
// import Estudante from './components/Universidade/Estudante'
// import Disciplina from './components/Universidade/Disciplina'

export default function App() {
  return (
    <View style={styles.container}>
      <VoltaCidade/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,


  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'gray',
  },
});
