import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AllTheBooksContextProvider } from './contexts/AllTheBooksContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllTheBooksContextProvider>
      <App />
    </AllTheBooksContextProvider>
  </StrictMode>,
)
