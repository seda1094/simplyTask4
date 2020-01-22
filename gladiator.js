class Gladiator {
    constructor(x, y, name, health, power, speed) {
        this.x = x;
        this.y = y;
        this.name = name;
        this.health = health;
        this.power = power;
        this.speed = speed;
    }
    getAllGladiatorLocations(character) {
        const found = [];
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
     
                if (matrix[y][x] == 1) {
                    found.push({y: y, x: x})
                }
            }
        }
        return found;
    }
    chooseRndGladiator(){
        const gladiatorLocations = this.getAllGladiatorLocations(1);
        const rndGladiator = gladiatorLocations[Math.floor(Math.random()*gladiatorLocations.length)]
        console.log(rndGladiator);
    }
    hit() {

    }
}