/* eslint-disable react/prop-types */

const Buscador = ({realizarBusqueda}) => { 
  return (
    <input type="text" placeholder="Realizar una búsqueda" onChange={(e) => realizarBusqueda(e.target.value)} />
  )
}

export default Buscador