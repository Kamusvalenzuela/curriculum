fetch('https://www.ascensiongamedev.com/resources/status.php?host=inmortaltower.servegame.com&port=5451')
    .then(response => response.text())
    .then(data => {
        if (data === '0' || parseInt(data) > 0) {
            // El servidor está en línea y devuelve un número mayor a cero
            console.log('El servidor está en línea con ${data} jugadores');
        } else if (data === '-1') {
            // El servidor está inactivo y devuelve -1
            console.log('El servidor está inactivo');
        } else {
            // El servidor devuelve un valor no esperado
            console.log('Respuesta inesperada del servidor:', data);
        }
    })
    .catch(error => {
        // Se produjo un error al hacer la solicitud
        console.error('Error al hacer la solicitud:', error);
    });


fetch('https://www.ascensiongamedev.com/resources/status.php?host=inmortaltower.servegame.com&port=5451')
    .then(response => response.text())
    .then(data => {
        if (data === '0') {
            // El servidor está inactivo
            document.write('<span style="color: red;">El servidor está inactivo</span>');
        } else if (parseInt(data) > 0) {
            // El servidor está en línea y devuelve un número mayor a cero
            document.write('<span style="color: green;">El servidor está en línea</span>');
            document.write(` y hay ${data} jugadores conectados`);
        } else {
            // El servidor devuelve un valor no esperado
            document.write('Respuesta inesperada del servidor:', data);
        }
    })
    .catch(error => {
        // Se produjo un error al hacer la solicitud
        document.write('Error al hacer la solicitud:', error);
    });