/*calcul de la surface à couvrir*/


surfacePiedsCarrés = prompt("Quel est la surface de votre pièce en pieds carrés?");//"35"
surfacePiedsCarrés  = parseFloat(surfacePiedsCarrés ); //35


//la multiplication

resultat = surfacePiedsCarrés * 14;

// un paquet couvre 14 pieds carrés//

document.write("Vous aurez besoin de " + resultat + "boîtes pour couvrir votre sol");

