let data = [];

function op(type, pos1, pos2, pos3 ){

	let inputPos1 = data[pos1];
	let inputPos2 = data[pos2];
	let outputPos = data[pos3];

	let val1 = data[inputPos1];
	let val2 = data[inputPos2];

	let res = type == "+" ?
					val1 + val2 :
					val1 * val2;

	data[outputPos] = res;

}

function sum(p1, p2, pres){
	op("+",p1,p2,pres);
	return 4;
}

function prod(p1, p2, pres){
	op("*",p1,p2,pres);
	return 4;
}

function set(p1){

	return 2;
}

function log(p1){

	return 2;
}

function compute(a, b){

	// Set values
	data = '1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,19,5,23,2,23,13,27,1,10,27,31,2,31,6,35,1,5,35,39,1,39,10,43,2,9,43,47,1,47,5,51,2,51,9,55,1,13,55,59,1,13,59,63,1,6,63,67,2,13,67,71,1,10,71,75,2,13,75,79,1,5,79,83,2,83,9,87,2,87,13,91,1,91,5,95,2,9,95,99,1,99,5,103,1,2,103,107,1,10,107,0,99,2,14,0,0'.split(',').map(Number);
	data[1] = a;
	data[2] = b;

	let end = false;
	let i = 0;

	while(!end){

		let value = data[i];
		let skip = 0;
		if     ( value == 1 )
			skip = sum(i+1, i+2, i+3);
		else if( value == 2 )
			skip = prod(i+1, i+2, i+3);
		else if ( value == 3 )
			skip = set(i+1)
		else if ( value == 4 )
			skip = log(i+1)
		else
			end = true;
		

		i += skip;

	}

	return data[0];

}

for(let i = 0; i < 100; i++){

	let res = 0;
	for(let j = 0; j < 100; j++){
		let res = compute(i,j);
		//console.log(res);
		if(res == 19690720){
			console.log(res);
			let out = (100*i)+j
			console.log("100 * "+ i + " + " + j + " = " + out);
			break;
		}
	}
	if(res == 19690720)
		break;
}
	



