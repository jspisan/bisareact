//persi simple optional chaining

const people = undefined;

const umur = people?.[1]?.age;

console.log(umur);

//semakin besar optional chaining semakin besar bundlesize, sebaiknya hindari
