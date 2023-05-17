import Item from './Item'

function List () {
  return (
    <>
      <h1>Lista de Carros</h1>

      <ul>
        <Item marca = 'ferrari' ano_lancamento = {1985} />
        <Item marca = 'Fiat' ano_lancamento = {1960} />
        <Item marca = 'Renault' ano_lancamento={1990} />
        <Item/>
      </ul>
    </>
  )
}

export default List