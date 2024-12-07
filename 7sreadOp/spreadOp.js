export const arr = [1,2,3,4,5];

const obj = {...arr} ;
// console.log(obj);

const char = ['a','b','c']
const result = [...char, ...arr]
const result2 = {...arr, ...char}
// console.log(result);
console.log(result2);



