import { View, Text, Button, Image} from 'react-native'
import { useState } from 'react'

// let contador = 0

const Cotador = ()=> {

  const [contador,setContador] = useState(10)
  const [aragao, setAragao] = useState(true)

  const acaoAumentar = ()=> {
    setContador(contador+1)
  }
  const acaoAragao = ()=> {
    setAragao(!aragao)
  }

  const mostrarAragao = () => {
        if (aragao) {
            return (
                <Image
                    source={
                        { uri: 'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Aragão-240x320.png', width: 240, height: 320 }
                    }
                />
            )
        }
        return null
    }
  return (
    <View>
        <Text style={
            {
                fontSize: 30,
                fontWeight: 'bold'
            }
        }>Contador: {contador}</Text>
        <Button
            title='AUMENTAR'
            onPress={acaoAumentar}
        />
        <View style={{marginTop:20}}>
            <Button
                title='MOSTRAR ARAGAO'
                onPress={acaoAragao}
            />
        </View>
        {
            mostrarAragao()
        }
    </View>
  )
}

export default Cotador