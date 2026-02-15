
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import About from './About'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Contact from './Contact'
import { ThContext } from './ThemeContext';

function App() {



  return (
    <>
    
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
  </BrowserRouter>
    
    </>
  )
}

export default App
