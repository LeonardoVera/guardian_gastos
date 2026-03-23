const app = require('./app');

// Puerto
const PORT = process.env.PORT || 5000;

//Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});