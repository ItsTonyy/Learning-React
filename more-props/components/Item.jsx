import PropTypes from 'react'

function Item ({marca, ano_lancamento}) {
  return (
    <>
      <ul>
        <li>{marca} - {ano_lancamento}</li>
      </ul>
    </>
  )
}

Item.propTypes = {
  marca: PropTypes.string,
  ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
  marca: 'Faltou a marca',
  ano_lancamento: 'faltou o ano de lançamento',
}

export default Item