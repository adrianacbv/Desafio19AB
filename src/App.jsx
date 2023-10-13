import './App.css'
import { BaseColaboradores } from '../public/BaseColaboradores.js'
import Listado from './components/Listado.jsx'
import Formulario from './components/Formulario.jsx'
import Buscador from './components/Buscador.jsx'
import { useState } from 'react'

function App() {
  const [colaboradores, setColaboradores ] = useState(BaseColaboradores)
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState(colaboradores)

  const agregarColaborador = (colaborador) => {
    colaborador.id = colaboradores.length + 1
    setColaboradores([...colaboradores, colaborador])
    setColaboradoresFiltrados([...colaboradores, colaborador])
  };

  const realizarBusqueda = (valorInput) => {
    if(valorInput == "")
      setColaboradoresFiltrados(colaboradores)
    else
      setColaboradoresFiltrados(colaboradores.filter(colaborador => 
        colaborador.id == valorInput ||
        colaborador.nombre == valorInput ||
        colaborador.correo == valorInput ||
        colaborador.edad == valorInput ||
        colaborador.cargo == valorInput ||
        colaborador.telefono == valorInput
      ))
  }

  return (
    <>
      <Buscador realizarBusqueda={realizarBusqueda} />
      <Listado colaboradores={colaboradoresFiltrados} />
      <Formulario agregarColaborador={agregarColaborador} />
    </>
  )
}

export default App
