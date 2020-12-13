let data = `1000510
19,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,523,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,17,13,x,x,x,x,x,x,x,x,x,x,29,x,853,x,x,x,x,x,37,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,23`
.split("\n");

let buses = data[1].split(",").map(Number);
let crtInput = buses.map((bus, i) => [bus, bus - i % bus]).filter(x => x[0]);
console.log(crtInput)

// Compute product of all numbers, pasado a reduce
let prod = crtInput
    .map(x => x[0])
    .reduce((a,b) => a * b, 1);
console.log(prod)

// while pasado a reduce
let result = crtInput.reduce(
    (anterior, num) => (

        anterior + // Elemento anterior +
        num[1] * // $rem[$i]
        prod / num[0] * // $pp
        inv(
            prod / num[0], // $pp
            num[0] // $num[$i]
        )

    ), 0);
    
result %= prod;

console.log(result);

// https://www.geeksforgeeks.org/chinese-remainder-theorem-set-2-implementation/
function inv($a, $m) { 
    console.log("INV", $a, $m);

	let $m0 = $m;
	let $x0 = 0;
	let $x1 = 1;

	if ($m == 1)
	   return 0;

	while ($a > 1) {

        // q is quotient 
        let $q = Math.floor($a / $m);

        $t = $m; 

        // m is remainder now, process  
        // same as euclid's algo 
        $m = $a % $m; 
        $a = $t; 
  
        $t = $x0; 
  
        $x0 = $x1 - $q * $x0; 
  
        $x1 = $t; 
	}

	if ($x1 < 0)
	   $x1 += $m0;
	

	return $x1;
}
