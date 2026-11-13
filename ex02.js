function formaterDuree(minutes) {
	let heures = minutes / 60;
	let reste = minutes % 60;

	let resultat = `${heures}h${reste}min`;

	if (minutes % 60 != 0 || minutes === 60) {
		heures = 0;
		reste = minutes;
		return resultat;
	}

	return;
}

console.log(formaterDuree(135)); // "2h15min"
console.log(formaterDuree(60)); // "1h0min"
console.log(formaterDuree(45)); // "0h45min"
