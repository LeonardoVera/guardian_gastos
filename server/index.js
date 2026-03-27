const app = require('./src/app');
const dotenv = require('dotenv');
const sequelize = require('./src/db');

dotenv.config();


async function startServer() {
    try {
        // intenta conectar a la base de datos
        await sequelize.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');
        
        // sincroniza los modelos con la base de datos
        await sequelize.sync();
        
        // inicia el servidor
        app.listen(process.env.PORT, () => {
            console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
        });

    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
}

startServer();

module.exports = app;

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
  });
}