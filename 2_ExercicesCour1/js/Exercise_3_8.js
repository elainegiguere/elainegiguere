//Conversion de température de Fahrenheit vers Celsius

tempFahren = -40;
tempFahren = parseFloat(tempFahren);

tempCelsius = ( tempFahren -32) *5/9;


for (let i = 0; i < 40; i+=5){
    console.log("température + 5 " + i )
}