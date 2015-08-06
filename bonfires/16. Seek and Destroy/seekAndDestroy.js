function destroyer(arr) {
  var remove = [];
  var removefrom = arr;
  var answer = [];
  for (var i = 1; i < arguments.length; i++) {
    remove.push(arguments[i]);
  }
  answer = removefrom.filter(function(element) {
    return remove.indexOf(element) < 0;
  });
  return answer;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
