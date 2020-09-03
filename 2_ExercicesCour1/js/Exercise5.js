// entrer le nom de l'usager
// entrer l'âge d'un usager
// multiplier l'âge par 365
// retourner le nom de l'usager avec son âge affiché en jours.

nomDuSujet = prompt("Quel est votre nom?");

ageDuSujet = prompt("Quel âge avez-vous?");//"45"
ageDuSujet = parseInt(ageDuSujet);//45

//faire la conversion de l'âge en jours

ageEnJour= ageDuSujet*365;


console.log(nomDuSujet);
console.log(ageEnJour);