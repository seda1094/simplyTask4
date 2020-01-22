var matrix = [
   [0, 0, 1, 0, 0],
   [1, 0, 0, 0, 0],
   [0, 1, 0, 0, 0],
   [0, 0, 1, 0, 0],
   [1, 1, 0, 0, 0],
   [1, 1, 0, 0, 0],
   [1, 1, 0, 0, 0]
];

var side = 50;
const gladiatorsArr = []
function setup() {
   frameRate(5);
   createCanvas(matrix[0].length * side, matrix.length * side);
   background('#acacac');

   for(var y = 0; y < matrix.length; ++y){
    for(var x = 0; x < matrix[y].length; ++x){
        if(matrix[y][x] == 1){
            const gladiator = new Gladiator(x,y,"Violet",100,5,5);
            matrix[y][x] = gladiator;
            gladiatorsArr.push(gladiator);
        }	
    }
 }
   console.log(gladiatorsArr[2])
   gladiatorsArr[2].hit()
   gladiatorsArr[2].hit()
   gladiatorsArr[2].hit()
   gladiatorsArr[2].hit()
   gladiatorsArr[2].hit()

   console.log(matrix[2][1]);
   

}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
 
            if (matrix[y][x] instanceof  Gladiator) {
                console.log(matrix[y][x].health)
                fill(matrix[y][x].health,0,0);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
         
            rect(x * side, y * side, side, side);
        }
    }
    for(const i in gladiatorsArr){
        const gladiator = gladiatorsArr[i].hit()
     }
   
 }
 