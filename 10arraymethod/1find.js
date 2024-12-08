const people = [
  {
    name: "John",
    age: 25,
    hobbies: ["reading", "hiking", "painting"],
  },
  {
    name: "Emilly",
    age: 30,
    hobbies: ["gaming", "cooking", "photography"],
  },
  {
    name: "Sarah",
    age: 20,
    hobbies: ["dancing", "swimming", "gardening"],
  },
];

// find  untuk mengeluarkan 1 data dalam  sebuah oject list 

const find = people.find((person) => person.name === "John");
console.log(find);
