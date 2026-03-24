import { useState } from 'react';
import './AutoCard.css';

function AutoCard({ categoria, cor, titulo, explicacao, imagemCodigo, textoCodigo, dica, isExpanded, onToggleExpand, isBlurred }) {
    const [mostrandoTexto, setMostrandoTexto] = useState(false);

    const handleTrocarConteudo = (e) => {
        e.stopPropagation(); 
        setMostrandoTexto(!mostrandoTexto);
    };

    // Gera o nome da classe baseado na categoria (ex: cat-fundamentos)
    const categoriaClass = `cat-${categoria.toLowerCase().replace(/\s/g, '-')}`;
    const cardClasses = `auto-card ${categoriaClass} ${isExpanded ? 'expanded' : 'collapsed'} ${isBlurred ? 'blurred' : ''}`;

    return (
        <div className={cardClasses} onClick={onToggleExpand}>
            
            {/* --- SEÇÃO DA ESQUERDA (Capa Colorida) --- */}
            <div className="card-capa-section">
                <div className="categoria-container">
                    <span className="badge-categoria">
                        <span className="dot">{cor}</span>
                        {categoria}
                    </span>
                </div>

                <div className="capa-principal">
                    <h2>{titulo}</h2>
                    <p className="resumo-card">Toque para explorar fundamentos e exemplos.</p>
                </div>

                {!isExpanded && <span className="to-open">Ver detalhes →</span>}
            </div>

            {/* --- SEÇÃO DA DIREITA (Detalhes - fundo branco para leitura) --- */}
            {isExpanded && (
                <div className="card-detalhe-section" onClick={(e) => e.stopPropagation()}>
                    <div className="conteudo-textual">
                        <h3 className="detalhe-titulo">{titulo}</h3>
                        <p className="explicacao">{explicacao}</p>
                    </div>
                    
                    <div className="codigo-container">
                        <div className="codigo-header">
                            <strong>Snippet de Código:</strong>
                            <button onClick={handleTrocarConteudo} className="btn-alternar">
                                {mostrandoTexto ? 'Ver Badge' : 'Ler/Copiar Texto'}
                            </button>
                        </div>

                        <div className="codigo-body">
                            {mostrandoTexto ? (
                                <div className="pre-wrapper">
                                    <pre><code>{textoCodigo}</code></pre>
                                </div>
                            ) : (
                                <div className="badge-preview">
                                    <img src={imagemCodigo} alt="Badge de Código" />
                                </div>
                            )}
                        </div>
                    </div>
                    
                    {dica && (
                        <div className="dica-block">
                            <p><strong>💡 Dica Pro:</strong> <em>{dica}</em></p>
                        </div>
                    )}
                    
                    <button className="btn-fechar" onClick={onToggleExpand}>Fechar</button>
                </div>
            )}
        </div>
    );
}

export default AutoCard;