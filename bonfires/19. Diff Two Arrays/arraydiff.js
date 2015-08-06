function diff(arr1, arr2) {
  var newArr = [];
  var first = arr1.filter(function(elm) {
    return arr2.indexOf(elm) === -1;
  });
  var second = arr2.filter(function(elm) {
    return arr1.indexOf(elm) === -1;
  });
  return first.concat(second);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);