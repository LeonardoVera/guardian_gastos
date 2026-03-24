import Table from '../../components/historial/Table';
import SideBar from '../../components/mainMenu/SideBar';

import './HistorialPage.css';
function HistorialPage() {
    return (
        <>
            <SideBar />

            <div className="container">
                <h1>Historial de gastos</h1>
                <Table />
            </div>
        </>
    )
}

export default HistorialPage;