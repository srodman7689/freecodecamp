function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (target === str.substr(str.length - target.length, target.length)) {
    return true;
  }
  return false;
}

end('Bastian', 'n');
