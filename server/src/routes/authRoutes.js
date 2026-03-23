const router = require("express").Router();

// Ruta de inicio de sesión
router.post('/login', (req, res) => {
    // datos recibidos del cliente
    const { username, password } = req.body;
    
    // mostramos en consola los datos recibidos
    console.log(`username: ${username}, password: ${password}`);

    // mensaje de respuesta
    res.json({ message: 'Inicion de sesion correcto' });
});

module.exports = router;