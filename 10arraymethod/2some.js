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


  //some digunakan untuk mengecek apakah aapakah benar atau salah didalam object array ada orang yang memiliki hobby tertentu
  //misalnya apakah ada orang yang memiliki hobby cooking

  
  
  const some = people.some((person) => person.hobbies.includes("cooking"));
  console.log(some);
  