//boucle 100 fois

var randomnumber;
var nombreDe1 = 0;
var nombreDe0 = 0;


for (let i = 0 ; i < 100; i++){
    randomnumber = (Math.round(Math.random()));


    if (randomnumber ===0){
        nombreDe0++
    }
    if (randomnumber ===1){
        nombreDe1++
    }
}

console.log("Générer " + nombreDe0 + " 0");
console.log("Générer " + nombreDe1 + " 1");