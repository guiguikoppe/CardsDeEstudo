import { useState } from 'react'
import './App.css'

// Componentes de Layout
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Subheader from './components/Subheader/Subheader'
import Footer from './components/Footer/Footer'

// Componente de Conteúdo
import AutoCard from './components/AutorCard/AutoCard'

function App() {
  // Estado para o Menu Lateral
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  // Estado para a Lista de Cards
  const [cards] = useState([
    {
      titulo: 'JavaScript Básico',
      explicacao: 'Introdução ao JavaScript, incluindo variáveis, tipos de dados e funções.',
      exemploC: 'const saudacao = "Olá, mundo!"; console.log(saudacao);',
      dica: 'Pratique escrevendo pequenos scripts para se familiarizar com a sintaxe.'
    },
    {
      titulo: 'React Hooks',
      explicacao: 'O useState é um Hook que permite adicionar o estado do React a componentes de função.',
      // Exemplo de card sem código para testar o estilo 'offline'
      exemploC: '', 
      dica: 'Lembre-se que Hooks devem ser chamados no nível superior do componente.'
    }
  ])

  return (
    <div className="App">
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />
      <Nav isOpen={isOpen} />
      
      <main>
        <Subheader />
        
        <section className="card-container">
          <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Cards de Estudo</h1>
          
          {cards.map((card, index) => (
            <AutoCard 
              key={index} 
              titulo={card.titulo} 
              explicacao={card.explicacao} 
              exemploC={card.exemploC} 
              dica={card.dica} 
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App