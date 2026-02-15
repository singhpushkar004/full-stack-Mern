import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./../node_modules/bootstrap/dist/css/bootstrap.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import { ThContext} from './ThemeContext.jsx'
 const person = {
  name:"abc",
  age:"25"
 }
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThContext.Provider value={person}>
      <App />
    </ThContext.Provider>
  </StrictMode>,
)
