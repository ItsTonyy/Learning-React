import { ThemeContext } from './contexts/themeContext';

const Greetings = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <div style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: value.theme === 'light' ? '#eee' : '#333',
          color: value.theme === 'light' ? '#333' : '#eee',
          marginTop: 20,
        }}>
          <h1>Hello World</h1>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default Greetings