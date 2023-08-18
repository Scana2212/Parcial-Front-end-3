import { useState } from 'react'
import Form from './Form';
import Card from './Card';
import './App.css'

function App() {

  const [usuarios, setUsuarios] = useState([]);

  const addUsuario = (usuario) => {
    setUsuarios([...usuarios,usuario])
  }

  return (
    <div className='App'>
      <h1>EL FULBO</h1>
      <Form onAddUsuario={addUsuario}/>
      <Card usuarios={usuarios}/>
    </div>
  )
}

export default App
