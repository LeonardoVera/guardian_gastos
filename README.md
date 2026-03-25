# Guardian Gastos - Sistema de Gestión de Gastos

**Guardian Gastos** es una aplicacion web integral diseñada para ayudar a los usuarios a registrar, categorizar y analizar sus gastos personales. El proyecto esta construido con una arquitectura desacoplada (Frontend y Backend) para facilitar su escalabilidad.

## 🛠️ Stack Tecnológico

### Frontend
- **React.js** (Vite)
- **CSS3** (Módulos de diseño personalizados)
- **React Router DOM** (Gestion de navegación)

### Backend
- **Node.js** & **Express**
- **Sequelize** (ORM para la gestión de base de datos)
- **MySQL** (Motor de base de datos)

---

## ⚙️ Configuracion del Proyecto

Para proteger la seguridad de la aplicación, las credenciales y claves de API no se incluyen en el repositorio. Debes configurar los archivos de entorno localmente.

### 1. Variables de Entorno del Cliente
Crea un archivo `.env` en la carpeta `/client`:

```env
# URL de la API del servidor
VITE_LOCAL_HOST = "http://localhost:[PORT]/api"
```

### 2. Variables de Entorno del Servidor
Crea un archivo `.env` en la carpeta `/server`:
```env
PORT        = [puerto_de_conexion]
DB_HOST     = [host]
DB_USER     = [usuario]
DB_PASSWORD = [contraseña]
DB_NAME     = [nombre_de_databse]
DB_PORT     = [puerto_conexion]
```
