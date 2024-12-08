const people = [
    {
      name: "John",
      age: 25,
      hobbies: ["reading", "hiking", "cooking"],
    },
    {
      name: "Emilly",
      age: 30,
      hobbies: ["gaming", "cooking", "photography"],
    },
    {
      name: "Sarah",
      age: 20,
      hobbies: ["dancing", "cooking", "gardening"],
    },
  ];
  

  //every digunakan untuk mengecek apakah disetiap object dalam array ada value yang ingin kita cari.
  //Misalnya apakah disetiap object dalam array memiliki hobbies yang sama.


  const every = people.every((person) => person.hobbies.includes("cooking"));
  console.log(every);
  