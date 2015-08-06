function titleCase(str) {
  words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = capitalize(words[i]);
  }
  return words.join(" ");
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

titleCase("I'm a little tea pot");
