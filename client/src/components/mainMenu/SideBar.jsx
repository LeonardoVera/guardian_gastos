import { useState } from "react";
import { Link } from "react-router";
import iconBank from "../../assets/icons/icon-bank.svg";
import iconHome from "../../assets/icons/icon-home.svg";
import iconHistory from "../../assets/icons/icon-history.svg";
import iconResumen from "../../assets/icons/icon-resumen.svg";
import iconLogout from "../../assets/icons/icon-logout.svg";
import "./SideBar.css";

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 1, icon: iconHome, label: "Menu principal", endpoint: "/main" },
    { id: 2, icon: iconHistory, label: "Historial de gastos", endpoint: "/historial"},
    { id: 3, icon: iconResumen, label: "Resumen de gastos", endpoint: "/summary"},
    { id: 4, icon: iconLogout, label: "Cerrar sesion", endpoint: "/logout" },
  ];

  return (
    <aside className={`sidebar ${isHovered ? "expanded" : "collapsed"}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="sidebar-header">
        <div className="sidebar-icon">
          <img src={iconBank} alt="Icono de banco" />
        </div>
        {isHovered && <span className="sidebar-title">Gestor de gastos</span>}
      </div>
      <div className={`overlay ${isHovered ? "active" : ""}`} onClick={() => {setIsOpen(false);setIsHovered(false)}}></div>
      {/* menu de navegacion con enlaces */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link key={item.id} to={item.endpoint} className="nav-item">
            <img src={item.icon} alt={item.label} className="nav-icon" />
            {isHovered && <span className="nav-label">{item.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
