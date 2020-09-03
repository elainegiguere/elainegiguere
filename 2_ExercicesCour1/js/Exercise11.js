var prixdebaseVoiture;
var Frais;
var MontantProfit;
var tps;
var tvq;
var soustotal;

prixdebaseVoiture= parseFloat(prompt("prix de base de la voiture"));
Frais= prixdebaseVoiture*0.02
MontantProfit = prixdebaseVoiture*0.12

//calcul des taxes
soustotal = prixdebaseVoiture + Frais + MontantProfit

tps = 0.05 * total;
tvq = 0.0975 * total;


article1= parseFloat(prompt("prix du premier article"));
article2= parseFloat(prompt("prix du deuxième article"));
article3= parseFloat(prompt("prix du troisième article"));



console.log(date);
console.log("prix de base : " + prixdebaseVoiture);
console.log("Frais: " + Frais);
console.log("profit du concessionnaire: " + MontantProfit);
console.log("montant de la tps : " + tps);
console.log("montant de la tvq : " + tvq);