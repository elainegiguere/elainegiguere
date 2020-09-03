var premierChiffre;
var deuxiemechiffre;
var reponse;

premierChiffre= parseFloat(prompt("Entrez un premier chiffre"));
deuxiemechiffre= parseFloat(prompt("Entrez un premier chiffre"));

if(premierChiffre>= deuxiemechiffre){
    reponse = premierChiffre;
}

else{ reponse = deuxiemechiffre;
}

console.log(" le chiffre le plus grand des deux chiffres est le " + reponse);