import React, { useEffect, useState } from 'react'
import './Home.css'
import homeLogo from '../../assets/home.png'

interface myProps {
  title: string,
  description: string
}

function Home(props:myProps) {
  const[completed, setCompleted] = useState(false);
  const[tarefa, setTarefa] = useState("");
  const[logar, setLogar] = useState(false);

  useEffect(() => {
    if(completed) {
      setTarefa('Parabéns! Você concluiu a tarefa!');
    }
  }, [completed])
  return (
    <>
    <div>
      <h2>Tarefa</h2>
      <h3>{tarefa}</h3>
      <p>Conclua a tarefa</p>
      <button onClick={() => setCompleted(true)}>Concluir tarefa</button>
    </div>
      <h1 className='titulo'> {props.title}</h1>
      <p>{props.description}</p>

      <img src={homeLogo} className='img' alt="" />

      {logar ? (
        <h2>Bem vindo de volta!</h2>) : (
          <button onClick={() => setLogar(true)}>entrar</button>
        )
      }
    </>
  
  )
}

export default Home