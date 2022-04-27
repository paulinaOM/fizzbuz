const ExplorerService = require('../services/ExplorerService');
const FizzbuzzService = require('../services/FizzbuzzService');
const Reader = require('../utils/Reader');

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);

        return explorersByMission;
    }
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersUsernamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);

        return explorersUsernamesByMission;
    }
    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const amountExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission)

        return amountExplorersByMission;
    }
}

module.exports = ExplorerController;