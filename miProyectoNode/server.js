const express = require('express'); 
const bodyParser = require('body-parser'); 
const fs = require('fs'); 
const app = express(); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.post('/submit', (req, res) => { 
    const nombre = req.body.nombre; 
    const email = req.body.email; 
    const mensaje = req.body.mensaje; 
    const data = `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}\n\n`; 
    // Escribir los datos en un archivo de texto 
    fs.appendFile('datos_formulario.txt', data, (err) => { 
        if (err) { 
            console.error('Error al guardar los datos:', err); 
            res.status(500).send('Error al guardar los datos'); 
        } else { 
            res.send('Formulario recibido y datos guardados'); 
        } 
    }); 
}); 
app.listen(3000, () => { 
    console.log('Servidor escuchando en el puerto 3000'); 
});