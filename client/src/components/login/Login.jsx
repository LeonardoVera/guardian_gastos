import bankIcon from "../../assets/icons/icon-bank.svg";
import "./Login.css";
import Input from "../UI/Input";
import Button from "../UI/Button";

export default function Login() {
  return (
    <>
      <div className="left-view">
        <header>
          <img src={bankIcon} alt="Bank Icon" className="bank-icon" />
          <h1>Guardian de gastos</h1>
        </header>
        <div className="form-title">
          <h1>Inicia sesion</h1>
          <form action="submit" className="login-form">
            <Input
              id="username"
              label="Usuario"
              type="text"
              placeholder="Usuario"
            />
            <Input
              id="password"
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
            />
            <Button text="Iniciar sesion" type="login"></Button>
          </form>
        </div>
      </div>
      <div className="right-view">
        
      </div>
    </>
  );
}
