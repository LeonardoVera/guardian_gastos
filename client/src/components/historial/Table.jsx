import iconDescription from '../../assets/icons/icon-description.svg';
import iconAmount from '../../assets/icons/icon-amount.svg';
import iconDate from '../../assets/icons/icon-date.svg';
import iconCategory from '../../assets/icons/icon-category.svg';
import './Table.css';


import { useState, useEffect } from 'react';

function Table() {
    const [gastos, setGastos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
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
                    {gastos.length > 0 ? (
                        gastos.map((gasto) => (
                            <tr key={gasto.id}>
                                <td>{gasto.descripcion}</td>
                                <td>{gasto.monto}</td>
                                <td>{new Date(gasto.fecha).toLocaleDateString()}</td>
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