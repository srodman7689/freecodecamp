function reverseString(str) {
  var strarry = str.split('');
  strarry.reverse();
  return strarry.join('');
}

reverseString('hello');
