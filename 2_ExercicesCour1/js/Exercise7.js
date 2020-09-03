//Conversion de température de Celsius vers Fahrenheit


tempCelsius = prompt("Quel est votre température en celsius?");
tempCelsius = parseFloat(tempCelsius);

resultat =(tempCelsius * 9 / 5) + 32;
console.log("voici votre température en Fahrenheit " + resultat);

