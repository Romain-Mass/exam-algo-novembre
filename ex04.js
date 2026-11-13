function accesManege(taille, age) {
	if (taille >= 120 && age > 7) {
		return true;
	} else {
		return false;
	}
}

console.log(accesManege(130, 10)); // true
console.log(accesManege(130, 7)); // false
console.log(accesManege(120, 8)); // true
