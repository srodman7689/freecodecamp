function every(collection, pre) {
  answer = true;
  for (var i = 0; i < collection.length; i++) {
    if(!collection[i].hasOwnProperty(pre)) {
      answer = false;
    }
  }
  return answer;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');