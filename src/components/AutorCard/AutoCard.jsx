// AutoCard.jsx
import { useState } from 'react';
import './AutoCard.css';

function AutoCard({ titulo, explicacao, imagemCodigo, textoCodigo, dica, isExpanded, onToggleExpand, isBlurred }) {
    // Estado interno para controlar se mostra imagem ou texto do código
    const [mostrandoTexto, setMostrandoTexto] = useState(false);

    // Impede que o clique no botão de trocar feche o card inteiro
    const handleTrocarConteudo = (e) => {
        e.stopPropagation(); 
        setMostrandoTexto(!mostrandoTexto);
    };

    // Determina as classes CSS baseadas no estado
    const cardClasses = `auto-card ${isExpanded ? 'expanded' : 'collapsed'} ${isBlurred ? 'blurred' : ''}`;

    return (
        <div className={cardClasses} onClick={onToggleExpand}>
            {/* --- CONTEÚDO INICIAL (SEMPRE VISÍVEL) --- */}
            <div className="card-initial-content">
                <h2>{titulo}</h2>
                <img src={imagemCodigo} alt={`Exemplo de código para ${titulo}`} className="capa-imagem" />
            </div>

            {/* --- CONTEÚDO EXPANDIDO (VISÍVEL APENAS QUANDO EXPANDIDO) --- */}
            {isExpanded && (
                <div className="card-expanded-content" onClick={(e) => e.stopPropagation()}>
                    <p className="explicacao">{explicacao}</p>
                    
                    <div className="codigo-container">
                        <div className="codigo-header">
                            <strong>Exemplo de Códigos:</strong>
                            <button onClick={handleTrocarConteudo} className="btn-trocar">
                                {mostrandoTexto ? 'voltar' : 'Ler/Copiar Texto'}
                            </button>
                        </div>

                        <div className="codigo-body">
                            {mostrandoTexto ? (
                                <pre><code>{textoCodigo}</code></pre>
                            ) : (
                                <img src={imagemCodigo} alt="Código Ampliado" className="imagem-codigo-ampliada" />
                            )}
                        </div>
                    </div>
                    
                    {dica && (
                        <p className="dica">
                            <strong>Dica:</strong> <em>{dica}</em>
                        </p>
                    )}
                    
                    {/* Botão opcional para fechar no rodapé */}
                    <button className="btn-fechar" onClick={onToggleExpand}>Fechar</button>
                </div>
            )}
        </div>
    );
}

export default AutoCard;