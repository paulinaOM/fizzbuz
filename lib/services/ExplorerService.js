
class ExplorerServices{
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }
    getAmountOfExplorersByMission(explorers, mission){

    }
    static getExplorersUsernamesByMission(explorers, mission){

    }
}

module.exports = ExplorerServices;