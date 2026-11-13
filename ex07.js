function appliquerRemise(prix, pourcentage) {
	let res1 = prix - pourcentage;

	return res1;
}

function ajouterTVA(prix) {
	let price = prix * 0.2;
	let res2 = prix + price;

	return res2;
}

function calculerPrixFinal(prix, pourcentage) {
	let resultat = prix + prix * (pourcentage / 100);
	let augmente = resultat + appliquerRemise;
	let TVA = resultat + ajouterTVA;

	let final = resultat + augmente;
	let final2 = final + TVA;

	return resultat;
}

console.log(appliquerRemise(100, 10)); // 90
console.log(ajouterTVA(50)); // 60

console.log(calculerPrixFinal(100, 10)); // 108
console.log(calculerPrixFinal(50, 20)); // 48
console.log(calculerPrixFinal(200, 0)); // 240
