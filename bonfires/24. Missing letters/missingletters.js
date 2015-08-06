function fearNotLetter(str) {
  prevCharCode = str.charCodeAt(0) - 1;
  for (var i = 0; i < str.length; i++) {
    currCharCode = str.charCodeAt(i);
    if (prevCharCode != currCharCode - 1) {
      return String.fromCharCode(currCharCode-1);
    }
    prevCharCode = currCharCode;
  }
  return undefined;
}

fearNotLetter('abce');
