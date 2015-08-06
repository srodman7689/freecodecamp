function inventory(arr1, arr2) {
  var finalInv = [];
  finalInv = finalInv.concat(arr1);
  for (var i = 0; i < arr1.length; i++) {
    arr2.filter(function(elm, idx, arr) {
      if(elm[1] == finalInv[i][1]) {
        finalInv[i][0] += elm[0];
        arr2.splice(idx, 1);
      }
  });
  }
  finalInv = finalInv.concat(arr2);
  finalInv = finalInv.sort(function(a,b) {
    if (a[1].toLowerCase() < b[1].toLowerCase()) return -1;
    if (a[1].toLowerCase() > b[1].toLowerCase()) return 1;
  });
  return finalInv;
}

// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];
inventory(curInv, newInv);