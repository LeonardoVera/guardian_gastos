import './App.css'
import LoginPage from './pages/Login/LoginPage'
import MainMenuPage from './pages/MainMenu/MainMenuPage'
import HistorialPage from './pages/Historial/HistorialPage'
import ResumenPage from './pages/Resumen/ResumenPage'
import {BrowserRouter, Routes, Route} from 'react-router'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainMenuPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/historial" element={<HistorialPage />} />
        <Route path="/resumen" element={<ResumenPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
