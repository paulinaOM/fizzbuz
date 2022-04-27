class FizzbuzzService{
    static assignTrick(explorer){
        const mod3 = explorer.score%3;
        const mod5 = explorer.score%5;

        if(mod5 === 0 && mod3 === 0){
            explorer.trick = "FIZZBUZZ";
        }
        else if(mod3 === 0){
            explorer.trick = "FIZZ";
        }
        else if(mod5 === 0){
            explorer.trick = "BUZZ";
        }
        else{
            explorer.trick = explorer.score;
        }
        return explorer;
    }

    static getExplorersWithTrick(explorers){
        const explorersWithTrick = explorers.map(explorer => this.assignTrick(explorer));
        return explorersWithTrick;
    }
}

module.exports = FizzbuzzService;