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

const transformed = people.map((person) => ({
  nama: person.name_lengkap,
  umur: person.age_nya,
  hobi: person.hobbies_nya,
}));
console.log(transformed);

// hasilnya berupa array baru yang berisi objek yang telah diubah

/*
[
    { nama: 'John', umur: 25, hobi: [ 'reading', 'hiking', 'painting' ] },
    {
      nama: 'Emilly',
      umur: 30,
      hobi: [ 'gaming', 'cooking', 'photography' ]
    },
    {
      nama: 'Sarah',
      umur: 20,
      hobi: [ 'dancing', 'swimming', 'gardening' ]
    }
  ]

  */
