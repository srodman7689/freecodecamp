function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var orbitalPeriods = [];
  for (var i = 0; i < arr.length; i++ ) {
    var orbPer = Math.round(2 * Math.PI  * Math.sqrt(Math.pow(arr[i].avgAlt + earthRadius, 3)/GM));
    orbitalPeriods.push({name: arr[i].name, orbitalPeriod: orbPer});
  }
  return orbitalPeriods;
}

orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}]);