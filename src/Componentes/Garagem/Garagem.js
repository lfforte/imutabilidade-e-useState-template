import  Carro  from '../Carro/Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'

export default function Garagem({ nome }) {
  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao>Muda nome</Botao>

      <Estacionamento>
        <Carro
          modelo="Corsa"
          cor="branco"
          ano={2020}
          adicionadoPor="Labenu"
          flex
        />
      </Estacionamento>
    </GaragemContainer>
  )
}
