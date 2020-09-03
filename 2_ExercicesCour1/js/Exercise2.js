//L'usager doit fournir la largeur
//l'usager doit fournir la hauteur
//le résultat  de la surface ou l'aire doit être calculé par l'ordi et être retourné à l'usager.

//Demander quelle est la largeur
largeurACalculer = prompt ("Quel est votre largeur?"); //"12"
largeurACalculer = parseInt (largeurACalculer); //12

//Demander quelle est la hauteur
hauteurACalculer = prompt ("Quel est votre hauteur?"); //"8"
hauteurACalculer = parseInt (hauteurACalculer); //8

//retourner le calcul de la surface
surface = (hauteurACalculer * largeurACalculer);

console.log(surface);