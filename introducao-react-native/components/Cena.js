import {View, Text} from 'react-native'
import Personagem from './Personagem'

const Cena = ({titulo})=>{
  <View>
    <Text>Cena {titulo}</Text>
    <Personagem nome='Eleven'/>
    <Personagem nome='Vecnan'/>
    <Personagem nome='Max'/>
  </View>
}
export default Cena