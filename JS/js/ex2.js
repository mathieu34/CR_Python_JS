function MaxEtMin(numbers) {
	var numbers = numbers.split(" ");
	return Math.max.apply (null,numbers) + " " + Math.min.apply (null,numbers);
}
console.log(MaxEtMin("-3 4 6 8 22 7"));