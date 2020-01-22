class Gladiator {
    constructor(x, y, name, health, power, speed) {
        this.x = x;
        this.y = y;
        this.name = name;
        this.health = health;
        this.power = power;
        this.speed = speed;
        this.speedTimer = 0;
    }
    getAllGladiatorLocations(character) {
        const found = [];
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
     
                if (matrix[y][x] instanceof character) {
                    found.push({y: y, x: x})
                }
            }
        }
        return found;
    }
    chooseRndGladiator(){
        const gladiatorLocations = this.getAllGladiatorLocations(Gladiator);
        const rndGladiator = gladiatorLocations[Math.floor(Math.random()*gladiatorLocations.length)]
        return rndGladiator;
    }
    hit() {
        const initial_speed = this.speed
        const initial_health = this.health
        this.speed = initial_speed * (this.health / initial_health)
        this.speedTimer++
        if(this.speedTimer >= this.speed){
            const choosenGladiator = this.chooseRndGladiator()
            console.log(choosenGladiator)
            for (let i in gladiatorsArr) {
                if (choosenGladiator.x == gladiatorsArr[i].x && choosenGladiator.y == gladiatorsArr[i].y) {
                    if(gladiatorsArr[i].health<=0){
                        alert(this.caesarDecision())
                        if(this.caesarDecision()){
                            this.murder(choosenGladiator.x,choosenGladiator.y)
                        }
                        else{
                            gladiatorsArr[i].health = 250
                        }
                    }
                    else{
                        gladiatorsArr[i].health-=this.power
                    }
                }
            }
        this.speedTimer = 0
        }

    }

    caesarDecision(){
        const arr = [true,false];
        return arr[Math.floor(Math.random()*arr.length)]
    }
    murder(x,y){
        matrix[y][x] = 0;
        for (let i in gladiatorsArr) {
            if (x == gladiatorsArr[i].x && y == gladiatorsArr[i].y) {
                gladiatorsArr.splice(i, 1);
            }
        }
    }
}