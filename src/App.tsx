import { useState } from 'react'
import './App.css'
import Home from './paginas/home/Home'


function App() {
  const[valor, setValor] = useState(0);

  function handleClick(){
    setValor(valor + 1);
  }
  return (
    <>
    <div>
      <p>O valor é: {valor}</p>
      <button onClick={handleClick}>Adicionar 1 </button>
    </div>
    <Home title='Home'
          description='Este é um compponente Home que recebe props'/>
    </>
  )
}

export default App
