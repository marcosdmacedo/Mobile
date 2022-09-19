import { View, Text, Button } from 'react-native'
import { useState } from 'react'

const VotaCidade = () => {
  const [quixada,setQuixada] = useState(0)
  const [quixeramobim,setQuixeramobim] = useState(0)
  const [ibicuitinga,setIbicuitinga] = useState(0)
  const [maisVotado,setMaisVotado] = useState()

  const acaoVotar = ()=> {
    // acredito que tenha uma maneira mais 'prática' de fazer
    let x = ''
    if( quixada > ibicuitinga && quixada > quixeramobim){
      x = 'Quixadá'
    } else if( quixeramobim > ibicuitinga && quixeramobim > quixada){
      x = 'Quixeramobim'
    }else if( ibicuitinga > quixada && ibicuitinga > quixeramobim){
      x = 'Ibicuitinga'
    } else x = 'empate'

    setMaisVotado(x)
  }
   const acaoQuixada = ()=> {
    setQuixada(quixada+1)
  }
  const acaoQuixeramobim = ()=> {
    setQuixeramobim(quixeramobim+1)
  }
  const acaoIbicuitinga = ()=> {
    setIbicuitinga(ibicuitinga+1)
  }

    return (
        <View>
            <View>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Quixada: {quixada}</Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Quixeramobim: {quixeramobim}</Text>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Ibicuitinga: {ibicuitinga}</Text>
                <Text style={{fontSize:18}}>Mais Votado: {maisVotado}</Text>
            </View>
            <View
                style={{
                    flex:1,
                    flexDirection:'row'
                }}
            >
                <View style={{margin:5}}>
                    <Button title='Quixadá' onPress={acaoQuixada}/>
                </View>
                <View style={{margin:5}}>
                    <Button title='Quixeramobim' onPress={acaoQuixeramobim}/>
                </View>
                <View style={{margin:5}}>
                    <Button title='Ibicuitinga' onPress={acaoIbicuitinga}/>
                </View>
                <View style={{margin:3, backgroundColor:'red'}}>
                    <Button title='Mais Votado' onPress={acaoVotar}/>
                </View>
            </View>
        </View>
    )
}
export default VotaCidade
