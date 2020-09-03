var a;
var b;
var c;


a = parseInt(prompt("Entrez le nombre a"));
b = parseInt(prompt("Entrez le nombre b"));
c = parseInt(prompt("Entrez le nombre b"));

//est-ce que A est plus grand?
if (a > b){
    if(a > c)
    console.log("le plus grand est " + a );
}

if (b > a){
    if(b > c)
        console.log("le plus grand est " + b );
}

if (c > a){
    if(c > b)
        console.log("le plus grand est " + b );
}


//est-ce que A est plus petit?
if (a < b){
    if(a < c)
        console.log("le plus petit est " + a );
}

if (b < a){
    if(b < c)
        console.log("le plus petit est " + b );
}

if (c < a){
    if(c < b)
        console.log("le plus petit est " + b );
}

