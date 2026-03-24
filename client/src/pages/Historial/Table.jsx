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
                        <th>Descripcion</th>
                        <th>Monto</th>
                        <th>Fecha</th>
                        <th>Categoria</th>
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