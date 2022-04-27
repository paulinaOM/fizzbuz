const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Test for ExplorerController", ()=>{
    test("Req 1: Obtener lista de los explorers en una misión", ()=>{
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        
        expect(explorersInNode.every(explorer=>explorer.mission=='node')).toBe(true);
    });
    test("Req 2: Obtener la lista de githubUsernames de explorers en una misión", ()=>{
        const explorersUsernamesInNode = ExplorerController.getExplorersUsernamesByMission("node");
        
        expect(explorersUsernamesInNode.length).toBe(10);
    });
    test("Req 3: Obtener la cantidad de explorers en una misión", ()=>{
        const amountExplorersInNode = ExplorerController.getExplorersAmonutByMission("node");
        
        expect(amountExplorersInNode).toBe(10);
    });
    
});