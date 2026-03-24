import './Nav.css'

function Nav({ isOpen }) {
  return (
    <nav className={'side-menu ' + (isOpen ? 'open' : '')}>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  )
}

export default Nav