function jouerTour(pointsDeVie, valeur, action) {
	let res = action;
	let pv = pointsDeVie;

	if (res === attaquer) {
		pv = pv - attaquer();
	} else {
		pv = pv + soigner();
	}

	return pv;
}

function attaquer(pointsDeVie, valeur) {
	let attack = pointsDeVie - valeur;

	return attack;
}

function soigner(pointsDeVie, valeur) {
	let soins = pointsDeVie + valeur;

	return soins;
}

jouerTour(100, 30, attaquer); // 70
jouerTour(50, 20, soigner); // 70
jouerTour(0, 25, soigner); // 25
