"123456"

function digitsRepeat(digits){
	
	for(let i = 0; i < digits.length-1; i++){
		if( digits[i] == digits[i+1] ){
			return true;
		}
	}
	return false;
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
	return digitsRepeat(pw) && digitIncrease(pw);

}

function totalpasswords(min, max){

	let c = 0;
	for( let i = min; i < max; i++){
		if(validatePassword(i))
			c++;
	}

	return c;

}

console.log(totalpasswords(264360,746325))