import Input from "../UI/Input";
import Button from "../UI/Button";
import Sidebar from "./SideBar";
import "./MainContent.css";

export default function MainContent() {
  const options = [
    { id: 1, label: "Descripcion", tipo: "text" },
    { id: 2, label: "Monto", tipo: "number" },
    { id: 3, label: "Fecha", tipo: "date" },
    { id: 4, label: "Categoria", tipo: "select" },
  ];

  const categories = [
    "vivienda y servicios",
    "alimentacion",
    "transporte",
    "salud",
    "educacion",
    "entretenimiento",
    "varios",
  ];
  return (
    <div className="main-content-wrapper">
      <Sidebar />
      <div className="main-content">
        <h1>Bienvenido, !</h1>
        <div className="inputs-button">
          <div className="inputs">
            {options.map((option) => (
              <Input
                key={option.id}
                id={option.id}
                label={option.label}
                type={option.tipo}
                options={option.tipo === "select" ? categories : undefined}
              />
            ))}
          </div>
          <Button text="Guardar" type="login" />
        </div>
      </div>
    </div>
  );
}
