DNA_PAIRS = {
  "A": "T",
  "T": "A",
  "G": "C",
  "C": "G"
};

function pair(str) {
  pairs = [];
  for (var i = 0; i < str.length; i++) {
    pairs.push([str[i], DNA_PAIRS[str[i]]]);
  }
  return pairs;
}

pair("GCG");