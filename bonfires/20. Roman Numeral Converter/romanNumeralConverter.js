ROMAN_NUMERALS = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C"
};

function convert(num) {
  if (num <= 0) return "";
  
  keys = Object.keys(ROMAN_NUMERALS);
  keys = keys.map(function(elm) {
    return parseInt(elm, 10);
  });
  keys = keys.sort(function(a,b) {
    return a + b;
  });
  
  for (i = 0; i < keys.length; i++) {
    if (num >= keys[i]) {
      return ROMAN_NUMERALS[keys[i]] + convert(num - keys[i]);
    }
  }
  return numeral;
}

convert(36);