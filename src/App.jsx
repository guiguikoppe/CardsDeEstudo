// App.jsx
import { useState } from 'react'
import './App.css'

// Componentes de Layout
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

// Componente de Conteúdo
import AutoCard from './components/AutorCard/AutoCard'

// Exemplo de imagens (substitua pelos seus caminhos reais)
// import imgJs from './assets/js-code.png';


function App() {
  // Estado do Menu
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  // ESTADO CHAVE: Armazena o ID (index) do card que está expandido. null = nenhum.
  const [expandedCardId, setExpandedCardId] = useState(null);

  // Dados atualizados para incluir imagem e texto do código separadamente
const [cards] = useState([
  {
    id: 1,
    titulo: 'O que é Vite?',
    explicacao: 'O Vite é um build tool (ferramenta de construção) focado em velocidade. Ele substitui o antigo Create React App, oferecendo um servidor de desenvolvimento quase instantâneo usando ES Modules nativos.',
    imagemCodigo: 'https://img.shields.io/badge/Vite-Explore-646CFF?style=for-the-badge&logo=vite', // Exemplo de placeholder
    textoCodigo: 'npm create vite@latest meu-projeto -- --template react',
    dica: 'O Vite é muito mais rápido que o Webpack porque não precisa reconstruir todo o bundle a cada alteração.'
  },
  {
    id: 2,
    titulo: 'O que é JSX?',
    explicacao: 'JSX (JavaScript XML) é uma extensão de sintaxe para JavaScript que permite escrever estruturas que se parecem com HTML dentro do arquivo JS. O React o transforma em chamadas de funções reais.',
    imagemCodigo: 'https://img.shields.io/badge/JSX-Syntax-61DAFB?style=for-the-badge&logo=react',
    textoCodigo: 'const elemento = <h1>Olá, {nome}!</h1>;',
    dica: 'Lembre-se: no JSX usamos "className" em vez de "class", pois "class" é uma palavra reservada no JavaScript.'
  },
  {
    id: 3,
    titulo: 'Componentes Funcionais',
    explicacao: 'Componentes são os blocos de construção da interface. Um componente funcional é apenas uma função JavaScript que retorna JSX.',
    imagemCodigo: 'https://img.shields.io/badge/React-Component-61DAFB?style=for-the-badge&logo=react',
    textoCodigo: 'function BemVindo() {\n  return <h1>Seja bem-vindo!</h1>;\n}',
    dica: 'Sempre comece o nome de um componente com letra MAIÚSCULA, ou o React tentará interpretá-lo como uma tag HTML comum.'
  },
  {
    id: 4,
    titulo: 'Props (Propriedades)',
    explicacao: 'Props são argumentos que você passa para os componentes, funcionando como os atributos das tags HTML. Elas permitem que o mesmo componente exiba informações diferentes.',
    imagemCodigo: 'https://img.shields.io/badge/React-Props-61DAFB?style=for-the-badge&logo=react',
    textoCodigo: 'function Saudacao({ nome }) {\n  return <p>Olá, {nome}!</p>;\n}\n\n// Uso:\n<Saudacao nome="Davi" />',
    dica: 'Props são "somente leitura" (read-only). Nunca tente alterar o valor de uma prop dentro do componente que a recebe.'
  },
  {
    id: 5,
    titulo: 'useState Hook',
    explicacao: 'O useState permite que componentes funcionais criem e gerenciem dados que podem mudar ao longo do tempo. Quando o estado muda, o React atualiza a tela automaticamente.',
    imagemCodigo: 'https://img.shields.io/badge/React-useState-61DAFB?style=for-the-badge&logo=react',
    textoCodigo: 'const [contar, setContar] = useState(0);\n\n<button onClick={() => setContar(contar + 1)}>\n  {contar}\n</button>',
    dica: 'Sempre use a função setNomeDoEstado para atualizar o valor. Nunca altere a variável diretamente.'
  },
  {
    id: 6,
    titulo: 'Listas com map()',
    explicacao: 'Para renderizar múltiplos componentes ou elementos a partir de um array, usamos o método .map() do JavaScript.',
    imagemCodigo: 'https://img.shields.io/badge/React-Lists-61DAFB?style=for-the-badge&logo=react',
    textoCodigo: 'const itens = ["React", "Vite", "JS"];\n\n{itens.map((item, index) => (\n  <li key={index}>{item}</li>\n))}',
    dica: 'Sempre use a propriedade "key" em itens de lista para ajudar o React a identificar quais itens mudaram ou foram removidos.'
  }
]);

  // Função para gerenciar o clique no card
  const handleCardClick = (id) => {
    if (expandedCardId === id) {
      setExpandedCardId(null); // Fecha se clicar no mesmo
    } else {
      setExpandedCardId(id); // Abre o clicado
    }
  };

  return (
    <div className="App">
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />
      <Nav isOpen={isOpen} />
      
      <main>
        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Estudo Interativo</h1>
        
        {/* Container dos cards com Flexbox para permitir expansão lateral */}
        <section className="card-gallery">
          {cards.map((card) => (
            <AutoCard 
              key={card.id} 
              {...card} // Passa todas as propriedades do objeto card
              
              // Passa os estados controlados pelo App
              isExpanded={expandedCardId === card.id}
              isBlurred={expandedCardId !== null && expandedCardId !== card.id}
              
              // Passa a função de clique
              onToggleExpand={() => handleCardClick(card.id)}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App