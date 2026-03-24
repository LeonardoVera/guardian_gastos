const router = require("express").Router();
const Gasto = require("../models/Gasto");

// endopoint para agregar un gasto
router.post('/addGasto', async (req, res) => {
    const { usuario_id, descripcion, monto, fecha, categoria } = req.body;

    try {
        // validacion de los datos
        if (!usuario_id || !descripcion || !monto || !fecha || !categoria) {
            return res.status(400).json({ success: false, message: "Faltan datos obligatorios" });
        }

        // insertamos el nuevo gasto
        const newGasto = await Gasto.create({
            usuario_id,
            descripcion,
            monto,
            fecha,
            categoria
        });

        return res.status(201).json({ success: true, message: "Gasto agregado exitosamente", gasto: newGasto });
    } catch (error) {
        console.error("Error al agregar gasto:", error);
        return res.status(500).json({ success: false, message: "Error al agregar gasto" });
    }
});

module.exports = router;