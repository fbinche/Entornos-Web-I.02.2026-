const formulario = document.querySelector('.form_cupon');
// Reemplaza esto con la URL que obtuviste de Google Apps Script
const URL_GOOGLE_SCRIPT = "https://script.google.com/macros/s/AKfycbwyUDwcLLytn9wNlUltilo82VZQPXULb7AS2WbXeqKxc7Tj7FyxWXnUI9YM2tBYgrui/exec";

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const boton = formulario.querySelector('button');
    boton.innerText = "Enviando...";
    boton.disabled = true;

    const datos = new FormData(formulario);

    fetch(URL_GOOGLE_SCRIPT, {
        method: 'POST',
        body: datos
    })
    .then(res => {
        alert("¡Datos registrados con éxito en el sistema!");
        formulario.reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Hubo un problema con la conexión.");
    })
    .finally(() => {
        boton.innerText = "Enviar";
        boton.disabled = false;
    });
});