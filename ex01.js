function calculerPrixTotal(prixUnitaire, quantite, fraisLivraison) {
	let somme1 = prixUnitaire * quantite;
	let total = somme1 + fraisLivraison;

	return total;
}

console.log(calculerPrixTotal(10, 3, 5)); // 35
console.log(calculerPrixTotal(2.5, 4, 0)); // 10
console.log(calculerPrixTotal(0, 10, 4.99)); // 4.99
