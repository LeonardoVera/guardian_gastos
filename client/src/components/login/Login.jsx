import bankIcon from "../../assets/icons/icon-bank.svg";
import "./Login.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useNavigate } from "react-router";
import { useState } from "react";


export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // peticion post al servidor de login
    fetch(import.meta.env.VITE_LOCAL_HOST + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Manejar la respuesta del servidor
        console.log(data);
        navigate("/main");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <>
      <section className="form-section">
        <header className="form-header">
          <img src={bankIcon} alt="Bank Icon" className="bank-icon" />
          <h1 className="form-header__title">Guardian de gastos</h1>
        </header>
        <h1 className="form-section__title">Inicia sesion</h1>
        <form action="submit" className="login-form" onSubmit={handleLogin}>
          <Input
            id="username"
            label="Usuario"
            type="text"
            placeholder="Usuario"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            id="password"
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button text="Iniciar sesion" type="login"></Button>
        </form>
      </section>
      <section className="welcome-section">
        <div className="content-app">
          <h1>Bienvenido</h1>
          <p>Esto es una pagina diseñada con el propósito de <span>ayudarte a gestionar tus gastos de manera eficiente</span></p>
        </div>
      </section>
    </>
  );
}
