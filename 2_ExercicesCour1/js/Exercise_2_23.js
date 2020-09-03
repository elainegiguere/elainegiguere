var indiceDePolution;

var listeA;
var listeB;
var listeC;

// génère un chiffre au hasard entre 0 et 1
indiceDePolution = Math.random
indiceDePolution = indiceDePolution.toFixed(2)
console.log ("l,indice de polution est égale à : " +indiceDePolution)

//si indice est " 0.31

if (indiceDePolution >= 0.04 && indiceDePolution< 0.31 ){
    document.write( "avertir personne")
}

else if (indiceDePolution >= 0.31 && indiceDePolution< 0.40 ){
    document.write( "avertir liste A")
}

else if (indiceDePolution > 0.4 && indiceDePolution< 0.50 ){
    document.write( "avertir liste A")
}