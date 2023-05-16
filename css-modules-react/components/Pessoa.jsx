import styles from './Pessoa.modules.css'

// Usando o destructuring
function pessoa ({nome, idade, profissão, foto}) {
  return (
    <div className= {styles.fraseContainer}>
      <img src={foto} alt={nome} />
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade} </p>
      <p>Profissão: {profissão} </p>
    </div>
  )
}

export default pessoa
