const FizzbuzzService = require("../../lib/services/FizzbuzzService")
const Reader = require("../../lib/utils/Reader")

describe("Test for FizzbuzzService.js", ()=>{
    test('Req1: Set trick property on explorers list', ()=>{
        const explorers = Reader.readJsonFile('explorers.json')
        const explorersWithTrick = FizzbuzzService.getExplorersWithTrick(explorers);

        expect(explorersWithTrick.every(explorer=>explorer.trick!=undefined)).toBe(true);

        explorersWithTrick.every(explorer=>expect(explorer.trick).not.toBeUndefined())
    })
})