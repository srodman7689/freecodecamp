function chunk(arr, size) {
  var multiarry = [];
  for (var i = 0; i < arr.length; i+=size){
    multiarry.push((arr.slice(i, i+size)));
  }
  return multiarry;
}

chunk(['a', 'b', 'c', 'd'], 2);