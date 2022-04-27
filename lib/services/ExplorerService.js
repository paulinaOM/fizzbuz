
class ExplorerServices{
    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersByMission = this.filterByMission(explorers, mission);
        return explorersByMission.length;        
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersByMission = this.filterByMission(explorers, mission);
        const explorersUsernamesByMission = explorersByMission.map((explorer)=>explorer.githubUsername)
        return explorersUsernamesByMission;
    }
}

module.exports = ExplorerServices;