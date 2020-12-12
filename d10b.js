




let data = `16
10
15
5
1
11
7
19
6
12
4`;

//0 -> 1 (dif 1) -> 4 (dif 3) -> 5 (dif 1) -> 6 (dif 1) -> 7 (dif 1) -> 10 (dif 3) -> 11 (dif 1) -> 12 (dif 1) -> 15 (dif 3) -> 16 (dif 1) -> 19 (dif 3) -> 22 (dif 3)
// (dif 1)(dif 1)(dif 1)(dif 1)(dif 1)(dif 1)(dif 1) -> 7 x dif 1
// (dif 3)(dif 3)(dif 3)(dif 3)(dif 3) 5 x dif 3



data = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;

data = `35
111
135
32
150
5
106
154
41
7
27
117
109
63
64
21
138
98
40
71
144
13
66
48
12
55
119
103
54
78
65
112
39
128
53
140
77
34
28
81
151
125
85
124
2
99
131
59
60
6
94
33
42
93
14
141
92
38
104
9
29
100
52
19
147
49
74
70
84
113
120
91
97
17
45
139
90
116
149
129
87
69
20
24
148
18
58
123
76
118
130
132
75
110
105
1
8
86`;

data = data.split("\n").map(Number)
data = data.sort((a,b) => a-b);
console.log(data)

/*
FML
class Adapter {

	Get(pos){
		return data[pos];
	}

	constructor(pos){
		this.Pos = pos;
		this.Val = this.Get(pos);
	}

	next(){

		let n1 = this.Get(this.Pos+1);
		let n2 = this.Get(this.Pos+2);
		let n3 = this.Get(this.Pos+3);
		let res = 0;

		if(!n1 && !n2 && !n3) res++;

		//console.log("Pos %i con Val %i (%i, %i, %i)",this.Pos,this.Val, n1, n2, n3)

		if( n1 && n1 <= this.Val+3)
			res += new Adapter(this.Pos+1).next();
		if( n2 &&  n2 <= this.Val+3)
			res += new Adapter(this.Pos+2).next();
		if( n3 &&  n3 <= this.Val+3)
			res += new Adapter(this.Pos+3).next();

		return res;

	}
}
*/



data = [0,...data]/*
let r = new Adapter(0).next();
console.log("Resultado", r);
*/

let cache = [1];
data.forEach((val, i) => {
    let j = i + 1;
    while (data[j] <= val + 3) {
		//console.log(cache);
		let add = cache[j] || 0;
		console.log(val, data[j], cache[i], cache[j])

		cache[j] = add + cache[i];
		j++;
	};
});

console.log(cache[data.length - 1]);


