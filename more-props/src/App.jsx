import './App.css'
import HelloWorld from '/components/HelloWorld'
import SayMyName from '/components/SayMyName'
import Pessoa from '/components/Pessoa'
import List from '../components/List'

function App() {
  const url = 'https://via.placeholder.com/150'
  const nome = 'maria'
  
  return (
    <div className='app'>
      <HelloWorld />
      <SayMyName nome='Tony' />
      <SayMyName nome='Julia' />
      <SayMyName nome={nome} />
      <Pessoa 
        nome='Tony'
        idade = '19'
        profissão = 'programador'
        foto = {url} />

      <List />  
    </div>
  )
}

export default App
