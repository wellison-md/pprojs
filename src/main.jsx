import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from 'styled-components'
import { theme } from './Theme.jsx'
import { GlobalStyle } from './GlobalStyle.jsx'
import GlobalStore from './context/storePRovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
      <ThemeProvider theme={ theme } >
        <GlobalStore>
          <App />
        </GlobalStore>
      </ThemeProvider>
  </React.StrictMode>,
)
