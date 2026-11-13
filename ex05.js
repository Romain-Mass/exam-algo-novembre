function accesSalle(estMembre, aInvitation, estBanni) {
	if (estMembre || aInvitation) {
		return true;
	} else if (!estBanni) {
		return false;
	}
}

console.log(accesSalle(true, false, false)); // true
console.log(accesSalle(false, true, false)); // true
console.log(accesSalle(true, true, true)); // false
