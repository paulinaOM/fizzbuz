//-----APP DE EXPRESS-----
const express = require('express');
const app = express(); 
//Analiza las solicitudes JSON entrantes y coloca los datos analizados en formato req.body.
app.use(express.json());
const port = 3000;

//----ROUTER-----
app.get("/", (request, response) => {
    response.json({message: "FizzBuzz API welcome!"});
});

//---INICIALIZAR APP---
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost: ${port}`);
});

