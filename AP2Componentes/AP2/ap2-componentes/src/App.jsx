import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componentes/Header.jsx'
import BotaoCep from './componentes/BotaoCep.jsx'
import Formulario from './componentes/Formulario.jsx'
import Card from './componentes/Card.jsx'

function App() {
  const [pessoas, setPessoas] = useState([])
  
  return (
    <>
    <Header/>
    <BotaoCep/>
    <Formulario setPessoas={setPessoas} data={pessoas}/>
    {pessoas.map(cardIngresso => <Card cardIngresso={cardIngresso}/> )}

    </>
  );
}

export default App
