var noteMisession;
var noteFinal;
var noteLabo;
var noteDeFinDeSession;

noteMisession = parseFloat (prompt("Entrez la note de mi-session (sur 30)"));
noteFinal = parseFloat (prompt("Entrez la note de final (sur 50)"));
noteLabo = parseFloat (prompt("Entrez la note de labo (sur 20)"));

noteDeFinDeSession =noteMisession + noteFinal + noteLabo;

console.log ("la note finale et de " + noteDeFinDeSession +"%");