var nombre1;
var nombre2;
var bonjour;
var bonsoir;
var reponse;


nombre1= parseInt(prompt("Entrez un nombre"));
nombre2= parseInt(prompt("Entrez un autre nombre"));

if (nombre1 < 9 && nombre2 < 9) { reponse = bonjour;
}

else{
    if (nombre1 && nombre2 > 9) { reponse = bonsoir;
    }



console.log("votre réponse est " + reponse);