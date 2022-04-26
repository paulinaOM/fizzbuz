const fs = require("fs");

class Reader{
    // Part 1 Read json file ===========================
    static readJsonFile(path){
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}


module.exports = Reader;
