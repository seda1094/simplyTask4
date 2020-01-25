//This is class Gladiator,,the main character of my game
class Gladiator {
    constructor(x, y, name, health, power, speed) {
        this.x = x
        this.y = y
        this.name = name;
        this.mainHealth = health
        this.health = health
        this.power = power
        this.speed = speed
        this.speedIndicator = 0
        this.oponent
    }

    //TODO: For Fighting with someone,, my character have to find all GLADIATORS besides himself  
    getAllPossibleGladiators(gladiatorsArr) {
        const found = gladiatorsArr.filter(item => this != item)
        return found
    }

    //Here my gladiator choose randomly a gladiator
    //TODO mistake,,,my gladiator can choose himself,,,
    chooseRndGladiator() {
        const possibleGladiators = this.getAllPossibleGladiators(gladiatorsArr)
        console.log(gladiatorsArr)
        console.log("pppp");
        
        console.log(possibleGladiators)
        if(possibleGladiators.length){
            const rndGladiator = possibleGladiators[Math.floor(Math.random() * possibleGladiators.length)]
            return rndGladiator
        }
    }

    // For some cases speed of my gladiator must be trimpled,,this method for that
    trimpleSpeed() {
        return this.speed * 3
    }

    // This is case ,,when thw speed must be trimpled
    //Look for trimpleSpeed() method
    trimpleSpeedChecker() {
        if (this.health < 30 && this.health > 0) {
            this.trimpleSpeed()
        }
    }

    //Caesar Decision whit random booleans
    caesarDecision() {
        const arr = [true, false]
        return arr[Math.floor(Math.random() * arr.length)]
    }

    //DOM Visualization for Caesar Decision
    decisionVisualization(decision, name) {
        const li = document.createElement("li")
        const img = document.createElement("img")
        const span = document.createElement("span")
        span.innerHTML = name

        if (decision) {
            img.src = "./img/ok.png"
        }
        else {
            img.src = "./img/murder.png"
        }

        li.appendChild(img)
        li.appendChild(span)
        document.getElementById("decision").appendChild(li)
    }

    //Oponoent die
    murder(x, y) {
        matrix[y][x] = 0
        for (let i in gladiatorsArr) {
            if (x == gladiatorsArr[i].x && y == gladiatorsArr[i].y) {
                murderedGladiatorsArr.push(gladiatorsArr[i])
                gladiatorsArr.splice(i, 1)
            }
        }
    }

    //Hit function the main function,,where is calling all methods
    //Here is settings of speed
    hit() {

        this.trimpleSpeedChecker()
        this.speedIndicator++
        if (this.speedIndicator >= this.speed) {
            this.oponent = this.chooseRndGladiator(gladiatorsArr)
            //caesar decision
            if (this.oponent) {
                if (this.oponent.health <= 0) {
                    const decision = this.caesarDecision()
                    //oponent reborn
                    if (decision) {
                        this.decisionVisualization(decision, this.oponent.name)
                        this.oponent.health = 250
                    }
                    //method murder
                    else {
                        this.decisionVisualization(decision, this.oponent.name)
                        this.murder(this.oponent.x, this.oponent.y)
                    }
                }
                //hitting oponent and decrease his health
                else {
                    this.oponent.health -= this.power
                }
            }
            //speed updating
            this.speed = this.speed * (this.health / this.mainHealth)
            this.speedIndicator = 0
        }
    }
}