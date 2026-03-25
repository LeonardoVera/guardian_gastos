export function useAddGasto(user, descripcion, monto, fecha, categoria) {
    fetch(`${import.meta.env.VITE_LOCAL_HOST}/addGasto`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            usuario_id: user ? user.id : null,
            descripcion: descripcion,
            monto: monto,
            fecha: fecha,
            categoria: categoria
        }),
    })
    .then((response) => response.json())
    .then((data) => console.log("Gasto agregado: ",data))
    .catch((error) => console.log(error))
}