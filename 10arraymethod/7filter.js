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
      hobbies: ["dancing", "swimming", "gardening"],
    },
  ];
  
  //filter mengembalikan array baru yang berisi elemen yang memenuhi kriteria yang ditentukan.
  //find hanya mengembalikan object yang pertama kali ditemukan dari array walaupun didalam array terdapat banyak object yang memenuhi kriteria yang ditentukan.
 

  
  const filter = people.filter(person => person.hobbies.includes("cooking"));
  console.log(filter);
  
//   const filter = people.find(person => person.hobbies.includes("cooking"));
//   console.log(filter);
   

  