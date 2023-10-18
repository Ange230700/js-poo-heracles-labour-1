import Fighter from './src/Fighter.js'
import chalk from 'chalk';

const heracles = new Fighter('Heracles', 20, 6);
const nemeanLion = new Fighter('Nemean Lion', 11, 13);
let roundNumber = 1;

while (heracles.life > 0 && nemeanLion.life > 0) {
    let randomProbability = Math.floor(Math.random() * 2);
    console.log(
        `Round #${chalk.green(roundNumber)}\n`
        );
    if (randomProbability === 0) {
        console.log(
            `\t${chalk.blue(heracles.name)} attacks ${chalk.red(nemeanLion.name)}.\n`
            );
        heracles.fight(nemeanLion);
    }
    else {
        console.log(
            `\t${chalk.red(nemeanLion.name)} attacks ${chalk.blue(heracles.name)}.\n`
            );
        nemeanLion.fight(heracles);
    }
    roundNumber++;
}