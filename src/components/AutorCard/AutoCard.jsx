//card de estudo para o autor, onde ele pode colocar um titulo, uma explicação, um exemplo de código e uma dica para os leitores. O card tem um estilo diferente dependendo se o exemplo de código foi fornecido ou não.

import './AutoCard.css'

function AutoCard({titulo,explicacao,exemploC,dica}){
    const statusTexto = exemploC ? 'exemploC' : 'offline'

    return (
        <div className={`auto-card ${statusTexto}`}>
            <h2>{titulo}</h2>
            <p>{explicacao}</p>
            {exemploC && <p><strong>Exemplo de Código:</strong> {exemploC}</p>}
            {dica && <p><em>Dica:</em> {dica}</p>}
        </div>
    )
}

export default AutoCard