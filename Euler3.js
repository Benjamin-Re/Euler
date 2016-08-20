// This is actually ReebootJeff's solution. I had no idea what to do here and his solution helped me understand it. So thanks to Jeff. 

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