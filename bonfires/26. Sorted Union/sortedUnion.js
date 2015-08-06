function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

function unite(arr1, arr2, arr3) {
  arr = [];
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments.length; j++) {
      arr = arr.concat(arguments[i]);
    }
  }
  return uniq(arr);
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);