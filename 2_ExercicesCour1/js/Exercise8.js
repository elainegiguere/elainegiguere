//Conversion de température de Fahrenheit vers Celsius

tempFahren =prompt("Quel est votre température en Fahrenheit?");
tempFahren = parseFloat(tempFahren);

resultat = ( tempFahren -32) *5/9;

console.log("voici votre température en Celsuis " + resultat);