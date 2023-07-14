import ThemeContextProvider from './contexts/themeContext';
import Message from './Message';
import Greetings from './Greetings';

const app = () => {
  return(
    <ThemeContextProvider>
      <Message />
      <Greetings />
    </ThemeContextProvider>
  )
}

export default app