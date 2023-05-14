import './App.css'

// importando os componentes
import HelloWorld from './components/HelloWorld'
import Frase from './components/frase'



function App() {
  const name = 'Tony'
  const url = 'https://via.placeholder.com/150'
  
  return (
    <div className='app'>
      <h1>Isto é um H1</h1>
      <h2>Testando interpolação usando variáveis</h2>
      <p>olá, {name}. Como vai?</p>
      <p>soma: {53 * 432}</p>
      <p>divisão: {432 / 52}</p>
      <img src={url} alt="imagem"/>
      <HelloWorld/>
      <Frase />
    </div>
  )

}

export default App
