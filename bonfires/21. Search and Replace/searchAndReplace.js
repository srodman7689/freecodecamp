UPPERCASE = /[A-Z]/;

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function matchcaps(first, second) {
  if (UPPERCASE.test(first[0])) {
    return capitalize(second);
  } else {
    return second;
  }
}

function replace(str, before, after) {
 return str.replace(before, matchcaps(before, after));
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
