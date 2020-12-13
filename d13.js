let data = `1000510
19,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,523,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,17,13,x,x,x,x,x,x,x,x,x,x,29,x,853,x,x,x,x,x,37,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,23`
.split("\n");

let ts = parseInt(data[0]);
let buses = data[1].split(",").filter(b => b != "x").map(Number);

let m = {};


let min = 9999999;
let minBus = -1;
for(let bus of buses){

    let mod = ts % bus;
    let dis = bus - mod;

    console.log(bus, mod, dis);
    m[bus] = dis;

    if(dis < min){
        min = dis;
        minBus = bus;
    }
}

console.log(min, "*",minBus, "=", min*minBus)

