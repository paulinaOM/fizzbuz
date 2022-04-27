const ExplorerService = require("../../lib/services/ExplorerService");
const Reader = require("../../lib/utils/Reader");

describe("Test for ExplorerService.js", ()=>{
    test("Req 1: Obtener lista de los explorers en una misión", ()=>{
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        
        expect(explorersInNode.every(explorer=>explorer.mission=='node')).toBe(true);
    });
    test("Req 2: Obtener la cantidad de explorers en una misión", ()=>{
        const explorers = Reader.readJsonFile("explorers.json");
        const amountExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        
        expect(amountExplorersInNode).toBe(10);
    });
    test("Req 3: Obtener la lista de githubUsernames de explorers en una misión", ()=>{
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersUsernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        
        expect(explorersUsernamesInNode.length).toBe(10);
    });
});