function telephoneCheck(str) {
  if (str[0] === "-"||
      (str[0] === "(" && str[4] !== ")")) {
    return false;
  }
  numbers = str.replace(/\(/g, '')
               .replace(/-/g, '')
               .replace(/\)/g, '')
               .replace(/ /g, '');
  if( numbers.length !== 11 &&
      numbers.length !== 10 &&
      numbers.length !== 7) {
    return false;
  } else if (isNaN(numbers)) {
    return false;
  } else if (numbers.length == 11 &&
             numbers[0] !== "1") {
    return false;
  }
  return true;
}



telephoneCheck("555-555-5555");