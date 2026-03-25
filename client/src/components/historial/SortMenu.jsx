import './SortMenu.css';

function SortMenu({ onSort, onClose }) {
    return (
        <div className="sort-overlay" onClick={onClose}>
            <div className="sort-menu" onClick={(e) => e.stopPropagation()}>
                <h2>Ordenar por</h2>
                
                <div className="sort-section">
                    <h3>Fecha</h3>
                    <div className="sort-buttons-group">
                        <button 
                            className="sort-button"
                            onClick={() => onSort('fecha-reciente')}
                        >
                            Recientes primero
                        </button>
                        <button 
                            className="sort-button"
                            onClick={() => onSort('fecha-antigua')}
                        >
                            Últimos primero
                        </button>
                    </div>
                </div>

                <div className="sort-section">
                    <h3>Monto</h3>
                    <div className="sort-buttons-group">
                        <button 
                            className="sort-button"
                            onClick={() => onSort('monto-menor')}
                        >
                            De menor a mayor
                        </button>
                        <button 
                            className="sort-button"
                            onClick={() => onSort('monto-mayor')}
                        >
                            De mayor a menor
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SortMenu;
