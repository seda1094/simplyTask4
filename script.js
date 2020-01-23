var matrix = [
    [0, 0, 1, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0]
 ];
 
 function getRndInteger(min, max) {
     return Math.floor(Math.random() * (max - min + 1) ) + min;
   }
 
 var side = 100;
 const gladiatorsArr = []
 const murderedGladiatorsArr = []
 function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
 
    for(var y = 0; y < matrix.length; ++y){
     for(var x = 0; x < matrix[y].length; ++x){
         if(matrix[y][x] == 1){
             const gladiator = new Gladiator(x,y,faker.name.lastName(),getRndInteger(80,100),getRndInteger(2,5),1);
             matrix[y][x] = gladiator;
             gladiatorsArr.push(gladiator);
         }	
     }
  }
 }
 
 function draw() {
 
     for (var y = 0; y < matrix.length; y++) {
         for (var x = 0; x < matrix[y].length; x++) {
  
             if (matrix[y][x] instanceof  Gladiator) {
                 fill(matrix[y][x].speed*40,255,0);
                 rect(x * side, y * side, side/2, side/2);
 
                 fill(0,0,0);
                 text(matrix[y][x].power, x * side+5, y * side+15)
 
                 fill(matrix[y][x].power*40,0,255);
                 rect(x * side+side/2, y * side, side/2, side/2);
 
                 fill(255,255,255);
                 text(matrix[y][x].power, x * side+side/2+5, y * side+15)
 
                 fill(matrix[y][x].health*2,0,0);
                 rect(x * side, y * side+side/2, side, side/2); 
 
                 fill(255,255,255);
                 text(matrix[y][x].health,x * side, y * side+side/2+10);
 
                 fill(255, 255, 255);
                 text(matrix[y][x].name, x * side, y * side+side/2+20)
 
                 if (matrix[y][x].oponent) {
                     text(matrix[y][x].oponent.name, x * side, y * side+side/2+30)
                 }

             }
             else if (matrix[y][x] == 0) {
                 fill("#acacac");
                 rect(x * side, y * side, side, side);
             }
             console.log(murderedGladiatorsArr);
             
         }
     }
     for(const i in gladiatorsArr){
        gladiatorsArr[i].hit()
      }

  }
  