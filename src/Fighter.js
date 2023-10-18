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
                    defender.life = 0;
                }
                else {
                    defender.life -= damage;
                }
            }
        }
    }
}

export default Fighter;
