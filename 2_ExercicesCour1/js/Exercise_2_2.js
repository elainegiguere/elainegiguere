var reduction;
var totalDesAchats;


totalDesAchats= parseFloat(prompt("Quel est le total de vos achats?"));


if(totalDesAchats>= 200){
    reduction = totalDesAchats*0.15;
}

else{ reduction = 0;
}

console.log("vous avez un rabais de " + reduction);