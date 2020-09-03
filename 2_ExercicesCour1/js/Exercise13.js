var noteMisession;
var noteFinal;
var noteLabo;
var noteDeFinDeSession;

noteMisession = parseFloat (prompt("Entrez la note de mi-session (sur en %)"));
noteFinal = parseFloat (prompt("Entrez la note de final (sur en %)"));
noteLabo = parseFloat (prompt("Entrez la note de labo (en %)"));

noteMisession = noteMisession * 0.03;
noteFinal = noteFinal * 0.05;
noteLabo = noteLabo * 0.02;

noteDeFinDeSession =noteMisession + noteFinal + noteLabo;

console.log ("la note finale et de " + noteDeFinDeSession +"%");