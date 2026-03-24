// App.jsx
import { useState } from 'react'
import './App.css'

// Componentes de Layout
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

// Componente de Conteúdo
import AutoCard from './components/AutorCard/AutoCard'

function App() {
  // Estado do Menu
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  // ESTADO CHAVE: Armazena o ID do card que está expandido.
  const [expandedCardId, setExpandedCardId] = useState(null);

  // Dados dos Cards (Estado inicializado com o array de 30 perguntas)
 const [cards] = useState([
    //  FUNDAMENTOS
    { id: 1, categoria: 'Fundamentos', titulo: 'O que é React?', explicacao: 'React é uma biblioteca JavaScript usada para criar interfaces de usuário de forma dinâmica e composta.', imagemCodigo: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB', textoCodigo: 'import React from "react";', dica: 'Dica: O React foca na construção de UIs declarativas.' },
    { id: 2, categoria: 'Fundamentos', titulo: 'O que é Vite?', explicacao: 'Vite é uma ferramenta moderna para criar projetos front-end rapidamente.', imagemCodigo: 'https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E', textoCodigo: 'npm run dev', dica: 'Dica: É muito mais rápido que o antigo Create React App.' },
    { id: 3, categoria: 'Fundamentos', titulo: 'Criando um projeto', explicacao: 'Use o comando npm create vite@latest para iniciar.', imagemCodigo: 'https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white', textoCodigo: 'npm create vite@latest', dica: 'Dica: Escolha o template React após o comando.' },
    { id: 4, categoria: 'Fundamentos', titulo: 'Estrutura de pastas', explicacao: 'Pastas como src (código) e public (estáticos).', imagemCodigo: 'https://img.shields.io/badge/Estrutura-4D4D4D?style=for-the-badge&logo=folder&logoColor=white', textoCodigo: 'src/main.jsx', dica: 'Dica: Quase todo seu trabalho será dentro da pasta src.' },
    { id: 5, categoria: 'Fundamentos', titulo: 'Arquivo main.jsx', explicacao: 'Ponto de entrada onde o React se conecta ao HTML.', imagemCodigo: 'https://img.shields.io/badge/DOM-E34F26?style=for-the-badge&logo=html5&logoColor=white', textoCodigo: 'ReactDOM.createRoot(...)', dica: 'Dica: É aqui que o elemento "root" é renderizado.' },
    { id: 6, categoria: 'Fundamentos', titulo: 'Arquivo App.jsx', explicacao: 'Componente principal da aplicação.', imagemCodigo: 'https://img.shields.io/badge/App.jsx-3178C6?style=for-the-badge&logo=react&logoColor=white', textoCodigo: 'export default function App()', dica: 'Dica: É o "pai" de todos os outros componentes.' },

    //  JSX
    { id: 7, categoria: 'JSX', titulo: 'O que é JSX?', explicacao: 'Sintaxe que mistura HTML com JavaScript.', imagemCodigo: 'https://img.shields.io/badge/JSX-Syntax-61DAFB?style=for-the-badge&logo=react', textoCodigo: 'const el = <h1>Olá</h1>;', dica: 'Dica: JSX não é uma string, é JavaScript real.' },
    { id: 8, categoria: 'JSX', titulo: 'HTML vs JSX', explicacao: 'Diferenças como className e tags fechadas.', imagemCodigo: 'https://img.shields.io/badge/HTML_vs_JSX-F05032?style=for-the-badge&logo=html5&logoColor=white', textoCodigo: '<div className="container" />', dica: 'Dica: "class" vira "className" no JSX.' },
    { id: 9, categoria: 'JSX', titulo: 'Expressões {}', explicacao: 'Uso de JS dentro do HTML com chaves.', imagemCodigo: 'https://img.shields.io/badge/Expressions-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black', textoCodigo: '<h1>{2 + 2}</h1>', dica: 'Dica: Qualquer lógica JS válida pode ir aqui.' },
    { id: 10, categoria: 'JSX', titulo: 'Fragments', explicacao: 'Agrupa elementos sem criar uma div extra.', imagemCodigo: 'https://img.shields.io/badge/Fragment-61DAFB?style=for-the-badge&logo=react&logoColor=black', textoCodigo: '<> ... </>', dica: 'Dica: Evita poluir o DOM com tags desnecessárias.' },
    { id: 11, categoria: 'JSX', titulo: 'className', explicacao: 'Como aplicar estilos CSS no JSX.', imagemCodigo: 'https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white', textoCodigo: '<p className="texto">', dica: 'Dica: O CSS continua sendo escrito em arquivos .css.' },

    //  COMPONENTS
    { id: 12, categoria: 'Components', titulo: 'O que são?', explicacao: 'Blocos de construção reutilizáveis da UI.', imagemCodigo: 'https://img.shields.io/badge/Component-00C7B7?style=for-the-badge&logo=react&logoColor=white', textoCodigo: '<Botao />', dica: 'Dica: Componentes devem ser independentes.' },
    { id: 13, categoria: 'Components', titulo: 'Componente Funcional', explicacao: 'Uma função JS que retorna JSX.', imagemCodigo: 'https://img.shields.io/badge/Function-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black', textoCodigo: 'function Card() { return ... }', dica: 'Dica: Comece sempre com letra Maiúscula.' },
    { id: 14, categoria: 'Components', titulo: 'Reutilização', explicacao: 'Usar o mesmo código com dados diferentes.', imagemCodigo: 'https://img.shields.io/badge/Reuse-4CAF50?style=for-the-badge&logo=reverbnation&logoColor=white', textoCodigo: '<Card /><Card />', dica: 'Dica: Facilita muito a manutenção do código.' },
    { id: 15, categoria: 'Components', titulo: 'Organização', explicacao: 'Manter componentes em pastas próprias.', imagemCodigo: 'https://img.shields.io/badge/Folder-FFA000?style=for-the-badge&logo=files&logoColor=white', textoCodigo: '/components/Card/', dica: 'Dica: ajuda a escalar projetos grandes.' },

    //  PROPS
    { id: 16, categoria: 'Props', titulo: 'O que são Props?', explicacao: 'Propriedades passadas para componentes.', imagemCodigo: 'https://img.shields.io/badge/Props-FF9900?style=for-the-badge&logo=react&logoColor=black', textoCodigo: 'function(props)', dica: 'Dica: Props são como argumentos de uma função.' },
    { id: 17, categoria: 'Props', titulo: 'Passando dados', explicacao: 'Enviar informações do Pai para o Filho.', imagemCodigo: 'https://img.shields.io/badge/Pass_Props-E34F26?style=for-the-badge&logo=html5&logoColor=white', textoCodigo: '<Card nome="Vini" />', dica: 'Dica: O fluxo de dados no React é unidirecional.' },
    { id: 18, categoria: 'Props', titulo: 'Valores Padrão', explicacao: 'Definir um fallback caso a prop falte.', imagemCodigo: 'https://img.shields.io/badge/Default-8A2BE2?style=for-the-badge&logo=javascript&logoColor=white', textoCodigo: '({ cor = "azul" })', dica: 'Dica: Evita erros de renderização.' },
    { id: 19, categoria: 'Props', titulo: 'Desestruturação', explicacao: 'Acessar props de forma direta.', imagemCodigo: 'https://img.shields.io/badge/Destructuring-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black', textoCodigo: 'const { titulo } = props;', dica: 'Dica: Deixa o código muito mais limpo.' },

    //  STATE
    { id: 20, categoria: 'State', titulo: 'useState', explicacao: 'Hook para gerenciar memória do componente.', imagemCodigo: 'https://img.shields.io/badge/useState-FF4B4B?style=for-the-badge&logo=react&logoColor=white', textoCodigo: 'const [val, setVal] = useState()', dica: 'Dica: Quando o estado muda, a tela atualiza.' },
    { id: 21, categoria: 'State', titulo: 'Atualizando Estado', explicacao: 'Mudar valores usando a função set.', imagemCodigo: 'https://img.shields.io/badge/Update-FF4B4B?style=for-the-badge&logo=react&logoColor=white', textoCodigo: 'setContador(c + 1)', dica: 'Dica: Nunca mude o estado diretamente.' },
    { id: 22, categoria: 'State', titulo: 'Formulários', explicacao: 'Inputs controlados pelo estado.', imagemCodigo: 'https://img.shields.io/badge/Forms-FF4B4B?style=for-the-badge&logo=react&logoColor=white', textoCodigo: 'onChange={e => set(e.target.value)}', dica: 'Dica: O React vira o dono do valor do input.' },
    { id: 23, categoria: 'State', titulo: 'Objetos e Arrays', explicacao: 'Estados complexos requerem cópias.', imagemCodigo: 'https://img.shields.io/badge/Complex_State-FF4B4B?style=for-the-badge&logo=json&logoColor=white', textoCodigo: 'setObj({...obj, id: 1})', dica: 'Dica: Sempre use o spread operator (...).' },

    //  RENDERIZAÇÃO
    { id: 24, categoria: 'Renderização', titulo: 'Condicional', explicacao: 'Mostrar coisas baseadas em lógica.', imagemCodigo: 'https://img.shields.io/badge/Conditional-F4B400?style=for-the-badge&logo=javascript&logoColor=black', textoCodigo: '{logado && <Logout />}', dica: 'Dica: Use ternários ou operador &&.' },
    { id: 25, categoria: 'Renderização', titulo: 'Listas map()', explicacao: 'Transformar arrays em elementos JSX.', imagemCodigo: 'https://img.shields.io/badge/Map-F4B400?style=for-the-badge&logo=javascript&logoColor=black', textoCodigo: 'lista.map(item => ...)', dica: 'Dica: É a forma padrão de exibir listas no React.' },
    { id: 26, categoria: 'Renderização', titulo: 'Propriedade Key', explicacao: 'Identificador único para itens da lista.', imagemCodigo: 'https://img.shields.io/badge/Keys-F4B400?style=for-the-badge&logo=react&logoColor=black', textoCodigo: 'key={item.id}', dica: 'Dica: Ajuda o React a ser mais rápido.' },

    //  HOOKS
    { id: 27, categoria: 'Hooks', titulo: 'useEffect', explicacao: 'Lida com efeitos como chamadas de API.', imagemCodigo: 'https://img.shields.io/badge/useEffect-000000?style=for-the-badge&logo=react&logoColor=white', textoCodigo: 'useEffect(() => {}, [])', dica: 'Dica: Executa após a renderização.' },
    { id: 28, categoria: 'Hooks', titulo: 'Ciclo de Vida', explicacao: 'Nascimento, atualização e morte do componente.', imagemCodigo: 'https://img.shields.io/badge/Lifecycle-000000?style=for-the-badge&logo=react&logoColor=white', textoCodigo: 'return () => cleanup()', dica: 'Dica: A função de retorno serve para limpeza.' },
    { id: 29, categoria: 'Hooks', titulo: 'Dependências', explicacao: 'Controla quando o useEffect deve rodar.', imagemCodigo: 'https://img.shields.io/badge/Dependencies-000000?style=for-the-badge&logo=react&logoColor=white', textoCodigo: '}, [estado])', dica: 'Dica: Vazio rodará apenas uma vez.' },

    //  CONCEITOS EXTRAS
    { id: 30, categoria: 'Conceitos extras', titulo: 'Comunicação', explicacao: 'Pai manda dados, Filho executa funções.', imagemCodigo: 'https://img.shields.io/badge/Data_Flow-E0E0E0?style=for-the-badge&logo=react&logoColor=black', textoCodigo: 'onAcao={lidarComAcao}', dica: 'Dica: É assim que o filho "fala" com o pai.' }
  ]);

  // Função para gerenciar o clique no card
  const handleCardClick = (id) => {
    if (expandedCardId === id) {
      setExpandedCardId(null);
    } else {
      setExpandedCardId(id);
    }
  };

  return (
    <div className="App">
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />
      <Nav isOpen={isOpen} />
      
      <main>
        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Estudo Interativo</h1>
        
        <section className="card-gallery">
          {cards.map((card) => (
            <AutoCard 
              key={card.id} 
              {...card} 
              isExpanded={expandedCardId === card.id}
              isBlurred={expandedCardId !== null && expandedCardId !== card.id}
              onToggleExpand={() => handleCardClick(card.id)}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App;