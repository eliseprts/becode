const readlineSync = require("readline-sync");
const fs = require("fs");

function askTvSerie() {
    let name = readlineSync.question("Give me the name of a TV Serie : ");
    let productionYear = readlineSync.question("What is its production year ? ");
    let castMembers;
    for (i = 5; i > 0; i -= 1) {
        castMembers = [readlineSync.question("Give me the name of a cast member of this serie : ")];
        castMembers.push(castMembers);
    }
    let tvSerie = { name, productionYear, castMembers };
    let dataTvSerie = JSON.stringify(tvSerie);
    fs.writeFileSync("./5.1.json", dataTvSerie);
}
askTvSerie();