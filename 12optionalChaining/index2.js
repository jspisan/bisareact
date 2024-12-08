//object nya tidak ada sehingga perlu dihandle dg optional chaining

const people = undefined;

let umur;
if(people && people.length > 1) {
    if(people[1] && people[1].age) {
        umur = people[1].age;
    }
}


console.log(umur);
