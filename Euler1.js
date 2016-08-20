var a = 1;
var sum = 0;

while (a < 999){
	a +=1;
	console.log(a);
		if (a % 3 === 0) {
		sum +=a;
	} else if (a % 5 === 0) {
		sum += a;
	}
	
}
console.log(sum);