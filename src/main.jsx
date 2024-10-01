import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AllTheBooksContextProvider } from './contexts/AllTheBooksContext.jsx'
import { CommenAreaContextProvider } from './contexts/CommenrtAreaContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CommenAreaContextProvider>
      <AllTheBooksContextProvider>
        <App />
      </AllTheBooksContextProvider>
    </CommenAreaContextProvider>
  </StrictMode>,
)
