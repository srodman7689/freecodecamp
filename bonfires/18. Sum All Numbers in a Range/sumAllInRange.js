function sumAll(arr) {
  var smallest = Math.min.apply(0, arr);
  var biggest = Math.max.apply(0, arr);
  var sum = 0;
  for (var i = smallest; i <= biggest; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);