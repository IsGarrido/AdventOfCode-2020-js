let data = '1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,19,5,23,2,23,13,27,1,10,27,31,2,31,6,35,1,5,35,39,1,39,10,43,2,9,43,47,1,47,5,51,2,51,9,55,1,13,55,59,1,13,59,63,1,6,63,67,2,13,67,71,1,10,71,75,2,13,75,79,1,5,79,83,2,83,9,87,2,87,13,91,1,91,5,95,2,9,95,99,1,99,5,103,1,2,103,107,1,10,107,0,99,2,14,0,0'.split(',').map(Number);

data[1] = 12;
data[2] = 2;

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

	console.log(type + " " + inputPos1 +" "+ inputPos2 +" "+ outputPos);
	console.log(type + " " + val1 +" "+ val2 +" "+ res);

}

function sum(p1, p2, pres){
	op("+",p1,p2,pres);
}

function prod(p1, p2, pres){
	op("*",p1,p2,pres);
}

console.table(data);

let end = false;
let i = 0;

while(!end){

	let value = parseInt(data[i]);
	if(value == 1)
		sum(i+1, i+2, i+3);
	else if(value == 2)
		prod(i+1, i+2, i+3);
	else{
		console.log("Break " + value);
		end = true;
	}

	i += 4;

}

console.log(data);