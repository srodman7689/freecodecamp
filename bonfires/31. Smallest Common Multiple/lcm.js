function intRange(start, end) {
  var arr = [];
  for (var i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

function smallestCommons(arr) {
    arr.sort();
    var numRange = intRange(arr[0], arr[1]);
    var n = numRange.length, a = Math.abs(numRange[0]);
    for (var i = 1; i < n; i++)
     { var b = Math.abs(numRange[i]), c = a;
       while (a && b){ a > b ? a %= b : b %= a; }
       a = Math.abs(c*numRange[i])/(a+b);
     }
    return a;
}


smallestCommons([1,5]);