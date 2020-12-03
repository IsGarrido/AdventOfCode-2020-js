
function digitsRepeat(digits){
	
	// /d busca digitos
	// () hace un grupo,
	// \1+ secuencias de lo capturado en el grupo 1
	return (digits.match(/(\d)\1+/g) || [])
		.map(x => x.length)
		.includes(2);

}

function digitIncrease(digits){

	for(let i = 0; i < digits.length-1; i++){
		if( digits[i] > digits[i+1] )
			return false;
	}
	return true;

}

function validatePassword(pw){
	pw = pw+"";
	if(!digitIncrease(pw))
		return false;

	if(!digitsRepeat(pw))
		return false;
	
	console.log(pw);
	return true;

}

function totalpasswords(min, max){

	let c = 0;
	for( let i = min; i < max; i++){
		if(validatePassword(i))
			c++;
	}

	return c;

}

console.log(totalpasswords(264360,746325));

/*
console.log(digitsRepeat("123112"));
console.log(digitsRepeat("221113"));
console.log(digitsRepeat("123123"));
console.log(digitsRepeat("123111"));
console.log(digitsRepeat("2223311"));



console.log(digitsRepeat("112233"));
console.log(digitsRepeat("123444"));
console.log(digitsRepeat("111122"));
console.log(digitsRepeat("688889"));
*/