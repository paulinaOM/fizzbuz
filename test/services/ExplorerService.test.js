const ExplorerService = require('../../lib/services/ExplorerService');
const Reader = require("../../lib/utils/Reader")

describe("Test for ExplorerService.js", ()=>{
    test("Req 1: Obtener lista de los explorers en una misión", ()=>{
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersInNode = ExplorerService.filterByMission(explorers, 'node');
        
        expect(explorersInNode.length).toBe(10);
    })
})