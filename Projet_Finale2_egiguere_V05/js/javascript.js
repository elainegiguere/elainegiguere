/* javascript.css */
/* Programmé par Elaine Giguere */
/* Le 21 oct 2020 */

function validerCodeRegional(){

    let codeRegional = document.getElementById( "codeRegional");
    console.log(codeRegional.value);

    let codePermis = false;

    if(codeRegional.value === "514"){
        codePermis = true;
    }

    else if(codeRegional.value === "418"){
        codePermis = true;
    }
    else if(codeRegional.value === "819"){
        codePermis = true;
    }

    if(codePermis === false){
        alert("Code régional non-permis !!");
    }

    return codePermis;
}