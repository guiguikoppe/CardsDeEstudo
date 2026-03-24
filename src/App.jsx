import './App.css'
import { useState } from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Subheader from './components/Subheader/Subheader'
import Footer from './components/Footer/Footer'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

function App() {
  return (
    <>
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />
      <Nav isOpen={isOpen} />
      <Subheader/>
      <Footer/>
    </>
  )
}

export default App