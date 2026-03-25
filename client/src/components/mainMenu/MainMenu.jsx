import Sidebar from "./SideBar"
import "./MainMenu.css"
import Input from "../UI/Input"
import Button from "../UI/Button"
import { useState } from "react"
import { useEffect } from "react"
import { useAddGasto } from "../../hooks/useAddGasto"

export default function MainMenu() {

    const categorias = ["Alimentacion", "Transporte", "Entretenimiento", "Salud", "Vivienda", "Otros"];
    const [user, setUser] = useState("");
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleAddGasto = (e) => {
        e.preventDefault();
        let descripcion = e.target.descripcion.value;
        let monto = e.target.monto.value;
        let fecha = e.target.fecha.value;
        let categoria = e.target.categoria.value;

        // customHook para realizar una peticion POST de agregar gasto
        useAddGasto(user, descripcion, monto, fecha, categoria);
        e.target.reset();
    }

    return (
        <main className="main-menu">
            <Sidebar />
            <h1>Bienvenido, <span className="h1-username">{user.username}</span></h1>
            <form className="main-menu-form" onSubmit ={handleAddGasto}>
                <div className="main-menu-form__inputs">
                    <Input id="descripcion" label="Descripcion" type="text"></Input>
                    <Input id="monto" label="Monto" type="number"></Input>
                    <Input id="fecha" label="Fecha" type="date"></Input>
                    <Input id="categoria" label="Categoria" type="select" options={categorias}></Input>
                </div>
                <div className="main-menu-form__btn">
                    <Button text="Agregar gasto" type="add-gasto"></Button>
                </div>
            </form>
        </main>
    )
}