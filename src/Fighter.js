import chalk from 'chalk';

const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity, life = MAX_LIFE) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = life;
    }

    fight(defender) {
        let pointsOfAttack = Math.floor(Math.random() * this.strength);
        let pointsOfDefense = Math.floor(Math.random() * defender.dexterity);
        let damage = pointsOfAttack - pointsOfDefense;
        if (damage > 0) {
            if (defender.life > 0) {
                if (defender.life - damage <= 0) {
                    if (defender.name === 'Heracles') {
                        console.log(`\t${chalk.blue(defender.name)} has lost ${damage} life points.\n\t${chalk.blue(defender.name)} has currently ${defender.life} life points left.\n\tSo ${chalk.blue(defender.name)} has died.\n`);
                        defender.life = -1;
                    }
                    else {
                        console.log(`\t${chalk.red(defender.name)} has lost ${damage} life points.\n\t${chalk.red(defender.name)} has currently ${defender.life} life points left.\n\tSo ${chalk.red(defender.name)} has died.\n`);
                        defender.life = -1;
                    }
                    defender.life = 0;
                }
                else {
                    defender.life -= damage;
                    if (defender.name === 'Heracles') {
                        console.log(`\t${chalk.blue(defender.name)} has ${defender.life} life points left.\n\tHe has lost ${damage} life points.\n`);
                    }
                    else {
                        console.log(`\t${chalk.red(defender.name)} has ${defender.life} life points left.\n\tHe has lost ${damage} life points.\n`);
                    }
                }
            }
            else {
                return false;
            }
        }
        else {
            damage = 0;
            if (defender.name === 'Heracles') {
                console.log(`\t${chalk.blue(defender.name)} has blocked or dodged the attack.\n`);
            }
            else {
                console.log(`\t${chalk.red(defender.name)} has blocked or dodged the attack.\n`);
            }
        }
    }
}

export default Fighter;
