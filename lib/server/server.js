const ExplorerController = require('../controllers/ExplorerController')

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

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersByMission = ExplorerController.getExplorersByMission(mission);
    response.json({explorersByMission});
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const amountExplorersByMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission, amountExplorersByMission});
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersUsernamesByMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission, explorersUsernamesByMission});
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = request.params.score;
    const trick = ExplorerController.applyValidationInNumber(score);
    response.json({score, trick});
});

//---INICIALIZAR APP---
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost: ${port}`);
});

