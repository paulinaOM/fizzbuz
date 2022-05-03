class FizzbuzzService{
    static applyValidationInNumber(score){
        const mod3 = score%3;
        const mod5 = score%5;
        let trick = score;

        if(mod5 === 0 && mod3 === 0){
            trick = "FIZZBUZZ";
        }
        else if(mod3 === 0){
            trick = "FIZZ";
        }
        else if(mod5 === 0){
            trick = "BUZZ";
        }
       
        return trick;
    }

    static getExplorersWithTrick(explorers){
        const explorersWithTrick = explorers.map(explorer => {
            explorer.trick = this.applyValidationInNumber(explorer.score);
            return explorer;
        });
        return explorersWithTrick;
    }
}

module.exports = FizzbuzzService;