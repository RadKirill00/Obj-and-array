let obj = {q: 2, d: 3, r: 4}
console.log('h' in obj);
console.log('q' in obj);

///////////////////////////////////////

let obj2 = {d: 2, l: 3, f: 4}
delete obj2.d
console.log('d' in obj2);

//////////////////////////////////////

let obj4 = {x: 1, y: 2, z: 3};
console.log( typeof obj4['x'] );

//////////////////////////////////////

console.log(typeof {} );

/////////////////////////////////////

let arr = ['1', '2', '3'];
console.log( typeof arr[0] );

/////////////////////////////////////

console.log( typeof {x: 1, y: 
	2, z: 3} ); 

/////////////////////////////////////

console.log(Array.isArray({}));

/////////////////////////////////////

