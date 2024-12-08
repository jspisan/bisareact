function random(max) {
  return Math.floor(Math.random() * max);
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const MAX_PRIME = 1000000;

function expensiveCalculation(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  console.log(primes);
  return primes;
}

//Async await

console.log("START");
expensiveCalculation(1000000);
console.log("END");
