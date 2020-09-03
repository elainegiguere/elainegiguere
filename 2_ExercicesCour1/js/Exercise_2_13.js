var a;
var b;

a = parseInt(prompt("Entrez le nombre a"));
b = parseInt(prompt("Entrez le nombre b"));

if (a > b){
    console.log("le plus petit est "+ b );
    console.log("le plus grand est "+ a );
}

else if ( b > a){
    console.log("le plus petit est "+ a );
    console.log("le plus grand est "+ b );
}

else{
    console.log ("erreur,lesdeux nombres sont égaux !")
}
