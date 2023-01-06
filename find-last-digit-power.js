// Javascript code to find last digit of a^b

// Function to find b % a
function Modulo(a, b)
{
	
	// Initialize result
	let mod = 0;

	// calculating mod of b with a to make
	// b like 0 <= b < a
	for (let i = 0; i < b.length; i++)
		mod = (mod * 10 + b[i] - '0') % a;

	return mod; // return modulo
}

// function to find last digit of a^b
function LastDigit(a, b)
{
	let len_a = a.length;
	let len_b = b.length;

	// if a and b both are 0
	if (len_a == 1 && len_b == 1 &&
				b[0] == '0' && a[0] == '0')
		return 1;

	// if exponent is 0
	if (len_b == 1 && b[0] == '0')
		return 1;

	// if base is 0
	if (len_a == 1 && a[0] == '0')
		return 0;

	// if exponent is divisible by 4 that
	// means last digit will be pow(a, 4)
	// % 10. if exponent is not divisible
	// by 4 that means last digit will be
	// pow(a, b%4) % 10
	let exp = (Modulo(4, b) === 0) ? 4 :
  Modulo(4, b);

	// Find last digit in 'a' and compute
	// its exponent
	let res = Math.pow(a[len_a - 1] - '0', exp);

	// Return last digit of result
	return res % 10;
}

// Run test case
let a = "19";
let b = "8";
console.log(LastDigit(a, b)); // Result: 1
