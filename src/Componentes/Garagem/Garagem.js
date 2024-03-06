import { useState } from 'react';
import Carro from '../Carro/Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'

export default function Garagem({ nome, setNome }) {

  const alterarNome = () => {
    if (nome === 'LuizZ') {
      setNome('Telkes');
    } else {
      setNome('LuizZ');
    }

  }

  const [automovel, setAutomovel] = useState({
    modelo: 'Ferrari - F40',
    cor: 'Vermelho',
    ano: 2024,
    flex: true,
    adicionadoPor: 'Luiz fernando'
  })
  const carro1 = {
    modelo: 'Ferrari - F40',
    cor: 'Vermelho',
    ano: 2022,
    flex: true,
    adicionadoPor: 'Luiz'
  }
  const carro2 = {
    modelo: 'F50',
    cor: 'Verde',
    ano: 2024,
    flex: true,
    adicionadoPor: 'Fernando'
  }
  const carro3 = {
    modelo: 'Fusca 80',
    cor: 'Amarelo',
    ano: 1980,
    flex: false,
    adicionadoPor: 'Luiz'
  }

  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={alterarNome}>Muda nome</Botao>

      <Estacionamento>
        <Carro
          automovel={automovel}
          setAutomovel={setAutomovel}
          carro1={carro1}
          carro2={carro2}
          carro3={carro3}
        />
      </Estacionamento>
    </GaragemContainer>
  )
}
