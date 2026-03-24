import Sidebar from "./SideBar"
import "./MainMenu.css"
import Input from "../UI/Input"
import Button from "../UI/Button"
import { useState } from "react"
import { useEffect } from "react"

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

        fetch(import.meta.env.VITE_LOCAL_HOST + "/addGasto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                usuario_id: localStorage.getItem("user") ?
                    JSON.parse(localStorage.getItem("user")).id :
                    null,
                descripcion: e.target.descripcion.value,
                monto: e.target.monto.value,
                fecha: e.target.fecha.value,
                categoria: e.target.categoria.value
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log("Gasto agregado:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            })
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