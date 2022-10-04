const formulario = document.getElementById("formulario")
const nombres = document.getElementById('nombres')
const apellidos = document.getElementById('apellidos')
const correo = document.getElementById('correo')
const mensaje = document.getElementById('mensaje')

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(nombres.value);
    console.log(apellidos.value);
    console.log(correo.value);
    console.log(mensaje.value);
    



})
