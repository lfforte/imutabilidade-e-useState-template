import { CarroContainer } from './styles'

export default function Carro({ automovel, setAutomovel, carro1, carro2, carro3 }) {

  const alterarCarro = () => {
    if (automovel.modelo === 'Ferrari - F40') {
      setAutomovel(carro2);
    } else if (automovel.modelo === 'F50') {
      setAutomovel(carro3);
    } else {
      setAutomovel(carro1);
    }
  }

  return (
    <CarroContainer>
      <h2>{automovel.modelo}</h2>
      <ul>
        <li>Cor: {automovel.cor}</li>
        <li>Ano: {automovel.ano}</li>
        <li>Flex: {automovel.flex ? 'Sim' : 'Não'}</li>
        <li>Adicionado: {automovel.adicionadoPor}</li>
      </ul>
      <button onClick={alterarCarro}>Muda Carro</button>
    </CarroContainer>
  )
}
