function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

function sumPrimes(num) {
  return getPrimes(num).reduce(function(prev, curr) {
    return prev + curr;
  });
}

sumPrimes(10);