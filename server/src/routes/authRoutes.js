const router = require("express").Router();
const User = require("../models/User");

// Ruta de inicio de sesión
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const [user, created] = await User.findOrCreate({
      where: { username },
      defaults: { password },
    });

    //En caso de que el usuario ya exista, verificamos la contraseña
    if (!created && user.password !== password) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const message = created
      ? "Usuario creado y autenticado"
      : "Usuario autenticado";
    return res.json({
      message,
      user: { id: user.id, username: user.username }
    });
  } catch (error) {
    console.error("Error en la autenticacion:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
});

module.exports = router;
