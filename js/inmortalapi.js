const estadoJuego = document.getElementById("estado-juego");
const jugadoresEnLinea = document.getElementById("jugadores-en-linea");

const url = "https://www.ascensiongamedev.com/resources/status.php?host=inmortaltower.servegame.com&port=5451";

setInterval(function () {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            if (data === "-1") {
                estadoJuego.textContent = "⛔️ Apagado";
                jugadoresEnLinea.textContent = `Ninguno`;
            } else {
                estadoJuego.textContent = "✅ Encendido";
                jugadoresEnLinea.textContent = `${data}`;
            }
        })
        .catch(error => {
            console.error(error);
        });
}, 1000);