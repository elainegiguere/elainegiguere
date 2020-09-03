var date;
var article1;
var article2;
var article3;

var tps;
var tvq;
var total;

date= prompt("entrer la date");
article1= parseFloat(prompt("prix du premier article"));
article2= parseFloat(prompt("prix du deuxième article"));
article3= parseFloat(prompt("prix du troisième article"));

total = article1 + article2 + article3

tps = 0.05 * total;
tvq = 0.0975 * total;
console.log(date);
console.log("montant de la tps : " + tps);
console.log("montant de la tvq : " + tvq);
console.log("grand total : "+ total + tps + tvq);