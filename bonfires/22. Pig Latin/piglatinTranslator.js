function range(start,stop) {
  var arr = [];
  for (var i=start.charCodeAt(0),end=stop.charCodeAt(0); i <=end; ++i){
    arr.push(String.fromCharCode(i));
  }
  return arr;
}

function diffArray(arr1, arr2) {
  return arr1.filter(function(elm) {
    return arr2.indexOf(elm) === -1;
  });
}

LETTERS = range('a', 'z');
VOWELS = ['a', 'e', 'i', 'o', 'u'];
CONSONANTS = diffArray(LETTERS, VOWELS);

function translate(str) {
  if (VOWELS.indexOf(str[0]) >= 0) {
    return str + "way";
  } else if (CONSONANTS.indexOf(str[0]) > 0 && CONSONANTS.indexOf(str[1]) > 0) {
    return str.slice(2) + str.substr(0,2) + "ay";
  } else {
    return str.slice(1) + str[0] + "ay";
  }
}

translate("consonant");