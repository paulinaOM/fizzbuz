const Reader = require("./lib/utils/Reader");
const ExplorerServices = require("./lib/services/ExplorerServices");

const explorers = Reader.readJsonFile("./explorers.json");
console.log(explorers);

const explorersByMission = ExplorerServices.filterByMission(explorers, "node");
console.log(explorersByMission);