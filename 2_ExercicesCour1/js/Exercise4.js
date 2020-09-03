// usager entre le salaire
// usager entre le nombre d'heures par semaines
// calculer combien l'employé gagne par semaine
// donner le résutat qui est le montant gagner par semaine

heuresACalculer = prompt("Combien d'heures travaillez-vous par semaine?");//"35"
heuresACalculer = parseFloat(heuresACalculer); //35

salaireHoraire = prompt("Quel est votre salaire horaire?");//"23"
salaireHoraire =parseFloat(salaireHoraire);

//la multiplication

resultat = heuresACalculer*salaireHoraire;

console.log(resultat);

