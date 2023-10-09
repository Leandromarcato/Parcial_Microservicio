const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000

app.use(cors());
app.use(express.static('public'));

// app.get('/', async (req, res) => {
//     try {
//         const url = 'https://api.bluelytics.com.ar/v2/latest';
//         const response = await fetch(url);
//         const data = await response.json();

//         const dolarOficial = data.oficial.value_avg;
//         const dolarBlue = data.blue.value_avg;

//         res.send(`
//             <h1>Valores del Dólar</h1>
//             <p>Dólar Oficial: ${dolarOficial}</p>
//             <p>Dólar Blue: ${dolarBlue}</p>
//         `);
//     } catch (error) {
//         console.error('Error al obtener los datos:', error);
//         res.status(500).send('Error al obtener los datos');
//     }
// });
app.get('/dolar', async (req, res) => {
    try {
        const url = 'https://api.bluelytics.com.ar/v2/latest';
        const response = await fetch(url);
        const data = await response.json();

        const dolarOficial = data.oficial.value_avg;
        const dolarBlue = data.blue.value_avg;

        const html = `
            <h1>Valores del Dólar</h1>
            <div class="valor-dolar valor-oficial">Dólar Oficial: ${dolarOficial}</div>
            <div class="valor-dolar valor-blue">Dólar Blue: ${dolarBlue}</div>
        `;

        res.send(html);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        res.status(500).send('Error al obtener los datos');
    }
});


app.listen(port,()=>{console.log(`servidor corriendo en el puerto ${port}`);});