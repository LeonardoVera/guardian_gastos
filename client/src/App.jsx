import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LoginPage from './pages/Login/LoginPage'
import MainMenuPage from './pages/MainMenu/MainMenuPage'
import {BrowserRouter} from 'react-router'

function App() {

  return (
    <>
      <LoginPage />
    </>
  );
}

export default App
