var isPrime = function (input) {
	for (var i=2; i < input; i++){
		if (input % i === 0) {
			return false;
		} else {
			return true;
		}
	}
}



var maxPrimeFactor = function (input) {
	var divisor = input -1;
	while (divisor > 1) {
		if (input % divisor === 0 && isPrime(divisor)) {
			return divisor;
		} else {
			divisor --;
		}
	}
}

maxPrimeFactor(13195);