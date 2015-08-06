var memoFib = {};

function fib(num) {
  if (memoFib[num])  {
    return memoFib[num];
  }
  else {
    if (num === 0) return 0;
    if (num == 1 || num == 2) return 1;
    memoFib[num] = fib(num-1) + fib(num - 2);
    return memoFib[num];
  }
}

function sumFibs(num) {
  var currNum = 0;
  var count = 0;
  var fibs = [];
  while (currNum < num) {
    currNum = fib(count);
    fibs.push(currNum);
    count += 1;
  }
  if (fibs[fibs.length-1] > num) {
    fibs.pop();
  }
  
  var odds = fibs.filter(function(elm) {
    return elm % 2 === 1;
  });
  return odds.reduce(function(prev, curr) {
    return prev + curr;
  });
}

sumFibs(4);
