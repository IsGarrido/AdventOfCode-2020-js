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


let curr = 0;
let diff1 = 0;
let diff3 = 0;
for(let i = -1; i < data.length; i++){

	let next = data[i+1];

	console.log(curr, next)
	if(next == curr+1){
		curr += 1;
		diff1++;
		console.log("DIF 1");
	} else if(next == curr+3){
		curr += 3;
		diff3++;
		console.log("DIF 3")
	} else {
		console.error("wtf", "curr", curr, "pos", i, "val",data[i+1]);
	}
}

diff3++;
console.log(diff1, diff3, diff1*diff3);

