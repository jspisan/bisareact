async function getData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(data);
}


getData();