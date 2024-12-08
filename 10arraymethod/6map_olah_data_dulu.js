const people = [
  {
    name_lengkap: "John",
    age_nya: 25,
    hobbies_nya: ["reading", "hiking", "painting"],
  },
  {
    name_lengkap: "Emilly",
    age_nya: 30,
    hobbies_nya: ["gaming", "cooking", "photography"],
  },
  {
    name_lengkap: "Sarah",
    age_nya: 20,
    hobbies_nya: ["dancing", "swimming", "gardening"],
  },
];

//map mengubah array menjadi array baru

const transformed = people.map((person) => {

  const nama = `Hallo nama saya ${person.name_lengkap}  `
  return {
    name: nama,
    umur: person.age_nya,
    hobi: person.hobbies_nya,
  };
});
console.log(transformed);

