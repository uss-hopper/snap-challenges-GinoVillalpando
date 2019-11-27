for (let i = 1; i <= 100; i++) {
	let isDividibleByThree = i % 3 === 0;
	let isDivisibleByFive = i % 5 === 0;

	if (isDividibleByThree && isDivisibleByFive) {
		console.log('FizzBuzz');
	}
	else if (isDividibleByThree) {
		console.log('Fizz');
	}
	else if (isDivisibleByFive) {
		console.log('Buzz');
	}
	else {
		console.log(i);
	}
}

LET divisibleByThree = to index % by 3 only

LET divisbleByFive = to index % by 5 only

FOR(LET index = 1; index <= 100; index++) {

	IF divisibleByThree AND divisbleByFive print "fizzbuzz"

	ELSE IF divisibleByThree print "fizz"

	ELSE IF divisbleByFive  print "buzz"
}