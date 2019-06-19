const isPrime = num => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i * i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(23));
console.log(isPrime(183));
console.log(isPrime(7));
