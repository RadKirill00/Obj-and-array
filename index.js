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


let arr1 = [1, 2, 3];
let arr2 = arr1; // Мы присваиваем обьект в переменной 1 в переменную 2

arr1[0] = 'a';
arr2[0] = 'b';

console.log(arr2);

//////////////////////////////////////

const arr4 = ['a', 'b', 'c'];
arr4[1] = '!';
console.log(arr4); //Будет работать, так как мы меняем свойство

// const arr5 = ['a', 'b', 'c'];
// arr5 = [1, 2, 3];
// console.log(arr5); //Не будет работать, так как мы меняем массив, что нельзя делать в константе

/////////////////////////////////////


const arr6 = [1, 2, 3, 4, 5];
const res = arr6[1] + arr6[2];

console.log(res); //Метод записывание переменных константами

///////////////////////////////////////


const obj8 = {x: 1, y: 2, z: 3};
const sum2 = obj8.x + obj8.y + obj8.z
console.log(sum2);

/////////////////////////////////////

let obj7 = {x: 1, y: 2, z: 3, f: 5};
console.log(Object.keys(obj7).length); //выводит кол-во ключей обьекта