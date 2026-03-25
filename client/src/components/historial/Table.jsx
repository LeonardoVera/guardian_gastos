import iconDescription from '../../assets/icons/icon-description.svg';
import iconAmount from '../../assets/icons/icon-amount.svg';
import iconDate from '../../assets/icons/icon-date.svg';
import iconCategory from '../../assets/icons/icon-category.svg';
import './Table.css';
import SortMenu from './SortMenu';

import { useState, useEffect } from 'react';

function Table() {
    const [gastos, setGastos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortType, setSortType] = useState(null);
    const [showSortMenu, setShowSortMenu] = useState(false);

    useEffect(() => {
        const fetchGastos = async () => {
            try {
                // obtenemos el usuario del localStorage
                // convertimos el usuario a un objeto js
                const user = JSON.parse(localStorage.getItem('user'));

                if (!user || !user.id) {
                    setError('Usuario no autenticado');
                    setLoading(false);
                    return;
                }

                // peticion a la API para obtener los gastos del usuario
                const response = await fetch(
                    `${import.meta.env.VITE_LOCAL_HOST}/gastos/${user.id}`
                );

                if (!response.ok) {
                    throw new Error('Error al obtener los gastos');
                }

                const data = await response.json();
                setGastos(data);
            } catch (err) {
                setError(err.message);
                console.error('Error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchGastos();
    }, []);

    const sortedGastos = [...gastos].sort((a, b) => {
        if (sortType === 'fecha-reciente') {
            return new Date(b.fecha) - new Date(a.fecha);
        } else if (sortType === 'fecha-antigua') {
            return new Date(a.fecha) - new Date(b.fecha);
        } else if (sortType === 'monto-mayor') {
            return b.monto - a.monto;
        } else if (sortType === 'monto-menor') {
            return a.monto - b.monto;
        }
        return 0;
    });

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <div className="sort-button-container">
                <button 
                    className="sort-button-main"
                    onClick={() => setShowSortMenu(true)}
                >
                    Ordenar por ↓
                </button>
            </div>

            {showSortMenu && (
                <SortMenu 
                    onSort={(type) => {
                        setSortType(type);
                        setShowSortMenu(false);
                    }}
                    onClose={() => setShowSortMenu(false)}
                />
            )}

            <table>
                <thead>
                    <tr>
                        <th>
                            <div className="table-header">
                                <img src={iconDescription} alt="Descripcion" />
                                <p>Descripcion</p>
                            </div>
                        </th>
                        <th>
                            <div className="table-header">
                                <img src={iconAmount} alt="Monto" />
                                <p>Monto</p>
                            </div>
                        </th>
                        <th>
                            <div className="table-header">
                                <img src={iconDate} alt="Fecha" />
                                <p>Fecha</p>
                            </div>
                        </th>
                        <th>
                            <div className="table-header">
                                <img src={iconCategory} alt="Categoria" />
                                <p>Categoria</p>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedGastos.length > 0 ? (
                        sortedGastos.map((gasto) => (
                            <tr key={gasto.id}>
                                <td>{gasto.descripcion}</td>
                                <td>S./ {gasto.monto}</td>
                                <td>{gasto.fecha.split('-').reverse().join('/')}</td>
                                <td>{gasto.categoria}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No hay gastos registrados</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table;