function mutation(arr) {
  var wordtocheck = arr[0].toLowerCase();
  var checkwith = arr[1].toLowerCase();
  var containsall = true;
  for (var i = 0; i < checkwith.length; i++) {
    letter = checkwith[i];
    if (wordtocheck.indexOf(letter) === -1) {
      containsall = false;
    }
  }
  return containsall;
}

mutation(['hello', 'hey']);