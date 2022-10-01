import './App.css'
import { Route, Routes } from 'react-router-dom'
import Notfound from './Pages/Notfound'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
