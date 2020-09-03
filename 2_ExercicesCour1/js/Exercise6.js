//nom du produit
//prix du produit
//prix au gros (66%)
//profit attendu

prixDuProduit = 200;
prixDuProduit = parseFloat(prixDuProduit);
prixAuGros = 200-(66/100);
prixAuGros = parseFloat(prixAuGros);
profitAttendu = prixDuProduit-prixAuGros;

console.log ("Voici le prix des Iphone " + prixDuProduit);
console.log ("voici le prix au gros d'un Iphone " + prixAuGros);
console.log ("Voici le profit du marchand " + profitAttendu);