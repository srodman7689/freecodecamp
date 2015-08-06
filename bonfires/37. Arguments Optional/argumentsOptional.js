function add() {
  if (isNaN(arguments[0])) {
     return undefined;
  } else if (arguments.length > 1) {
    if (arguments[0] !== parseInt(arguments[0], 10) ||
        arguments[1] !== parseInt(arguments[1], 10)) {
      return undefined;
    }
    else {
      return arguments[0] + arguments[1];
    }
  } else {
    firstNum = arguments[0];
    return function(num) {
      if (num !== parseInt(num, 10)) {
        return undefined;
      }
      return firstNum + num;
    };
  }
}

add(2,3);
