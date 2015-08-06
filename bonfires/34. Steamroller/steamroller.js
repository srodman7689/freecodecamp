function clean(arr, deleteValue) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == deleteValue) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

function steamroller(arr) {
  var answer = [];
  answer = clean(arr.toString().split(","), "");
  // hack for numbers, come back and
  // make pretty!
  for (var i = 0; i < answer.length; i++) {
    if (!isNaN(answer[i])) {
      answer[i] = parseInt(answer[i], 10);
    }
  }
  return answer;
}

steamroller([1, [2], [3, [[4]]]]);
