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
    // 🔵 Fundamentos
    {
      id: 1,
      categoria: 'Fundamentos',
      cor: '🔵',
      titulo: 'O que é React?',
      explicacao: 'React é uma biblioteca JavaScript usada para criar interfaces de usuário de forma dinâmica e composta.',
      imagemCodigo: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
      textoCodigo: 'import React from "react";',
      dica: 'Dica: O React foca na construção de UIs declarativas e utiliza um Virtual DOM para otimizar as atualizações na tela.'
    },
    {
      id: 2,
      categoria: 'Fundamentos',
      cor: '🔵',
      titulo: 'O que é Vite?',
      explicacao: 'Vite é uma ferramenta moderna para criar projetos front-end rapidamente, com inicialização e atualização muito rápidas.',
      imagemCodigo: 'https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E',
      textoCodigo: 'npm run dev',
      dica: 'Dica: O Vite substitui ferramentas mais antigas como o Create React App (CRA) por ser muito mais leve e rápido usando ES Modules nativos.'
    },
    {
      id: 3,
      categoria: 'Fundamentos',
      cor: '🔵',
      titulo: 'Criando um projeto React com Vite',
      explicacao: 'Você pode criar um projeto usando o comando npm create vite@latest, escolhendo React como template.',
      imagemCodigo: 'https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white',
      textoCodigo: 'npm create vite@latest meu-app -- --template react',
      dica: 'Dica: Após criar, não se esqueça de entrar na pasta gerada (`cd meu-app`) e rodar `npm install` para baixar as dependências.'
    },
    {
      id: 4,
      categoria: 'Fundamentos',
      cor: '🔵',
      titulo: 'Estrutura de pastas do projeto React',
      explicacao: 'Um projeto React geralmente possui pastas como src, public e arquivos principais como package.json.',
      imagemCodigo: 'https://img.shields.io/badge/Estrutura-4D4D4D?style=for-the-badge&logo=folder&logoColor=white',
      textoCodigo: '├── public/\n├── src/\n│   ├── App.jsx\n│   └── main.jsx\n└── package.json',
      dica: 'Dica: A pasta `public` guarda arquivos estáticos que não passam pelo processamento do Vite, como o `favicon.ico`.'
    },
    {
      id: 5,
      categoria: 'Fundamentos',
      cor: '🔵',
      titulo: 'Arquivo main.jsx',
      explicacao: 'É o ponto de entrada da aplicação, onde o React é conectado ao HTML.',
      imagemCodigo: 'https://img.shields.io/badge/DOM-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      textoCodigo: 'ReactDOM.createRoot(document.getElementById("root")).render(<App />);',
      dica: 'Dica: É comum envolver o `<App />` com `<React.StrictMode>` no main.jsx para detectar práticas ruins e bugs ocultos durante o desenvolvimento.'
    },
    {
      id: 6,
      categoria: 'Fundamentos',
      cor: '🔵',
      titulo: 'Arquivo App.jsx',
      explicacao: 'É o componente principal da aplicação, onde outros componentes são organizados.',
      imagemCodigo: 'https://img.shields.io/badge/App.jsx-3178C6?style=for-the-badge&logo=react&logoColor=white',
      textoCodigo: 'function App() {\n  return <div>Meu App</div>;\n}\nexport default App;',
      dica: 'Dica: O App.jsx atua como a "raiz" da sua árvore de componentes; todos os outros componentes da interface geralmente ficam dentro dele.'
    },
    // 🟣 JSX
    {
      id: 7,
      categoria: 'JSX',
      cor: '🟣',
      titulo: 'O que é JSX?',
      explicacao: 'JSX é uma sintaxe que permite escrever HTML dentro do JavaScript.',
      imagemCodigo: 'https://img.shields.io/badge/JSX-Syntax-61DAFB?style=for-the-badge&logo=react',
      textoCodigo: 'const elemento = <h1>Olá, mundo!</h1>;',
      dica: 'Dica: Por baixo dos panos, o React converte as tags JSX em chamadas da função `React.createElement()`.'
    },
    {
      id: 8,
      categoria: 'JSX',
      cor: '🟣',
      titulo: 'Diferença entre HTML e JSX',
      explicacao: 'No JSX usamos className em vez de class e precisamos fechar todas as tags.',
      imagemCodigo: 'https://img.shields.io/badge/HTML_vs_JSX-F05032?style=for-the-badge&logo=html5&logoColor=white',
      textoCodigo: '<img src="foto.jpg" alt="Foto" />\n<div className="box"></div>',
      dica: 'Dica: No JSX, atributos com mais de uma palavra usam camelCase, como `tabIndex` ou `onClick`.'
    },
    {
      id: 9,
      categoria: 'JSX',
      cor: '🟣',
      titulo: 'Expressões dentro do JSX {}',
      explicacao: 'As chaves {} permitem inserir JavaScript dentro do JSX.',
      imagemCodigo: 'https://img.shields.io/badge/Expressions-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
      textoCodigo: 'const nome = "Maria";\n<h1>Bem-vinda, {nome}!</h1>;',
      dica: 'Dica: Você não pode usar estruturas de controle como `if/else` soltas dentro das chaves, mas pode usar operadores ternários (`condicao ? a : b`).'
    },
    {
      id: 10,
      categoria: 'JSX',
      cor: '🟣',
      titulo: 'Fragment (<> </>)',
      explicacao: 'Fragments permitem agrupar elementos sem adicionar uma tag extra no HTML.',
      imagemCodigo: 'https://img.shields.io/badge/Fragment-61DAFB?style=for-the-badge&logo=react&logoColor=black',
      textoCodigo: '<>\n  <h1>Título</h1>\n  <p>Texto</p>\n</>',
      dica: 'Dica: O React exige que múltiplos elementos JSX retornados sejam envolvidos por uma única tag pai. O Fragment resolve isso mantendo o HTML limpo.'
    },
    {
      id: 11,
      categoria: 'JSX',
      cor: '🟣',
      titulo: 'Classes CSS no JSX (className)',
      explicacao: 'No JSX usamos className para aplicar estilos CSS aos elementos.',
      imagemCodigo: 'https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white',
      textoCodigo: '<button className="btn-primary">Enviar</button>',
      dica: 'Dica: "class" é uma palavra reservada no JavaScript (usada para criar classes de orientação a objetos), por isso a necessidade do "className".'
    },
    // 🟢 Componentes
    {
      id: 12,
      categoria: 'Componentes',
      cor: '🟢',
      titulo: 'O que são componentes?',
      explicacao: 'Componentes são partes reutilizáveis da interface.',
      imagemCodigo: 'https://img.shields.io/badge/Component-00C7B7?style=for-the-badge&logo=react&logoColor=white',
      textoCodigo: '<Header />\n<Sidebar />\n<Footer />',
      dica: 'Dica: Pense em componentes como peças de Lego. Juntando várias peças pequenas e independentes, você forma uma página inteira.'
    },
    {
      id: 13,
      categoria: 'Componentes',
      cor: '🟢',
      titulo: 'Criando um componente funcional',
      explicacao: 'Um componente funcional é uma função que retorna JSX.',
      imagemCodigo: 'https://img.shields.io/badge/Function-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
      textoCodigo: 'const Botao = () => {\n  return <button>Clique Aqui</button>;\n};',
      dica: 'Dica: Nomes de componentes devem sempre começar com letra maiúscula (PascalCase), para que o React os diferencie das tags HTML normais.'
    },
    {
      id: 14,
      categoria: 'Componentes',
      cor: '🟢',
      titulo: 'Reutilização de componentes',
      explicacao: 'Componentes podem ser reutilizados várias vezes na aplicação.',
      imagemCodigo: 'https://img.shields.io/badge/Reuse-4CAF50?style=for-the-badge&logo=reverbnation&logoColor=white',
      textoCodigo: '<div>\n  <Card produto="Teclado" />\n  <Card produto="Mouse" />\n</div>',
      dica: 'Dica: A reutilização segue o princípio DRY (Don\'t Repeat Yourself), deixando seu código menor e mais fácil de dar manutenção.'
    },
    {
      id: 15,
      categoria: 'Componentes',
      cor: '🟢',
      titulo: 'Organização de componentes em pastas',
      explicacao: 'É comum organizar componentes em pastas separadas para melhor organização.',
      imagemCodigo: 'https://img.shields.io/badge/Folder-Structure-FFA000?style=for-the-badge&logo=files&logoColor=white',
      textoCodigo: 'src/\n └── components/\n     └── Button/\n         ├── index.jsx\n         └── style.css',
      dica: 'Dica: Criar uma pasta para cada componente permite isolar facilmente seu JSX, CSS e possíveis testes.'
    },
    // 🟠 Props
    {
      id: 16,
      categoria: 'Props',
      cor: '🟠',
      titulo: 'O que são props?',
      explicacao: 'Props são dados passados de um componente para outro.',
      imagemCodigo: 'https://img.shields.io/badge/Props-FF9900?style=for-the-badge&logo=react&logoColor=black',
      textoCodigo: 'function Saudacao(props) {\n  return <h1>Olá, {props.nome}!</h1>;\n}',
      dica: 'Dica: As props (propriedades) são de "apenas leitura" (read-only). Um componente filho não deve modificar as props que recebe do pai.'
    },
    {
      id: 17,
      categoria: 'Props',
      cor: '🟠',
      titulo: 'Passando props para componentes',
      explicacao: 'Props são passadas como atributos dentro da tag do componente.',
      imagemCodigo: 'https://img.shields.io/badge/Pass_Props-E34F26?style=for-the-badge&logo=html5&logoColor=white',
      textoCodigo: '<Avatar url="img.png" alt="Foto de perfil" size={50} />',
      dica: 'Dica: Você pode passar qualquer tipo de dado via prop: strings, números (usando chaves), booleanos, arrays, objetos e até funções.'
    },
    {
      id: 18,
      categoria: 'Props',
      cor: '🟠',
      titulo: 'Props com valores padrão',
      explicacao: 'Você pode definir valores padrão caso nenhuma prop seja passada.',
      imagemCodigo: 'https://img.shields.io/badge/Default-8A2BE2?style=for-the-badge&logo=javascript&logoColor=white',
      textoCodigo: 'function Mensagem({ texto = "Sem mensagem" }) {\n  return <p>{texto}</p>;\n}',
      dica: 'Dica: Usar valores padrão nos parâmetros da função desestruturada (ES6) é a abordagem moderna mais recomendada no React atual.'
    },
    {
      id: 19,
      categoria: 'Props',
      cor: '🟠',
      titulo: 'Desestruturação de props',
      explicacao: 'Permite acessar diretamente os valores das props dentro do componente.',
      imagemCodigo: 'https://img.shields.io/badge/Destructuring-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
      textoCodigo: 'const Perfil = ({ nome, idade }) => (\n  <p>{nome} tem {idade} anos</p>\n);',
      dica: 'Dica: A desestruturação torna o código mais limpo, evitando que você tenha que escrever "props." repetidamente no JSX.'
    },
    // 🔴 Estado (State)
    {
      id: 20,
      categoria: 'Estado',
      cor: '🔴',
      titulo: 'O que é useState?',
      explicacao: 'useState é um hook que permite criar e controlar estados no componente.',
      imagemCodigo: 'https://img.shields.io/badge/useState-FF4B4B?style=for-the-badge&logo=react&logoColor=white',
      textoCodigo: 'const [contador, setContador] = useState(0);',
      dica: 'Dica: O useState retorna um array com duas posições: o valor atual do estado e a função que permite atualizá-lo.'
    },
    {
      id: 21,
      categoria: 'Estado',
      cor: '🔴',
      titulo: 'Atualizando estado',
      explicacao: 'O estado é atualizado usando a função fornecida pelo useState.',
      imagemCodigo: 'https://img.shields.io/badge/Update-FF4B4B?style=for-the-badge&logo=react&logoColor=white',
      textoCodigo: 'setContador(contador + 1);\n// Ou baseado no anterior:\nsetContador(prev => prev + 1);',
      dica: 'Dica: Nunca modifique a variável de estado diretamente (ex: contador = 1). Use sempre a função "set" para o React saber que deve re-renderizar a tela.'
    },
    {
      id: 22,
      categoria: 'Estado',
      cor: '🔴',
      titulo: 'Estado em formulários',
      explicacao: 'Estados são usados para controlar inputs de formulários.',
      imagemCodigo: 'https://img.shields.io/badge/Forms-FF4B4B?style=for-the-badge&logo=react&logoColor=white',
      textoCodigo: '<input \n  value={nome} \n  onChange={e => setNome(e.target.value)} \n/>',
      dica: 'Dica: Isso é chamado de "Componente Controlado" (Controlled Component), onde o React é a única fonte da verdade para o valor do input.'
    },
    {
      id: 23,
      categoria: 'Estado',
      cor: '🔴',
      titulo: 'Estado com objetos ou arrays',
      explicacao: 'O estado pode armazenar estruturas mais complexas como objetos e listas.',
      imagemCodigo: 'https://img.shields.io/badge/Complex_State-FF4B4B?style=for-the-badge&logo=json&logoColor=white',
      textoCodigo: 'setUsuario({ ...usuario, idade: 25 });',
      dica: 'Dica: Arrays e objetos no React são tratados de forma imutável. Você deve sempre criar uma cópia da estrutura (usando spread operator `...`) ao atualizar.'
    },
    // 🟡 Renderização
    {
      id: 24,
      categoria: 'Renderização',
      cor: '🟡',
      titulo: 'Renderização condicional',
      explicacao: 'Permite mostrar elementos diferentes com base em condições.',
      imagemCodigo: 'https://img.shields.io/badge/Conditional-F4B400?style=for-the-badge&logo=javascript&logoColor=black',
      textoCodigo: '{isLogged ? <Dashboard /> : <Login />}\n{erro && <p>Houve um erro</p>}',
      dica: 'Dica: Cuidado ao usar `&&` com o número 0. Se a condição for 0, o React vai renderizar "0" na tela. Prefira checar `array.length > 0`.'
    },
    {
      id: 25,
      categoria: 'Renderização',
      cor: '🟡',
      titulo: 'Listas com map()',
      explicacao: 'O método map() é usado para renderizar listas de elementos.',
      imagemCodigo: 'https://img.shields.io/badge/Map-F4B400?style=for-the-badge&logo=javascript&logoColor=black',
      textoCodigo: 'const lista = itens.map(item => (\n  <li key={item.id}>{item.nome}</li>\n));',
      dica: 'Dica: O `map()` é ideal porque retorna um novo array contendo os elementos JSX transformados para cada item do array original.'
    },
    {
      id: 26,
      categoria: 'Renderização',
      cor: '🟡',
      titulo: 'A propriedade key nas listas',
      explicacao: 'A key ajuda o React a identificar elementos únicos na lista.',
      imagemCodigo: 'https://img.shields.io/badge/Keys-F4B400?style=for-the-badge&logo=react&logoColor=black',
      textoCodigo: '<div key={produto.id}>{produto.nome}</div>',
      dica: 'Dica: Evite usar o índice (index) do map como key se a sua lista puder sofrer reordenação, inserção ou exclusão. Use IDs únicos (do banco de dados).'
    },
    // ⚫ Hooks
    {
      id: 27,
      categoria: 'Hooks',
      cor: '⚫',
      titulo: 'O que é useEffect?',
      explicacao: 'useEffect é usado para executar efeitos colaterais no componente.',
      imagemCodigo: 'https://img.shields.io/badge/useEffect-000000?style=for-the-badge&logo=react&logoColor=white',
      textoCodigo: 'useEffect(() => {\n  document.title = "Página Carregada";\n}, []);',
      dica: 'Dica: Efeitos colaterais incluem coisas externas ao fluxo da UI, como chamadas de API, timers (setTimeout), ou manipulação direta do DOM.'
    },
    {
      id: 28,
      categoria: 'Hooks',
      cor: '⚫',
      titulo: 'Ciclo de vida básico no React',
      explicacao: 'Refere-se aos momentos de criação, atualização e remoção do componente.',
      imagemCodigo: 'https://img.shields.io/badge/Lifecycle-000000?style=for-the-badge&logo=react&logoColor=white',
      textoCodigo: 'useEffect(() => {\n  // Montagem\n  return () => {\n    // Desmontagem (Cleanup)\n  };\n}, [deps]);',
      dica: 'Dica: A função retornada dentro do useEffect é a função de limpeza (cleanup), útil para remover event listeners ou cancelar requisições.'
    },
    {
      id: 29,
      categoria: 'Hooks',
      cor: '⚫',
      titulo: 'Dependências do useEffect',
      explicacao: 'Define quando o useEffect deve ser executado.',
      imagemCodigo: 'https://img.shields.io/badge/Dependencies-000000?style=for-the-badge&logo=react&logoColor=white',
      textoCodigo: '// Executa apenas quando "id" muda\nuseEffect(() => {\n  buscarDados(id);\n}, [id]);',
      dica: 'Dica: Se o array de dependências estiver vazio `[]`, o efeito roda apenas 1 vez ao montar. Se não tiver array, roda após toda e qualquer renderização.'
    },
    // ⚪ Extras
    {
      id: 30,
      categoria: 'Extras',
      cor: '⚪',
      titulo: 'Comunicação entre componentes (pai → filho)',
      explicacao: 'Dados são passados do componente pai para o filho através de props.',
      imagemCodigo: 'https://img.shields.io/badge/Data_Flow-E0E0E0?style=for-the-badge&logo=react&logoColor=black',
      textoCodigo: 'const Pai = () => {\n  const lidarComAcao = (dado) => console.log(dado);\n  return <Filho onAcao={lidarComAcao} />;\n};',
      dica: 'Dica: Para o filho enviar informações de volta pro pai (filho → pai), o pai passa uma função via prop, e o filho executa essa função com o dado.'
    }
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