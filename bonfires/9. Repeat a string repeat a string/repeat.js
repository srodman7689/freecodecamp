function repeat(str, num) {
  // repeat after me
  if (num > 0) {
    return str.repeat(num);
  } else {
    return "";
  }
}

repeat('abc', 3);