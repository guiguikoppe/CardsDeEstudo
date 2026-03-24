import './Header.css'

function Header({ isOpen, toggleMenu }) {
  return (
    <header className="header">
      <h1>CARDS DE ESTUDO</h1>
      <button
        className={'menu-toggle ' + (isOpen ? 'active' : '')}
        onClick={toggleMenu}
        aria-label="Abrir ou fechar menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  )
}

export default Header