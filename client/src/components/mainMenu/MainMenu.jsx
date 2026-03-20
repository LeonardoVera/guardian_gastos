import Sidebar from "./SideBar"
import "./MainMenu.css"
import Input from "../UI/Input"
import Button from "../UI/Button"

export default function MainMenu() {
    return (
        <main className="main-menu">
            <Sidebar />
            <h1>Bienvenido, nombre_de_usuario</h1>
            <form className="main-menu-form">
                <div className="main-menu-form__inputs">
                    <Input label="Descripcion" type="text"></Input>
                    <Input label="Monto" type="select"></Input>
                    <Input label="Fecha" type="text"></Input>
                    <Input label="Tipo" type="select"></Input>
                </div>
                <div className="main-menu-form__btn">
                    <Button text="Agregar gasto" type="add-gasto"></Button>
                </div>
            </form>
        </main>
    )
}