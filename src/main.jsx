import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AllTheBooksContextProvider } from './contexts/AllTheBooksContext.jsx'
import { CommenAreaContextProvider } from './contexts/CommenrtAreaContext.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <CommenAreaContextProvider>
      <AllTheBooksContextProvider>
        <App />
      </AllTheBooksContextProvider>
      </CommenAreaContextProvider>
      </ThemeProvider>
  </StrictMode>,
)
