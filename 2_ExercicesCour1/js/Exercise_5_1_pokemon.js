//Personne3//
let personne3 = {

    prenom: "Elaine",
    nom: "Giguere",
    age: "45",
    metier: "Designer graphique"
};

for (let cle in personne3){
    document.write(cle.toString() + "<br>");
    document.write(personne3[cle].toString() + "<br>");
}

//Personne4//

let personne4 = {};
personne4.prenom = "Simone";
personne4.nom = "Cyr";
personne4.age = "9";
personne4.metier = "Élève";

for (let cle in personne4){
document.write(cle.toString() + "<br>");
document.write(personne4[cle].toString() + "<br>");
}
//Pokemon//
let cartePokemon ={

    nom: "Pikachu",
    type: "Thunder",
    hp: "50",
    nomAttaque1: "Agility",
    nomAttaque2: "Thundershock",
    degatsAttaque1: "Agility",
    degatsAttaque2: "Paralyzed"
};

for (let cle in cartePokemon){
    document.write(cle.toString() + "<br>");
    document.write(cartePokemon[cle].toString() + "<br>");
}

//Pokemon2//
let cartePokemon2 ={};

    cartePokemon2.nom = "Greninja";
    cartePokemon2.type= "Marteau";
    cartePokemon2.hp= "230";
    cartePokemon2.nomAttaque1= "Shuriken Flurry";
    cartePokemon2.nomAttaque2= "Shadowy Hunter GX";
    cartePokemon2.degatsAttaque1= "Haze Slash";
    cartePokemon2.degatsAttaque2= "Week";


for (let cle in cartePokemon2){
    document.write(cle.toString() + "<br>");
    document.write(cartePokemon2[cle].toString() + "<br>");
}