function palindrome(str) {
  str = str.replace(/(\s|\.|,)*/g,'').toLowerCase();
  if (str === reverse(str)) {
    return true;
  } else {
    return false;
  }
}

function reverse(str) {
  return str.split('').reverse().join('');
}


palindrome("eye");
