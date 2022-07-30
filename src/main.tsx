import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'

// React.StrictMode 在开发模式中会导致useEffect触发两次，开发的时候可以注释掉
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  // </React.StrictMode>
)
