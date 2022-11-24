const readlineSync = require("readline-sync");
const fs = require("fs");

function askTvSerie() {
    let nameOfSerie = readlineSync.question("Give me the name of a TV Serie : ");
    let productionYear = readlineSync.question("What is its production year ? ");
    let castMembers = [readlineSync.question("Give me the name of some cast members of this serie : ")];
    let tvSerie = { nameOfSerie, productionYear, castMembers };
    let dataTvSerie = JSON.stringify(tvSerie);
    fs.writeFileSync("./5.1.json", dataTvSerie);
}
askTvSerie();
