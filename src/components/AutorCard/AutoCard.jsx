import './AutoCard.css'

function AutoCard({nome,bio,online,imagem}){
    const statusTexto = online ? 'online' : 'offline'

    return (
    <section className="auto-card">
        <img src={imagem} alt={`Avatar de ${nome}`} className="auto-imagem" />
        <h2>
            {nome} <span className={`status-dot ${online ? 'online' : 'offline'}`}></span>
        </h2>
        <p>{bio}</p>
        <small>{statusTexto}</small>
    </section>
    )
}

export default AutoCard