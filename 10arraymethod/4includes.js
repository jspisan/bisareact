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


  //include dighunakan untuk mengecek apakah ada value yang ingin kita cari dalam array.
  //misalnya apakah ada orang yang memiliki hobby cooking

  
  
  const some = people.some((person) => person.hobbies.includes("cooking"));
  console.log(some);
  