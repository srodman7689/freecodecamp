var facMemo = [];

function factorial (num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  if (facMemo[num]) {
    return facMemo[num];
  }
  return factorial(num-1) * num;
}

function permAlone(str) {
  var arr = str.split('');
  var numPermutations = factorial(str.length);
  var memoInvalid = {};

  function invalidPermutations(char, index, arr) {
    var memo = char+arr.slice().sort().join('');
    if(memoInvalid[memo])
    {
      return memoInvalid[memo];
    }
    if(arr.length === 0) {
      return 0;
    }
    var arr2 = arr.slice();
    arr2.splice(arr.indexOf(char),1);

    arr2 = arr2.map(function(nextChar,index,arr) {
      if (char === nextChar) {
        return factorial(arr.length-1);
      }
      else {
        return invalidPermutations(nextChar, null, arr);
      }
    });
    memoInvalid[memo] = arr2.reduce(function(a,b) { return a+b;},0);
    return memoInvalid[memo];
  }

  arr = arr.map(invalidPermutations);
  return numPermutations - arr.reduce(function(a,b) {return a+b;});

}

console.log(permAlone('aab'));