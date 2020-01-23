class Gladiator {
    constructor(x, y, name, health, power, speed) {
        this.x = x;
        this.y = y;
        this.name = name;
        this.health = health;
        this.power = power;
        this.speed = speed;
        this.speedIndicator = this.speed;
        this.speedLim = 5;
        this.oponent

    }
    getAllGladiatorLocations(character) {
        const found = [];
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {

                if (matrix[y][x] instanceof character) {
                    found.push(matrix[y][x])
                }
            }
        }
        return found;
    }
    chooseRndGladiator() {
        const gladiatorLocations = this.getAllGladiatorLocations(Gladiator);
        const rndGladiator = gladiatorLocations[Math.floor(Math.random() * gladiatorLocations.length)]
        return rndGladiator;
    }
    hit() {
        this.speedIndicator++

        if (this.speedIndicator == this.speedLim) {
            this.oponent = this.chooseRndGladiator()
            if (this.oponent.health <= 0) {
                const decision = this.caesarDecision()
                if (decision) {
                    this.decisionVisualization(decision, this.oponent.name)
                    this.oponent.health = 250
                }
                else {
                    this.decisionVisualization(decision, this.oponent.name)
                    this.murder(this.oponent.x, this.oponent.y)
                }
            }
            else {
                this.oponent.health -= this.power
            }

            this.speedIndicator = this.speed
        }

    }

    caesarDecision() {
        const arr = [true, false];
        return arr[Math.floor(Math.random() * arr.length)]
    }
    decisionVisualization(decision,name) {
        const img = document.createElement("img")
        const p = document.createElement("p")
        p.innerHTML = name

        if (decision) {
            img.src = "./img/ok.png"
        }
        else
        {
            img.src = "./img/murder.png"
        }

        document.getElementById("decision").appendChild(img)
        document.getElementById("decision").appendChild(p)

    }
    murder(x, y) {
        matrix[y][x] = 0;
        for (let i in gladiatorsArr) {
            if (x == gladiatorsArr[i].x && y == gladiatorsArr[i].y) {
                gladiatorsArr.splice(i, 1);
            }
        }
    }
}