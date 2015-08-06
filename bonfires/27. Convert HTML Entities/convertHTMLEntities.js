HTML_ENTITIES = {
  '&': "&amp;",
  '<': "&lt;",
  '>': "&gt;",
  '"': "&quot;",
  "'": "&apos;"
};

function convert(str) {
  for (var i = 0; i < str.length; i++) {
    if (HTML_ENTITIES.hasOwnProperty(str[i])) {
      str = str.replace(str[i], HTML_ENTITIES[str[i]]);
    }
  }
  return str;
}

convert('Dolce & Gabbana');
