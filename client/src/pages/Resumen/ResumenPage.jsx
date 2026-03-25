import { useEffect, useState } from 'react';
import RadixChart from '../../components/resumen/RadixChart';
import SideBar from '../../components/mainMenu/SideBar';
import './ResumenPage.css';

export default function ResumenPage() {
    const [gastos, setGastos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // rescatamos el usuario del localStorage
                const user = JSON.parse(localStorage.getItem('user'));
                if (!user || !user.id) {
                    console.error('Usuario no autenticado');
                    return;
                }

                // hacemos la peticion al backend para obtener los gastos del usuario
                const response = await fetch(
                    `${import.meta.env.VITE_LOCAL_HOST}/gastos/${user.id}`
                );
                if (!response.ok) throw new Error('Error al obtener gastos');
                // convertimos la respuesta de json a objeto js
                const data = await response.json();
                // guardamos los gastos en el estado
                setGastos(data);
            } catch (error) {
                console.error("Error cargando gastos:", error);
            }
        };
        fetchData();
    }, []);

    const totalGastado = gastos.reduce((total, gasto) => total + parseFloat(gasto.monto), 0);

    const porcentajesPorCategoria = gastos.reduce((acc, gasto) => {
        const cat = gasto.categoria.charAt(0).toUpperCase() + gasto.categoria.slice(1).toLowerCase();
        if (!acc[cat]) {
            acc[cat] = 0;
        }
        acc[cat] += parseFloat(gasto.monto);
        return acc;
    }, {});

    // Convertir a array y calcular porcentajes
    const porcentajes = Object.entries(porcentajesPorCategoria).map(([categoria, monto]) => ({
        categoria,
        monto,
        porcentaje: totalGastado > 0 ? ((monto / totalGastado) * 100).toFixed(2) : 0
    })).sort((a, b) => b.monto - a.monto);

    return (
        <>
            <SideBar />
            <div className="container">
                <h1 className="resumen-title">Resumen General</h1>
                <div className="resumen-card-container">
                    <div className="resumen-card">
                        <RadixChart data={gastos} />
                    </div>
                    <div className="resumen-porcentajes">
                        <h2>Distribución de gastos</h2>
                        <div className="porcentajes-list">
                            {porcentajes.length > 0 ? (
                                porcentajes.map((item, index) => (
                                    <div key={index} className="porcentaje-item">
                                        <div className="porcentaje-info">
                                            <span className="categoria-nombre">{item.categoria}</span>
                                            <span className="categoria-monto">S./{item.monto.toFixed(2)}</span>
                                        </div>
                                        <div className="porcentaje-bar">
                                            <div
                                                className="porcentaje-progress"
                                                style={{ width: `${item.porcentaje}%` }}
                                            ></div>
                                        </div>
                                        <span className="porcentaje-valor">{item.porcentaje}%</span>
                                    </div>
                                ))
                            ) : (
                                <p>No hay gastos registrados</p>
                            )}
                        </div>
                        <p className="total-gastado">Total: S./{totalGastado.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </>
    );
}