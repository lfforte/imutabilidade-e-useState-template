import { useState } from 'react'
import Garagem from './Componentes/Garagem/Garagem'
import { GlobalStyled } from './GlobalStyled'


export default function App() {

  const [nome, setNome] = useState('LuizZ')

  return (
    <div className="App">
      <GlobalStyled />

      <Garagem nome={nome} setNome={setNome} />
    </div>
  )
}
