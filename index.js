const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService")

const explorers = Reader.readJsonFile("./explorers.json");
console.log(explorers);

const explorersByMission = ExplorerService.filterByMission(explorers, 'node');
console.log(explorersByMission);