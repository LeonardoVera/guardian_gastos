const app = require('./src/app');
const dotenv = require('dotenv');

dotenv.config();

// Puerto
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});