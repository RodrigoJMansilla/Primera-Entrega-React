
// import './App.css'
import { ItemListContainer } from './components/common/itemListContainer/ItemListContainer'
import { Navbar } from './components/layout/navbar/Navbar'

function App() {
  

  return (
    <>
      <Navbar />
      <ItemListContainer saludo="Bienvenido! esto es una prop de prueba"/>

    </>

  )
}

export default App
