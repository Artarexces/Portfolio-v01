import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from '../view/Home.jsx'
import "../global.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
